import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Modal from '../Modal';
import SampleView from './SampleView';


export default function App() {

  const onModalPress = () => {
    Modal.instance.registerChild(<SampleView/>, onCloseModal);
    Modal.instance.show();
  }

  const onCloseModal = () => {
    console.log("YOU CLOSED ME - HOW COULD YOU (╥﹏╥)");
  }

  return (
    <View style={styles.container}>

      {/* BUTTON */}
      <View 
        style={styles.button}
        onTouchEnd={() => onModalPress()}
      >
        <Text>Show Modal</Text>
      </View>

      {/* RENDER MODAL IN ONE PLACE ONLY */}
      <Modal/>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  button: {
    width: 100,
    height: 40,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#0007',
    backgroundColor: '#0005',
    justifyContent: 'center',
    alignItems: 'center',
  }
});