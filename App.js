import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [age, setAge] = useState('')
  const [result, setResult] = useState('')
 //
  const calculate = () => {
    const lowerLimit = (220 - age) * 0.65
    const upperLimit = (220 - age) * 0.85

    let result1 = `${lowerLimit} - ${upperLimit}`

    setResult(result1)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heart rate calculator</Text>
      <Text>Age</Text>
      <TextInput
        style={styles.field}
        value={age}
        onChangeText = {(text) => setAge(text)}
      />
      <Text style={styles.text1}>{age}</Text>
      <Text>Limits</Text>
      <Text>{result}</Text>
      <Button title="Calculate" onPress={() => calculate()}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  field: {
    marginBottom: 10,
    borderColor: '#20232a',
    borderWidth: 1,
    backgroundColor: '#61dafb'
  },
  title: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 30,
  }
});