import React from 'react';
import { get } from 'lodash';
import { TouchableOpacity } from 'react-native';
import ShowInfoComponent from './ShowInfoComponent';
const Options = props => {
  const {
    setValue,
    setSearch,
    setShowAll,
    customizComponenteResult,
    textInfoStyle,
    containerTextInfoStyle,
    onChangeElement,
    element,
    isArrayObject,
    searchKey,
  } = props;
  const isOnChangeElement = typeof onChangeElement === 'function';
  const valueResult = isArrayObject
    ? get(element, searchKey).toString()
    : element.toString();
  const properties = { valueResult, element };
  return (
    <TouchableOpacity
      onPress={() => {
        setValue(valueResult);
        setSearch(valueResult);
        setShowAll(false);
        isOnChangeElement &&
          onChangeElement({ data: [element], value: valueResult });
      }}
    >
      <ShowInfoComponent
        customizComponenteResult={customizComponenteResult}
        properties={properties}
        textInfoStyle={textInfoStyle}
        containerTextInfoStyle={containerTextInfoStyle}
      />
    </TouchableOpacity>
  );
};

export default Options;
