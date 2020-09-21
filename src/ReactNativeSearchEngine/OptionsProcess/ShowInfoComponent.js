import React from 'react';
import { View, Text } from 'react-native';
import Styles from '../StyleSearchEngine';
import { get, isEmpty } from 'lodash';

const ShowInfoComponent = props => {
  const {
    customizComponenteResult,
    properties,
    textInfoStyle,
    textInfoStyleError,
    containerTextInfoStyle,
    containerTextError,
    textEmpty,
  } = props;
  const isCustomize = typeof customizComponenteResult === 'function';
  const textInfo = get(properties, 'valueResult');
  const isEmptyText = isEmpty(textInfo);
  let styleShowTextOk = {
    ...Styles.containerTextInfo,
    ...containerTextInfoStyle,
  };
  let styleTextInfoOk = {
    ...Styles.textInfo,
    ...textInfoStyle,
  };
  let styleTextInfoError = {
    ...Styles.textInfo,
    ...textInfoStyleError,
  };
  let styleShowError = {
    ...Styles.containerTextInfo,
    ...containerTextError,
  };

  const styleShowText = isEmptyText? styleShowError: styleShowTextOk;
  return isCustomize ? (
    customizComponenteResult(properties)
  ) : (
    <View style={styleShowText} >
        <Text style={isEmptyText ? styleTextInfoError  : styleTextInfoOk }>
          {textInfo || textEmpty}
      </Text>
    </View>
  );
};


ShowInfoComponent.defaultProps = {
  containerTextError: {
    backgroundColor: 'red',
  },
};
export default ShowInfoComponent;

