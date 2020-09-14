import React from 'react';
import { get } from 'lodash';
import { TouchableOpacity } from 'react-native';
import ShowInfoComponent from './ShowInfoComponent';
const Options = props => {
  const {
    setValueData,
    setSearch,
    setShowAll,
    customizComponenteResult,
    textInfoStyle,
    containerTextInfoStyle,
    onChangeSearch,
    element,
    isArrayObject,
    searchKey,
  } = props;
  const isOnChangeElement = typeof onChangeSearch === 'function';
  const valueResult = isArrayObject
    ? get(element, searchKey).toString()
    : element.toString();
  const properties = { valueResult, element };
  return (
    <TouchableOpacity
      onPress={() => {
        setValueData(valueResult);
        setSearch(valueResult);
        setShowAll(false);
        isOnChangeElement &&
        onChangeSearch({ data: [element], value: valueResult });
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
