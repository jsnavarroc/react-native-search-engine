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
  containerInput: ({ showElement, error }) => ({
    borderLeftWidth: 0.7,
    borderTopWidth: 0.7,
    borderBottomWidth: 0.7,
    borderRightWidth: showElement ? 0 : 1,
    borderTopColor: error? 'red' : 'rgba(211, 211, 211, 1)',
    borderBottomColor:  error? 'red': 'rgba(211, 211, 211, 1)',
    borderRightColor:  error? 'red': 'rgba(211, 211, 211, 1)',
    borderLeftColor:  error? 'red': 'rgba(211, 211, 211, 1)',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: showElement ? 0 : 10,
    borderBottomRightRadius: showElement ? 0 : 10,
    padding: 12,
  }),
  containerTouch: ({ error }) =>  ({
    borderLeftWidth: 0,
    borderTopWidth: 0.7,
    borderBottomWidth: 0.7,
    borderRightWidth: 0.7,
    borderTopColor: error? 'red' : 'rgba(211, 211, 211, 1)',
    borderBottomColor: error? 'red' : 'rgba(211, 211, 211, 1)',
    borderRightColor: error? 'red' : 'rgba(211, 211, 211, 1)',
    borderLeftColor: 'rgba(255, 255, 255,0)',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 0,
    textAlign: 'center',
    alignItems: 'center',
    width: '20%',
  }),
  containerIcon: {
    color: '#afafaf',
    fontSize: 20,
    marginTop: 18,
  },
  containerTextInfo: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 10,
    height: 50,
    padding: 12,
    marginBottom: 1,
  },
  iconInput: {
    flexDirection: 'row',
    width:'100%'
  }
});

export default Styles;
