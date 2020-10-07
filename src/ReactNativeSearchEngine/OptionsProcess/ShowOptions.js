import React from 'react';
import { get } from 'lodash';
import { TouchableOpacity } from 'react-native';
import ShowInfoComponent from './ShowInfoComponent';
const Options = props => {
  const {
    setValueData,
    setSearch,
    setShowAllButton,
    customizComponenteResult,
    textInfoStyle,
    containerTextInfoStyle,
    onChangeSearch,
    element,
    isArrayObject,
    searchKey,
    containerTextError
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
        setShowAllButton(false);
        isOnChangeElement &&
        onChangeSearch({ data: [element], value: valueResult });
      }}
    >
      <ShowInfoComponent
        customizComponenteResult={customizComponenteResult}
        properties={properties}
        textInfoStyle={textInfoStyle}
        containerTextInfoStyle={containerTextInfoStyle}
        containerTextError={containerTextError} 
      />
    </TouchableOpacity>
  );
};

export default Options;
