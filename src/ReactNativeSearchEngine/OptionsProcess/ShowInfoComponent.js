import React from 'react';
import { View, Text } from 'react-native';
import Styles from '../StyleSearchEngine';
import { get, isEmpty } from 'lodash';

const ShowInfoComponent = props => {
  const {
    customizComponenteResult,
    properties,
    textInfoStyle,
    containerTextInfoStyle,
    textEmpty,
  } = props;
  const isCustomize = typeof customizComponenteResult === 'function';
  const textInfo = get(properties, 'valueResult');
  const isEmpetyText = isEmpty(textInfo);
  let styleShowText = {
    ...Styles.containerTextInfo,
    ...containerTextInfoStyle,
  };
  styleShowText = isEmpetyText? {...styleShowText, backgroundColor:  'red'}: styleShowText;
  return isCustomize ? (
    customizComponenteResult(properties)
  ) : (
    <View style={styleShowText} >
      <Text style={textInfoStyle || Styles.textInfo}>
          {textInfo || textEmpty}
      </Text>
    </View>
  );
};

export default ShowInfoComponent;
