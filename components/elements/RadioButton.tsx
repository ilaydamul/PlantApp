import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

interface RadioButtonProps {
    options: { title: string; desc: string; save?: string }[];
    selected: string;
    onSelect: (option: string) => void;
}

export default function RadioButton({ options, selected, onSelect }: RadioButtonProps) {
    return (
        <View style={style.radioContainer}>
            {options.map((option) => (
                <TouchableOpacity
                    key={option.title}
                    onPress={() => onSelect(option.title)}
                    style={[style.radioItem, { backgroundColor: selected === option.title ? "#00000033" : "#FFFFFF12", borderColor: selected === option.title ? "#28AF6E" : "#FFFFFF12" }]}>
                    <View style={[style.innerCircle, { backgroundColor: selected === option.title ? "#28AF6E" : "#FFFFFF12" }]} >
                        {selected === option.title && (
                            <View style={style.innerMinCircle} />
                        )}
                    </View>
                    <View style={{ marginLeft: 12 }}>
                        <Text style={[style.optionTitle]}>{option.title}</Text>
                        <Text style={[style.optionDesc]}>{option.desc}</Text>
                    </View>
                    {option.save && (
                        <View style={[style.save, { backgroundColor: selected === option.title ? "#28AF6E" : "#FFFFFF12" }]}>
                            <Text style={{ color: "#fff", fontSize: 13 }}>{option.save}</Text>
                        </View>
                    )}
                </TouchableOpacity>
            ))}
        </View>
    )
}

const style = StyleSheet.create({
    radioContainer: {
        // flexDirection: "row", 
        gap: 15,

    },
    radioItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: "#FFFFFF12"
    },
    innerCircle: {
        width: 24,
        height: 24,
        borderRadius: 24,
        backgroundColor: "#FFFFFF12",
        alignItems: "center",
        justifyContent: "center",
    },
    innerMinCircle: {
        width: 8,
        height: 8,
        borderRadius: 6,
        backgroundColor: "#FFF",
    },
    optionTitle: {
        fontSize: 16,
        color: "#fff",
    },
    optionDesc: {
        color: "#fff",
        opacity: 0.5,
        marginTop: 2
    },
    save: {
        position: "absolute",
        right: 0,
        top: -1,
        backgroundColor: "#28AF6E",
        paddingVertical: 6,
        paddingHorizontal: 10,
        // borderRadius: 8
        borderBottomLeftRadius: 12,
        borderTopRightRadius: 10,
    }
})