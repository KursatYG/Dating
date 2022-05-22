import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../components/Button/BackButton';
import i18n from '../locales';
import AddPhotoButton from '../components/Button/AddPhotoButton';
import PrimaryEditButton from '../components/Button/PrimaryEditButton';
import AboutInput from '../components/Input/AboutInput';
import LifestyleButton from '../components/Button/LifestyleButton';

function EditProfile({}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <BackButton />
          <Text style={styles.title}>{i18n.t('EditProfile.Edit Profile')}</Text>
        </View>
        <View style={styles.mediaSection}>
          <View style={styles.mediaPhotos}>
            <Image style={styles.mediaPhoto} source={require('../assets/recep.jpg')} />
            <AddPhotoButton />
          </View>
          <PrimaryEditButton type={'Primary'} title={i18n.t('EditProfile.All Media')} />
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.aboutMe}>
            <Text style={{ fontSize: 14, lineHeight: 21, fontWeight: 'bold', marginBottom: 8 }}>
              {i18n.t('EditProfile.About Me')}
            </Text>
            <AboutInput placeholder={i18n.t('EditProfile.About Me')} />
          </View>
          <View style={styles.interests}>
            <Text style={{ fontSize: 14, lineHeight: 21, fontWeight: 'bold', marginBottom: 8 }}>
              {i18n.t('EditProfile.Your Interests')}
            </Text>
            <PrimaryEditButton type={'Primary'} title={i18n.t('Interests.Shopping')} />
          </View>
          {/* <View style={styles.lifestyle}>
          <Text style={{ fontSize: 14, lineHeight: 21, fontWeight: 'bold', marginBottom: 8 }}>
            {i18n.t('EditProfile.Lifestyle')}
          </Text>
        </View> */}
          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 14, lineHeight: 21, fontWeight: 'bold', marginBottom: 8 }}>
              {i18n.t('EditProfile.Sexual Orientation')}
            </Text>
            <PrimaryEditButton
              type={'Secondary'}
              title={i18n.t('EditProfile.Add Sexual Orientation')}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 14, lineHeight: 21, fontWeight: 'bold', marginBottom: 8 }}>
              {i18n.t('EditProfile.Company')}
            </Text>
            <AboutInput placeholder={i18n.t('EditProfile.Add Company')} />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 14, lineHeight: 21, fontWeight: 'bold', marginBottom: 8 }}>
              {i18n.t('EditProfile.Company Appellation')}
            </Text>
            <AboutInput placeholder={i18n.t('EditProfile.Add Company Appellation')} />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 14, lineHeight: 21, fontWeight: 'bold', marginBottom: 8 }}>
              {i18n.t('EditProfile.School')}
            </Text>
            <AboutInput placeholder={i18n.t('EditProfile.Add School')} />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 14, lineHeight: 21, fontWeight: 'bold', marginBottom: 8 }}>
              {i18n.t('EditProfile.City')}
            </Text>
            <PrimaryEditButton type={'Secondary'} title={i18n.t('EditProfile.Add City')} />
          </View>
          <View style={{ marginTop: 15, marginBottom: 15 }}>
            <Text style={{ fontSize: 14, lineHeight: 21, fontWeight: 'bold', marginBottom: 8 }}>
              {i18n.t('EditProfile.Instagram')}
            </Text>
            <PrimaryEditButton type={'Primary'} title={i18n.t('EditProfile.Add Instagram')} />
          </View>
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
    marginTop: 15,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    lineHeight: 36,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  mediaSection: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  mediaPhotos: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 30,
  },
  mediaPhoto: {
    width: 110,
    height: 160,
    borderRadius: 10,
    marginRight: 12,
  },
  aboutMe: {
    marginTop: 30,
  },
  interests: {
    marginTop: 15,
  },
  instagram: {},
});
export default EditProfile;
