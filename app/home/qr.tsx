import { View, Text, StyleSheet } from 'react-native';

export default function Qr() {
  return (
    <View style={styles.container}>
      <Text>QR</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
