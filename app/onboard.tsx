import React, { useState, useRef } from 'react';
import { FlatList, Image, Text, View, StyleSheet, Dimensions, Animated, TouchableOpacity } from 'react-native';
import OnboardItem from '@/components/elements/OnboardItem';
import { styles } from '@/constants/styles';
import Button from '@/components/ui/Button';
import Paywall from './paywall';

const { width, height } = Dimensions.get('window'); // Ekran genişliğini ve yüksekliğini alın

export default function Onboard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const scrollX = new Animated.Value(0);
  const slideAnim = useRef(new Animated.Value(height)).current; // Animasyon için yeni bir değer tanımla

  const flatListRef = useRef(null);  // FlatList referansı

  const slides = [
    {
      bg: require('../assets/images/onboardBg1.png'),
      image: require('../assets/images/onboardImg1.png'),
      title: (
        <>
          <Text style={styles.brushTitle}>
            Take a photo to <Text style={styles.bold}>identify</Text> the plant!
          </Text>
          <Image source={require("../assets/images/brush.png")} style={styles.brush} />
        </>
      ),
    },
    {
      bg: require('../assets/images/onboardBg2.png'),
      image: require('../assets/images/onboardImg2.png'),
      title: (
        <>
          <Text style={styles.brushTitle}>
            Get plant <Text style={styles.bold}>care guides</Text>
          </Text>
          <Image source={require("../assets/images/brush.png")} style={[styles.brush, { right: 35 }]} />
        </>
      ),
    },
    {

    },
  ];

  const handleScroll = (event) => {
    const index = Math.round(
      event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width
    );
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    const nextIndex = currentIndex + 1;
    if (currentIndex < slides.length - 2) {
      setCurrentIndex(nextIndex);
    } else {

      setIsModalVisible(true);
      Animated.spring(slideAnim, {
        toValue: 0, // Sayfayı yukarı kaydır
        useNativeDriver: true,
      }).start();
    }
    flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
  };

  const closeModal = () => {
    Animated.spring(slideAnim, {
      toValue: height, // Sayfayı tekrar aşağı kaydır
      useNativeDriver: true,
    }).start(() => setIsModalVisible(false));
  };

  return (
    <View style={[styles.layout]}>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={({ item }) => <OnboardItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item, index) => index.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onMomentumScrollEnd={handleScroll}
      />

      <View style={styles.footer}>
        <Button btnStyle={style.btn} onPress={goToNextSlide}>
          Continue
        </Button>
      </View>

      <View style={style.dotsContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              style.dot,
              index === currentIndex && style.activeDot,
            ]}
          />
        ))}
      </View>

      {/* Yeni Modal (Sayfa) */}
      {isModalVisible && (
        <Animated.View style={[style.modal, { transform: [{ translateY: slideAnim }] }]}>
          <Paywall />
        </Animated.View>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: "absolute",
    bottom: 32,
    left: 0,
    right: 0
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: '#D3D3D3',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#000',
    width: 12,
    height: 12,
  },
  btn: {
    marginBottom: 48
  },
  modal: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: height * 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
    elevation: 5,
    // padding: 20,
  },
});
