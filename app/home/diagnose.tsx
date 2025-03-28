import { View, Text, StyleSheet } from 'react-native';

export default function Diagnose() {
  return (
    <View style={styles.container}>
      <Text>Diagnose</Text>
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
