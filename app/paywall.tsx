import { View, Text, StyleSheet, Image, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import Button from '@/components/ui/Button'
import { useNavigation } from '@react-navigation/native'
import { styles } from '@/constants/styles'
import Colors from '@/constants/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Paywall() {
    const navigation = useNavigation()

    const goHomeHandler = () => {
        navigation.navigate("home");
    }


    return (
        <View style={[style.modalContent]}>
            <Image source={require("../assets/images/preBg.png")} resizeMode='cover' style={style.modalBg} />
            <Pressable style={style.closeBtn} onPress={goHomeHandler}>
                <MaterialCommunityIcons name="close" size={24} color="white" />
            </Pressable>

            <View style={[styles.container, styles.statusHeight, style.bgHeight]}>
                <Text style={style.modalTitle}><Text style={styles.bold}>PlantApp</Text> Premium</Text>
                <Text style={style.modalDesc}>Access All Features</Text>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    modalBg: {
        width: "100%",
        height: 600,
        position: "absolute",
    },
    bgHeight: {
        marginTop: 320
    },
    modalContent: {
        flex: 1,
        backgroundColor: "#101E17"
        // justifyContent: 'center',
        // alignItems: 'center',

    },
    modalTitle: {
        fontSize: 32,
        // fontWeight: 'bold',
        marginBottom: 8,
        color: Colors.white
    },
    modalDesc: {
        color: "#ffffffb3",
        fontSize: 18
    },
    closeBtn: {
        marginTop: 20,
        backgroundColor: "#00000066",
        position: "absolute",
        right: 12,
        top: 25,
        borderRadius: 50,
        width: 35,
        height: 35,
        justifyContent: "center",
        alignItems: "center"
    },
});
