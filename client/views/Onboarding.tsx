import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import PrimaryButton from '../components/Button/PrimaryButton';
import i18n from '../locales';
import BasicButton from '../components/Button/BasicButton';
import { useNavigate } from 'react-router-native';

function Onboarding({}) {

  const navigate = useNavigate();
  function onPress() {
    navigate('/login');
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.photo}>
        <View style={styles.photos}>
          <Image style={styles.leftImage} source={require('../assets/girl1.png')} />
          <Image style={styles.centerImage} source={require('../assets/girl2.png')} />
          <Image style={styles.rightImage} source={require('../assets/girl3.png')} />
        </View>
      </View>
      <View style={styles.texting}>
        <Text style={styles.title}>{i18n.t('Onboarding.Algorithm')}</Text>
        <Text style={styles.text}>
          {i18n.t('Onboarding.Users going')}
        </Text>
        <View style={styles.circles}>
          <View style={styles.circleActive}></View>
          <View style={styles.circle}></View>
          <View style={styles.circle}></View>
        </View>
      </View>
      <View style={styles.login}>
        <PrimaryButton customCss={styles.buttonSign} type={'Primary'} title={i18n.t('Onboarding.Create an account')} />
        <BasicButton
          clicked={onPress}
          customCss={styles.signText}
          title={i18n.t('Onboarding.Already have an account?')}
          coloredText={i18n.t('Onboarding.Sign in')}
        />
      </View>
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
  photo: {
    flex: 2.5,
    display: 'flex',
    alignItems: 'center',
    marginTop:70,
    marginBottom:44
  },
  photos: {
    alignItems:'center',
    display: 'flex',
    flexDirection: 'row',
  },
  centerImage: {
    width: 235,
    height: 360,
    marginRight: 24,
    marginLeft: 24,
  },
  leftImage: {
    width: 200,
    height: 300,
  },
  rightImage: {
    width: 200,
    height: 300,
  },
  texting: {
    flex: 1.2,
  },
  title: {
    fontSize: 24,
    color: '#EF0A6A',
    display: 'flex',
    textAlign: 'center',
    lineHeight: 36,
    fontWeight: 'bold',
    marginBottom: 10,
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
  buttonSign:{
      marginBottom:20
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
