import { View, Text, StyleSheet, Image, ImageBackground, Pressable, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Button from '@/components/ui/Button'
import { styles } from '@/constants/styles'
import Colors from '@/constants/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import AdvantageItem from '@/components/elements/AdvantageItem'
import RadioButton from '@/components/elements/RadioButton'
import { Link, useNavigation } from 'expo-router'

export default function Paywall() {
    const navigation = useNavigation();
    const [selectedOption, setSelectedOption] = useState("1 Month");

    const options = [
        { title: "1 Month", desc: "$2.99/month, auto renewable" },
        { title: "1 Year", desc: "First 3 days free, then $529,99/year", save: "Save 50%" },
    ]

    const advantages = [
        {
            title: "Unlimited",
            desc: "Plant Identify",
            icon: require("../assets/images/icons/unlimited-icon.png"),
        },
        {
            title: "Faster",
            desc: "Process",
            icon: require("../assets/images/icons/faster-icon.png"),
        },
        {
            title: "Detailed",
            desc: "Plant Care",
            icon: require("../assets/images/icons/detailed-icon.png"),
        },
    ]

    const goHomeHandler = () => {
        navigation.replace("home");
    }

    const tryFreePressHandler = () => {
        navigation.replace("home");
    }


    return (
        <ScrollView style={[style.modalContent]}>
            <Image source={require("../assets/images/preBg.png")} resizeMode='cover' style={style.modalBg} />
            <Pressable style={style.closeBtn} onPress={goHomeHandler}>
                <MaterialCommunityIcons name="close" size={24} color="white" />
            </Pressable>

            <View style={[styles.container, styles.statusHeight, style.bgHeight]}>
                <Text style={style.modalTitle}><Text style={styles.bold}>PlantApp</Text> Premium</Text>
                <Text style={style.modalDesc}>Access All Features</Text>


                <FlatList
                    data={advantages}
                    keyExtractor={(item) => item.title}
                    renderItem={({ item }) => (<AdvantageItem item={item} />)}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 20, marginBottom: 20 }}
                    horizontal
                    ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                />

                <RadioButton
                    options={options}
                    selected={selectedOption}
                    onSelect={setSelectedOption}
                />

                <View style={[{ marginTop: 20 }]}>
                    <Button onPress={tryFreePressHandler}>Try free for 3 days</Button>
                    <Text style={[styles.footerText, { marginTop: 12, fontSize: 10 }]}>
                        After the 3-day free trial period you’ll be charged ₺274.99 per year unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable {'\n'}


                    </Text>
                    <Text style={[styles.footerText, { marginTop: 8, fontSize: 12 }]}>
                        <Link href="/" >Terms</Link> • <Link href="/" >Privacy</Link> •  <Link href="/" >Restore</Link>
                    </Text>
                </View>

            </View>

        </ScrollView>
    )
}

const style = StyleSheet.create({
    modalBg: {
        width: "100%",
        height: 500,
        position: "absolute",
    },
    bgHeight: {
        marginTop: 230
    },
    modalContent: {
        flex: 1,
        backgroundColor: "#101E17"

    },
    modalTitle: {
        fontSize: 32,
        marginBottom: 4,
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
