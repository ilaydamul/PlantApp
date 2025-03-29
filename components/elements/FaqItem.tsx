import { styles } from '@/constants/styles';
import { BlurView } from 'expo-blur';
import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';

export default function FaqItem() {
    const onPressHandler = () => {
        console.log("Basıldı.");
    };

    return (
        <Pressable onPress={onPressHandler} style={style.container}>
            <ImageBackground
                source={require('../../assets/images/Card.png')}
                resizeMode="cover"
                style={style.faqItem}
            >

                <BlurView intensity={1} tint="default" style={style.textContainer}>
                    <Text style={style.text}>
                        How to identify <Text style={styles.bold}>plants easily with PlantApp?</Text>
                    </Text>
                </BlurView>

            </ImageBackground>
        </Pressable>
    );
}

const style = StyleSheet.create({
    container: {
        borderRadius: 12,
        overflow: 'hidden',
        position: "relative"
    },
    faqItem: {
        padding: 12,
        height: 215
    },
    textContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        paddingBottom: 18,
        borderTopWidth: 1,
        borderTopColor: "#FFFFFF1A",
        // backgroundColor: 'rgba(255, 255, 255, 0.2)',

    },
    text: {
        color: '#FFF',
        fontSize: 18,

    },
});
