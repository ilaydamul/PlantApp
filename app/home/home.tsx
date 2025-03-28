import IconInput from '@/components/ui/IconInput';
import { Colors } from '@/constants/colors';
import { styles } from '@/constants/styles';
import { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, ScrollView, Pressable, Image } from 'react-native';
// import { LinearGradient } from "react-native-linear-gradient";

export default function Home() {
  const [search, onChangeSearch] = useState('');

  return (
    <ScrollView style={[styles.layout, { backgroundColor: Colors.bgGray }]}>
      <ImageBackground style={[styles.container, styles.statusHeight,]} source={require('../../assets/images/bg3.png')} resizeMode="cover"  >
        <Text style={[styles.fsSm, { paddingTop: 20 }]}>Hi, plant lover!</Text>
        <Text style={[styles.fsLg, styles.bold, { marginBottom: 16, marginTop: 8 }]}>Good Afternoon! ⛅</Text>

        <IconInput onChangeValue={(text) => { onChangeSearch(text) }} value={search} placeholderText='Search for plants' icon='search' />
      </ImageBackground>

      <View style={styles.container}>
        <Pressable style={style.mailBg}>
          <Image
            source={require('../../assets/images/icons/mail-icon.png')}
            style={{ width: 32, height: 25 }}
            resizeMode="contain"
          />
          <View style={style.mailIconNotif}>
            <Text style={style.mailIconNotifText}>1</Text>
          </View>

          <View>
          {/* <LinearGradient
            colors={['#E5C990', '#E4B046']} 
            start={{ x: 0, y: 0 }} 
            end={{ x: 1, y: 1 }}  
          >
            <Text style={styles.bold}>FREE Premium Available</Text>
          </LinearGradient>
           */}

            <Text>FREE Premium Available</Text>
            <Text>Tap to upgrade your account!</Text>
          </View>



        </Pressable>
      </View>

    </ScrollView>


  );
}

const style = StyleSheet.create({
  mailBg: {
    position: "relative",
    backgroundColor: Colors.brown,
    padding: 20,
    borderRadius: 18
  },
  mailIconNotif: {
    position: "absolute",
    left: 40,
    top: 10,
    width: 18,
    height: 18,
    backgroundColor: Colors.red,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: "50%"
  },
  mailIconNotifText: {
    color: Colors.white,
  },
  text:{

  }
})
