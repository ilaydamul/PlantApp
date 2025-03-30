import { Dimensions, Platform, StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainTitle: {
        fontSize: 32,
    },
    titleDesc: {
        color: "#57635f",
        fontSize: 16,
        marginTop: 4
    },
    colorWhite: {
        color: "#FFF",
    },
    bold: {
        fontWeight: "bold"
    },
    container: {
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    layout: {
        flex: 1
    },
    statusHeight: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 50,
    },
    footerText: {
        textAlign: "center",
        color: "#597165"
    },
    underline: {
        textDecorationLine: "underline"
    },
    fsSm: {
        fontSize: 16
    },
    fsLg: {
        fontSize: 32
    },
    brush: {
        position: "absolute",
        right: 15,
        top: Platform.OS === 'android' ? StatusBar.currentHeight + 60 : 105,

    },
    brushTitle: {
        fontSize: 32,
        color: '#13231B',
        marginBottom: 20,
        fontWeight: "500",
        marginTop: 24
    },
    footer: {
        position: "absolute",
        bottom: 25,
        left: 16,
        right: 16
    }
})