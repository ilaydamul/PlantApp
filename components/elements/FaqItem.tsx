import { styles } from '@/constants/styles';
import { BlurView } from 'expo-blur';
import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';

export default function FaqItem({ item }: any) {
    const onPressHandler = () => {
        console.log(item.uri);
    };

    return (
        <Pressable onPress={onPressHandler} style={style.container}>
            <ImageBackground
                source={{ uri: item.image_uri }}
                resizeMode="cover"
                style={style.faqItem}
            >

                <Text style={[style.text]}>
                    {item.title}
                </Text>

            </ImageBackground>
        </Pressable>
    );
}

const style = StyleSheet.create({
    container: {
        borderRadius: 12,
        overflow: 'hidden',
        position: "relative",
        width: 300,
    },
    faqItem: {
        padding: 12,
        height: 215
    },
    text: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        color: '#FFF',
        fontSize: 20,
        paddingBottom: 20,
        height: 85,

    },
});
