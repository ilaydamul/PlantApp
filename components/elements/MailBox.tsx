import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import MaskedView from '@react-native-masked-view/masked-view'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function MailBox() {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('profile');
    }

    return (
        <Pressable style={style.mailBg} onPress={handlePress}>
            <Image
                source={require('../../assets/images/icons/mail-icon.png')}
                style={{ width: 32, height: 25 }}
                resizeMode="contain"
            />
            <View style={style.mailIconNotif}>
                <Text style={style.mailIconNotifText}>1</Text>
            </View>

            <View>
                <Text style={style.title}>FREE Premium Available</Text>
                <Text style={style.text}>Tap to upgrade your account!</Text>
            </View>

            <AntDesign name="right" size={24} color="#D0B070" />
        </Pressable>
    )
}

const style = StyleSheet.create({
    mailBg: {
        position: "relative",
        backgroundColor: Colors.brown,
        padding: 18,
        borderRadius: 18,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
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
    title: {
        fontWeight: "bold",
        color: Colors.white,
        fontSize: 18
    },
    text: {
        color: Colors.white
    }
})
