import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

interface PropsI {
  title?: string;
  clicked?: any;
  validation?: any;
  type?: any;
  customCss?: any;
  icon?: any;
}

const IconButton: React.FC<PropsI> = ({ title, clicked, validation, type, customCss, icon }) => {
  let [fontsLoaded] = useFonts({
    'Modernist-Bold': require('../../assets/fonts/Sk-Modernist-Bold.otf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  function typeButton() {
    if (type === 'Primary') {
      return (
        <>
          <TouchableHighlight
            style={[styles.iconButton, customCss && customCss]}
            disabled={validation}
            onPress={() => clicked()}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
              }}>
              <View
                style={{
                  width: '35%',
                }}>
                <Text
                  style={{
                    marginLeft: 'auto',
                  }}>
                  {icon}
                </Text>
              </View>
              <View
                style={{
                  width: '65%',
                }}>
                <Text
                  style={{
                    fontFamily: 'Modernist-Bold',
                    fontSize: 16,
                    lineHeight: 21,
                    color: '#ffffff',
                    fontWeight: 'bold',
                    marginLeft: 20,
                  }}>
                  {title}
                </Text>
              </View>
            </View>
          </TouchableHighlight>
        </>
      );
    } else if (type === 'Secondary') {
      return (
        <TouchableHighlight style={styles.whiteButton} onPress={() => clicked()}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '35%',
              }}>
              <Text
                style={{
                  marginLeft: 'auto',
                }}>
                {icon}
              </Text>
            </View>
            <View
              style={{
                width: '65%',
              }}>
              <Text
                style={{
                  fontFamily: 'Modernist-Bold',
                    fontSize: 16,
                    lineHeight: 21,
                    color: 'black',
                    fontWeight: 'bold',
                    marginLeft: 20,
                }}>
                {title}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      );
    }
  }
  return <>{type && typeButton()}</>;
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
  iconButton: {
    height: 58,
    width: '100%',
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: '#EF0A6A',
    borderColor: '#EF0A6A',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  whiteButton: {
    height: 58,
    width: '100%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E8E6EA',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default IconButton;
