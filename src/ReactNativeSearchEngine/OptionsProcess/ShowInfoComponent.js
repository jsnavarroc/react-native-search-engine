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
  } = props;
  const isCustomize = typeof customizComponenteResult === 'function';
  const textInfo = get(properties, 'valueResult');
  const isEmpetyText = isEmpty(textInfo);
  return isCustomize ? (
    customizComponenteResult(properties)
  ) : (
    <View
      style={
        containerTextInfoStyle || Styles.containerTextInfo({ isEmpetyText })
      }
    >
      <Text style={textInfoStyle || Styles.textInfo}>
        {textInfo || "can't find the search key"}
      </Text>
    </View>
  );
};

export default ShowInfoComponent;
