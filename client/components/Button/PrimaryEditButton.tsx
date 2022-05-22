import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';
import { Link } from 'react-router-native';

interface PropsI {
  title?: string;
  clicked?: any;
  validation?: any;
  type?: any;
  customCss?: any;
}

const PrimaryEditButton: React.FC<PropsI> = ({ title,validation, type, customCss }) => {
  function typeButton() {
    if (type === 'Primary') {
      return (
        <>
          <TouchableHighlight
            style={[styles.primaryButton, customCss && customCss]}
            disabled={validation}>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  color: '#ffffff',
                  fontWeight: 'bold',
                }}>
                {title}
              </Text>
            </View>
          </TouchableHighlight>
        </>
      );
    } else if (type === 'Secondary') {
      return (
        <View style={[styles.secondaryButton, customCss && customCss]}>
          <TouchableHighlight>
            <Text
              style={{
                fontSize: 14,
                color:'#8E8E8E'
              }}>
              {title}
            </Text>
          </TouchableHighlight>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <TouchableHighlight underlayColor={'red'}>
            <View style={styles.button}>
              <Text>{title}</Text>
            </View>
          </TouchableHighlight>
        </View>
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
  secondaryButton: {
    backgroundColor: '#FDE7F0',
    height: 45,
    width: '100%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E8E6EA',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft:10
  },
});

export default PrimaryEditButton;
