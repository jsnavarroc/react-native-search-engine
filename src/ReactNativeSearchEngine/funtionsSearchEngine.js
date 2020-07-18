import React from 'react';
import { TouchableOpacity, Text, TextInput, View } from 'react-native';
import { filter, isEmpty, get } from 'lodash';
import Styles from './StyleSearchEngine';

const ShowInfo = ({ customizeResult, properties }) => {
  const isCustomize = typeof customizeResult === 'function';
  return isCustomize ? (
    customizeResult(properties)
  ) : (
    <View style={Styles.containerText}>
      <Text style={Styles.text}>{properties.valueResult}</Text>
    </View>
  );
};
export const ShowInput = ({ customizeInput, propertiesInput }) => {
  const { search, setSearch } = propertiesInput;
  const isCustomize = typeof customizeInput === 'function';
  return isCustomize ? (
    customizeInput(propertiesInput)
  ) : (
    <TextInput
      style={[Styles.input, Styles.containerInput]}
      onChangeText={text => setSearch(text)}
      value={search}
      placeholder="Seach"
    />
  );
};

export const filterIfObject = elements => {
  const { search, searchKey, data } = elements;
  return filter(data, (element, key) => {
    const value = get(element, searchKey).toString();
    return (
      !isEmpty(search) && value.toLowerCase().search(search.toLowerCase()) === 0
    );
  });
};
export const filterIfArray = elements => {
  const { search, data } = elements;
  return filter(data, (element, key) => {
    return (
      !isEmpty(search) &&
      element.toString().toLowerCase().search(search.toLowerCase()) === 0
    );
  });
};

export const renderElementsIfObjet = elements => {
  const {
    searchKey,
    setValue,
    setSearch,
    filterElements,
    customizeResult,
  } = elements;

  return filterElements.map((element, key) => {
    const valueResult = get(element, searchKey).toString();
    const properties = { valueResult, element };
    return (
      <TouchableOpacity
        key={key}
        onPress={() => {
          setValue(valueResult);
          setSearch(valueResult);
        }}
      >
        <ShowInfo customizeResult={customizeResult} properties={properties} />
      </TouchableOpacity>
    );
  });
};

export const renderElementsIfArray = elements => {
  const { setValue, setSearch, filterElements, customizeResult } = elements;
  return filterElements.map((element, key) => {
    const valueResult = element.toString();
    const properties = { valueResult, element };
    return (
      <TouchableOpacity
        key={key}
        onPress={() => {
          setValue(valueResult);
          setSearch(valueResult);
        }}
      >
        <ShowInfo customizeResult={customizeResult} properties={properties} />
      </TouchableOpacity>
    );
  });
};
