import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import React from 'react';

export default function CategoryItem({ item }: any) {
    const screenWidth = Dimensions.get('window').width;
    const itemWidth = screenWidth / 2 - 26;

    return (
        <View style={[style.categoryItem, { width: itemWidth }]}>
            <Text style={style.title}>{item.title}</Text>
            <Image
                source={{ uri: item.image.url }}
                resizeMode="cover"
                style={style.image}
            />
        </View>
    );
}

const style = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: "600",
    },

    categoryItem: {
        backgroundColor: "white",
        height: 160,
        padding: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#E5E5E5",
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 12,
        position: "absolute",
        right: 0,
        bottom: 0,
    },
});
