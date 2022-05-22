import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import BackButton from '../components/Button/BackButton';
import SelectionButton from '../components/Button/SelectionButton';
import React from 'react';
import i18n from '../locales';

function AppSettings() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <BackButton />
          <Text style={styles.title}>{i18n.t('Settings.Settings')}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <View>
            <Text style={{ fontSize: 14, lineHeight: 21, fontWeight: 'bold', marginBottom: 8 }}>
              {i18n.t('Settings.Language')}
            </Text>
            <SelectionButton
            title={i18n.t("Language.Turkish")}
            />
          </View>
          <View>
            <Text style={{ fontSize: 14, lineHeight: 21, fontWeight: 'bold', marginBottom: 8, marginTop:15 }}>
              {i18n.t('components.Show Me')}
            </Text>
            <SelectionButton
            title={i18n.t("components.Women")}
            />
          </View>
          <View>
            <Text style={{ fontSize: 14, lineHeight: 21, fontWeight: 'bold', marginBottom: 8, marginTop:15 }}>
              {i18n.t('components.Age Range')}
            </Text>
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
    marginTop: 45,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    lineHeight: 36,
    fontWeight: 'bold',
    marginLeft: 20,
  },
});

export default AppSettings;
