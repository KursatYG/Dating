import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import i18n from '../../locales';


interface PropsI {
  placeholder?: string;
  validation?: any;
  title?: string;
}
const AboutInput: React.FC<PropsI> = ({ title,placeholder, validation,}) =>{

  return (
    <View style={styles.input}>
      <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      maxLength={500}
      selectionColor={'#EF0A6A'}
      />
    </View>
  )
}
export default AboutInput;

const styles = StyleSheet.create({
    input:{},
    textInput:{
        borderWidth:1,
        borderColor:'#E8E6EA',
        borderRadius:15,
        height:45,
        backgroundColor:'#FDE7F0',
        paddingLeft:10,
        color:'#8E8E8E'
    },
})