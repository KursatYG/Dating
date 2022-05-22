import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

const BackButton = () => {
  return (
    <TouchableHighlight style={styles.backButton}>
      <View>
        <MaterialIcons name="keyboard-arrow-left" size={30} color="black" style={styles.icon} />
      </View>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  backButton: {
    display: 'flex',
    width: 52,
    height: 52,
    borderWidth: 1,
    borderColor: '#E8E6EA',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#EF0A6A',
  },
});
export default BackButton;
