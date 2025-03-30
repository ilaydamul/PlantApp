import { ImageBackground, Image, StyleSheet, useWindowDimensions } from 'react-native'
import { styles } from '@/constants/styles';

interface OnboardItemProps {
    item: {
        bg: any;
        image: any;
        title: string;
    };
}

export default function OnboardItem({ item }: OnboardItemProps) {
    const { width } = useWindowDimensions();

    return (
        <ImageBackground source={item.bg} style={[style.background, styles.container, styles.statusHeight, { width: width }]} resizeMode='cover'>
            {item.title}
            <Image source={item.image} style={style.image} resizeMode="contain" />
        </ImageBackground>
    )
}

const style = StyleSheet.create({
    background: {
        flex: 1,
    },
    image: {
        width: "100%",
        height: "80%",
        marginBottom: 20,
    },

});
