import { styles } from '@/constants/styles';
import { View, Text, ImageBackground } from 'react-native';

export default function OnBoardingOne() {
    return (
        <ImageBackground source={require('../../assets/images/bg2.png')} style={[styles.layout, { height: "105%" }]}>
            <View>
                <Text>OnBoardingOne</Text>
            </View>
        </ImageBackground>

    )
};