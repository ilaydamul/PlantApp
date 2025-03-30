import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

interface AdvantageItemProps {
    item: {
        icon: any;
        title: string;
        desc: string;
    };
}

export default function AdvantageItem({ item }: AdvantageItemProps) {
    return (
        <View style={[style.advantageItem]}>
            <View style={style.icon}>
                <Image source={item.icon} style={{ width: 20, height: 20 }} resizeMode='contain' />
            </View>
            <View>
                <Text style={[style.title]}>{item.title}</Text>
                <Text style={style.desc}>{item.desc}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    advantageItem: {
        width: 160,
        backgroundColor: "#FFFFFF12",
        borderRadius: 18,
        padding: 18
    },
    icon: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#00000033",
        borderRadius: 9,
        marginBottom: 16
    },
    title: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "500",
        marginBottom: 2
    },
    desc: {
        color: "#FFFFFFB3",
        fontSize: 14,
    },
})