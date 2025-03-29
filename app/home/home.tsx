import FaqItem from '@/components/elements/FaqItem';
import MailBox from '@/components/elements/MailBox';
import IconInput from '@/components/ui/IconInput';
import Colors from '@/constants/Colors';
import { styles } from '@/constants/styles';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, ScrollView, Pressable, Image } from 'react-native';


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
        <MailBox />

        <Text style={[styles.bold, styles.fsSm, { marginTop: 20, marginBottom: 16 }]}>Get Started</Text>

        <FaqItem></FaqItem>


      </View>


    </ScrollView>


  );
}

