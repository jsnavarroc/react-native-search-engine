import { StyleSheet, Dimensions } from 'react-native';
export const height = Dimensions.get('window').height;

const Styles = StyleSheet.create({
  containerScroll: {
    maxHeight: height / 2,
    position: 'absolute',
    left: 0,
    top: 54,
    width: '100%',
    zIndex: 5,
  },
  textInput: {
    fontSize: 17,
    textAlign: 'left',
  },
  textInfo: {
    fontSize: 17,
    textAlign: 'left',
  },
  containerInput: ({ buttonEnabled }) => ({
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: buttonEnabled ? 0 : 1,
    borderTopColor: 'rgba(211, 211, 211, 1)',
    borderBottomColor: 'rgba(211, 211, 211, 1)',
    borderRightColor: 'rgba(211, 211, 211, 1)',
    borderLeftColor: 'rgba(211, 211, 211,1)',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: buttonEnabled ? 0 : 10,
    borderBottomRightRadius: buttonEnabled ? 0 : 10,
    padding: 12,
  }),
  containerTouch: {
    borderLeftWidth: 0,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderTopColor: 'rgba(211, 211, 211, 1)',
    borderBottomColor: 'rgba(211, 211, 211, 1)',
    borderRightColor: 'rgba(211, 211, 211, 1)',
    borderLeftColor: 'rgba(255, 255, 255,0)',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 0,
    textAlign: 'center',
    alignItems: 'center',
    width: '20%',
  },
  containerIcon: {
    color: '#afafaf',
    fontSize: 20,
    marginTop: 18,
  },
  containerTextInfo: ({ isEmpetyText }) => ({
    borderWidth: 1,
    borderColor: '#d3d3d3',
    backgroundColor: isEmpetyText ? 'red' : '#fff',
    borderRadius: 10,
    height: 50,
    padding: 12,
    marginBottom: 1,
  }),
});

export default Styles;
