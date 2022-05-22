import { StyleSheet, Text, View, SafeAreaView, ScrollView,Image } from 'react-native';
import React from 'react';
import BackButton from '../components/Button/BackButton';
import i18n from '../locales';

function AllMedia() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <BackButton />
          <Text style={{ fontSize: 24, lineHeight: 26, fontWeight: 'bold', marginLeft: 20 }}>
            {i18n.t('components.All Media')}
          </Text>
        </View>
        <View style={styles.mediaSection}>
            <Image style={styles.mediaPhoto} source={require('../assets/recep.jpg')} />
            <Image style={styles.mediaPhoto} source={require('../assets/girl1.png')} />
            <Image style={styles.mediaPhoto} source={require('../assets/girl2.png')} />
            <Image style={styles.mediaPhoto} source={require('../assets/girl3.png')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'column',
  },
  header: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 45,
    marginBottom: 30,
  },
  mediaSection:{
      flex:1,
      display:'flex',
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent:'space-between'
      
  },
  mediaPhoto:{
      width:85,
      height:125,
      borderRadius:10,
      marginBottom:20
  },
});

export default AllMedia;
