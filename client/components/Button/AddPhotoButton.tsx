import { View,TouchableHighlight,StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

function AddPhotoButton() {
  return (
    <TouchableHighlight style={styles.addPhotoButton}>
      <View>
      <FontAwesome name="plus-circle" size={56} color="#EF0A6A" />
      </View>
    </TouchableHighlight>
  )
}
const styles = StyleSheet.create({
    addPhotoButton: {
      display: 'flex',
      width: 110,
      height: 160,
      borderWidth: 2,
      borderColor: '#EF0A6A',
      borderStyle:'dashed',
      backgroundColor:'#FDE7F0',
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      color: '#EF0A6A',
    },
  });
export default AddPhotoButton;