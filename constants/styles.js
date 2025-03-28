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
    }
})