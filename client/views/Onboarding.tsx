import { StyleSheet, Text, View, Image, SafeAreaView, FlatList, ScrollView } from 'react-native';
import PrimaryButton from '../components/Button/PrimaryButton';
import i18n from '../locales';
import BasicButton from '../components/Button/BasicButton';
import { useNavigate } from 'react-router-native';
import React from 'react';

const Data = [
  {
    id: '0',
    text: `${i18n.t('Onboarding.Users going')}`,
    title: `${i18n.t('Onboarding.Algorithm')}`,
    image: require('../assets/girl1.png'),
  },
  {
    id: '2',
    text: `${i18n.t('Onboarding.Users going')}`,
    title: `${i18n.t('Onboarding.Create an account')}`,
    image: require('../assets/girl2.png'),
  },
  {
    id: '3',
    text: `${i18n.t('Onboarding.Users going')}`,
    title: `${i18n.t('Onboarding.Sign in')}`,
    image: require('../assets/girl3.png'),
  },
];

const Item = ({ title, text, image }: any) => (
  <>
    <SafeAreaView style={{ borderWidth: 1 }}>
      <View style={styles.photos}>
        <Image source={image} />
      </View>
      <Text style={styles.title}> {title} </Text>
      <Text style={styles.text}> {text}</Text>
    </SafeAreaView>
  </>
);

const Onboarding = () => {
  const renderItem = ({ item }: any) => (
    <Item title={item.title} text={item.text} image={item.image} />
  );

  const navigate = useNavigate();
  function onPress() {
    navigate('/login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          alignItems: 'center',
        }}
        style={{ marginLeft: 'auto', marginRight: 'auto' }}></FlatList>
    </SafeAreaView>

    /* <View style={styles.circles}>
            <View style={styles.circleActive}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
          </View>
        <View style={styles.login}>
          <PrimaryButton
            customCss={styles.buttonSign}
            type={'Primary'}
            title={i18n.t('Onboarding.Create an account')}
          />
          <BasicButton
            clicked={onPress}
            customCss={styles.signText}
            title={i18n.t('Onboarding.Already have an account?')}
            coloredText={i18n.t('Onboarding.Sign in')}
          />
        </View> */
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'column',
    borderWidth: 1,
  },
  photos: {
    marginRight: 24,
  },
  photo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#EF0A6A',
    display: 'flex',
    textAlign: 'center',
    lineHeight: 36,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 44,
  },
  text: {
    color: '#323755',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 30,
  },
  circles: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  circleActive: {
    width: 8,
    height: 8,
    backgroundColor: '#EF0A6A',
    borderRadius: 8,
    alignItems: 'center',
  },
  circle: {
    width: 8,
    height: 8,
    backgroundColor: '#E6E6E6',
    borderRadius: 8,
    alignItems: 'center',
  },
  login: {
    flex: 1,
  },
  buttonSign: {
    marginBottom: 20,
  },
  signText: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
    color: '#4D4D4D',
    fontWeight: 'bold',
  },
});

export default Onboarding;
