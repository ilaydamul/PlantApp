import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Pressable, Modal, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

export default function FaqItem({ item }: any) {
    const [isModalVisible, setModalVisible] = useState(false);

    const onPressHandler = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View>
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

            <Modal
                visible={isModalVisible}
                animationType="fade"
                transparent={true}
                onRequestClose={closeModal}
            >
                <View style={style.modalContainer}>
                    <View style={style.modalContent}>
                        {/* <TouchableOpacity onPress={closeModal} style={style.closeButton}>
                            <Text style={style.closeButtonText}>X</Text>
                        </TouchableOpacity> */}
                        <Pressable style={style.closeButton} onPress={closeModal}>
                            <MaterialCommunityIcons name="close" size={24} color="white" />
                        </Pressable>


                        <WebView
                            source={{ uri: item.uri }}
                            style={{ flex: 1, borderRadius: 8 }}
                        />
                    </View>
                </View>
            </Modal>
        </View>
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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '90%',
        height: '80%',
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 8,
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: "#000000",
        position: "absolute",
        right: -10,
        top: -35,
        borderRadius: 50,
        width: 35,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
    },
});
