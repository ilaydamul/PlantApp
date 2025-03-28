import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    onPress: () => void;
    mt?: number;
    mb?: number;
}

export default function Button({ children, mt, mb, onPress }: ButtonProps) {
    return (
        <Pressable style={({ pressed }) => [pressed && style.pressed, { marginTop: mt, marginBottom: mb }, style.btn]}
            onPress={onPress}>
            <Text style={style.btnText}>{children}</Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    btn: {
        backgroundColor: "#28AF6E",
        paddingVertical: 20,
        borderRadius: 12
    },
    btnText: {
        textAlign: "center",
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold"
    },
    pressed: {
        opacity: 0.7,
    },
})