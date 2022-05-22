import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import i18n from '../../locales';
import React from 'react';

function LifestyleButton() {
  return (
    <TouchableHighlight style={styles.lifestyleButton}>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '50%' }}>
          <Text style={{ fontSize: 14, lineHeight: 21, fontWeight: '600' }}>
            {i18n.t('Lifestyle.Zodiac Sign')}
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '50%',
            justifyContent: 'flex-end',
          }}>
          <Text>{i18n.t('components.Empty')}</Text>
          <MaterialIcons name="keyboard-arrow-right" size={30} color="black" style={styles.icon} />
        </View>
      </View>
    </TouchableHighlight>
  );
}
export default LifestyleButton;
const styles = StyleSheet.create({
  lifestyleButton: {
    display: 'flex',
    justifyContent: 'center',
    borderWidth: 1,
    height: 45,
    paddingLeft: 20,
    backgroundColor:'#FDE7F0',
    borderColor:'#E8E6EA',
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
  },
  icon: {},
});
