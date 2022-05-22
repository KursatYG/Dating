import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import PrimaryButton from '../components/Button/PrimaryButton';
import IconButton from '../components/Button/IconButton';
import BackButton from '../components/Button/BackButton';
import i18n from '../locales';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Settings({}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profile}>
        <BackButton />
        <View style={styles.profileSection}>
          <View>
            <Image style={styles.profilePhoto} source={require('../assets/recep.jpg')} />
            <View style={styles.cameraIconBack}>
              <Ionicons name="camera" size={24} color="white" style={styles.cameraIcon} />
            </View>
          </View>
        </View>
        <View style={styles.profileText}>
          <Text style={styles.profileName}>Recep, 25</Text>
          <Text style={styles.profileLocation}>Istanbul, Turkey</Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <IconButton
          type={'Secondary'}
          title={i18n.t('Settings.Edit Profile')}
          icon={<MaterialCommunityIcons name="pencil" size={26} color="black" />}
        />
        <IconButton
          type={'Secondary'}
          title={i18n.t('Settings.Settings')}
          icon={<Ionicons name="settings-sharp" size={26} color="black" />}
        />
        <IconButton
          type={'Primary'}
          title={i18n.t('Settings.Security')}
          icon={<MaterialIcons name="shield" size={26} color="white" />}
        />
      </View>
      <View style={styles.exitButton}>
        <PrimaryButton type={'Primary'} title={i18n.t('Settings.Exit')} />
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
  profile: {
    flex: 1,
    marginTop: 40,
  },
  icon: {
    position: 'absolute',
  },
  profileSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  cameraIconBack: {
    width: 34,
    height: 34,
    borderRadius: 34,
    backgroundColor: '#EF0A6A',
    position: 'absolute',
    borderWidth: 2,
    borderColor: '#fff',
    right: 0,
    bottom: 0,
  },
  cameraIcon: {
    display: 'flex',
    position: 'absolute',
    left: 3,
    top: 1,
  },
  profileText: {
    alignItems: 'center',
  },
  profileName: {
    fontSize: 24,
    lineHeight: 36,
    fontWeight: 'bold',
  },
  profileLocation: {
    fontSize: 14,
    lineHeight: 21,
  },
  buttons: {
    flex: 1,
  },
  exitButton: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});

export default Settings;
