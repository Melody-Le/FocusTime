import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import { colors } from '../utils/colors';
function Focus() {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label='What would you like to focus on?'
        />
        <View style={styles.button}> 
          <RoundedButton title='+' size={50} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    // flex: 0.5,
    padding: 25,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  text: {
    color: colors.white,
  },
  textInput: {
    flex: 1,
    marginRight: 10,
  },
  button: {
    // justifyContent: 'center',
  },
});

export default Focus;
