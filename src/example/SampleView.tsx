import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const SampleView = () => {
  return(
    <View style={styles.container}>

      <Text style={styles.text}>This is a rad modal... ( ˘ ³˘)ノ</Text>

    </View>
  )
}
export default SampleView;


const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    width: '70%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
    padding: 20,
  },
  text: {
    color: '#fff',
    marginVertical: 10,
    fontSize: 19,
  },
});

