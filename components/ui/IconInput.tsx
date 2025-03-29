import { View, TextInput, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

interface IconInputProps {
    placeholderText: string;
    onChangeValue: (text: string) => void;
    value: string;
    icon: keyof typeof Feather.glyphMap;
}

export default function IconInput({ placeholderText, onChangeValue, value, icon }: IconInputProps) {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    const borderColor = isFocused ? Colors.grayLight : Colors.gray;
    const iconColor = isFocused ? Colors.black : Colors.gray;

    return (
        <View style={[{ position: "relative", width: "100%", margin: "auto" }]}>
            <Feather name={icon} size={20} color={iconColor} style={style.icon} />
            <TextInput
                placeholder={placeholderText}
                style={[style.searchInput, { borderColor }]}
                placeholderTextColor={Colors.gray}
                value={value}
                onChangeText={onChangeValue}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </View>
    );
}

const style = StyleSheet.create({
    searchInput: {
        paddingHorizontal: 16,
        paddingVertical: 15,
        backgroundColor: Colors.white,
        borderRadius: 14,
        color: Colors.black,
        paddingLeft: 46,
        borderWidth: 0.2,
        fontSize: 16
    },
    icon: {
        position: "absolute",
        zIndex: 2,
        left: 14,
        top: 13,
    },
});
