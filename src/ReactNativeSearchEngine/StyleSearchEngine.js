import { StyleSheet, Dimensions } from 'react-native';
export const height = Dimensions.get('window').height;

const Styles = StyleSheet.create({
  containerScroll: {
    maxHeight: height / 2,
    backgroundColor: '#fff',
  },
  textInput: {
    fontSize: 17,
    textAlign: 'left',
  },
  textInfo: {
    fontSize: 17,
    textAlign: 'left',
  },
  containerInput: {
    borderWidth: 2,
    backgroundColor: '#fff',
    borderColor: '#d3d3d3',
    borderRadius: 10,
    padding: 12,
  },
  containerTextInfo: {
    borderWidth: 2,
    borderColor: '#d3d3d3',
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 50,
    padding: 12,
    marginBottom: 1,
  },
});

export default Styles;
