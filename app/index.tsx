import { Link, useNavigation } from 'expo-router';
import { Image, ImageBackground, Text, View } from 'react-native';
import { styles } from "../constants/styles";
import Button from '@/components/ui/Button';

export default function Root() {
  const navigation = useNavigation();

  function onPressHandler() {
    navigation.navigate("home");
  }

  return (
    <ImageBackground source={require('../assets/images/bg.png')} style={[styles.layout, styles.statusHeight]} resizeMode="cover"  >
      <View style={styles.container}>
        <Text style={styles.mainTitle}>Welcome to <Text style={styles.bold}>PlantApp</Text></Text>
        <Text style={styles.titleDesc}>
          Identify more than 3000+ plants and 88% accuracy.
        </Text>
      </View>
      <Image
        source={require('../assets/images/startImg.png')}
        resizeMode="contain"
        style={{
          height: '59%',
          width: '100%',
        }}
      />
      <View style={styles.container}>
        <Button onPress={onPressHandler}>Get Started</Button>
        <Text style={[styles.footerText, { marginTop: 12 }]}>
          By tapping next, you are agreeing to PlantID {'\n'}
          <Link href="/" style={styles.underline}>Terms of Use</Link> & <Link href="/" style={styles.underline}>Privacy Policy</Link>.
        </Text>
      </View>
    </ImageBackground>

  )



}