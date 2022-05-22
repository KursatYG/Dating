import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'react-router-native';

interface PropsI {
  title?: any;
}

const SelectionButton: React.FC<PropsI> = ({ title }) => {
  return (
      <TouchableHighlight
      style={styles.primaryButton}>
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',width:'80%'}}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#ffffff',
                  fontWeight: 'bold',
                  width:'90%',
                  textAlign:'center',

                }}>
                {title}
              </Text>
              <MaterialIcons name="keyboard-arrow-right" size={30} color="white"  />
            </View>
      </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  primaryButton: {
    backgroundColor: '#EF0A6A',
    height: 45,
    width: '100%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#EF0A6A',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SelectionButton;
