import React from 'react';
import { TouchableOpacity, Text, TextInput, View } from 'react-native';
import { filter, isEmpty, get } from 'lodash';
import Styles from './StyleSearchEngine';

const ShowInfo = elements => {
  const {
    customizComponenteResult,
    properties,
    textInfoStyle,
    containerTextInfoStyle,
  } = elements;
  const isCustomize = typeof customizComponenteResult === 'function';
  return isCustomize ? (
    customizComponenteResult(properties)
  ) : (
    <View style={containerTextInfoStyle || Styles.containerTextInfo}>
      <Text style={textInfoStyle || Styles.textInfo}>
        {properties.valueResult}
      </Text>
    </View>
  );
};
export const ShowInput = elements => {
  const {
    customizeComponentInput,
    propertiesInput,
    textInputStyle,
    containerInputStyle,
  } = elements;
  const { search, setSearch } = propertiesInput;
  const isCustomize = typeof customizeComponentInput === 'function';
  return isCustomize ? (
    customizeComponentInput(propertiesInput)
  ) : (
    <View>
      <TextInput
        style={[
          textInputStyle || Styles.textInput,
          containerInputStyle || Styles.containerInput,
        ]}
        onChangeText={text => setSearch(text)}
        value={search}
        placeholder="Seach"
      />
    </View>
  );
};

export const filterIfObject = elements => {
  const { search, searchKey, data } = elements;
  try {
    return filter(data, (element, key) => {
      const value = get(element, searchKey).toString();
      const doesntFindSymbol = search.toString().search(/[.|^:]/g) === -1;
      return (
        !isEmpty(search) &&
        doesntFindSymbol &&
        value.toLowerCase().search(search.toLowerCase()) === 0
      );
    });
  } catch (error) {
    // Doesn't support this symbols "+,(,),*,?,\,["
    return [];
  }
};
export const filterIfArray = elements => {
  const { search, data } = elements;
  try {
    return filter(data, (element, key) => {
      const doesntFindSymbol = search.toString().search(/[.|^:]/g) === -1;
      return (
        !isEmpty(search) &&
        doesntFindSymbol &&
        element.toString().toLowerCase().search(search.toLowerCase()) === 0
      );
    });
  } catch (error) {
    // Doesn't support this symbols "+,(,),*,?,\,["
    return [];
  }
};

// .,|,^,:
export const renderElementsIfObjet = elements => {
  const {
    searchKey,
    setValue,
    setSearch,
    filterElements,
    customizComponenteResult,
    textInfoStyle,
    containerTextInfoStyle,
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
        <ShowInfo
          customizComponenteResult={customizComponenteResult}
          properties={properties}
          textInfoStyle={textInfoStyle}
          containerTextInfoStyle={containerTextInfoStyle}
        />
      </TouchableOpacity>
    );
  });
};

export const renderElementsIfArray = elements => {
  const {
    setValue,
    setSearch,
    filterElements,
    customizComponenteResult,
    textInfoStyle,
    containerTextInfoStyle,
  } = elements;

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
        <ShowInfo
          customizComponenteResult={customizComponenteResult}
          properties={properties}
          textInfoStyle={textInfoStyle}
          containerTextInfoStyle={containerTextInfoStyle}
        />
      </TouchableOpacity>
    );
  });
};
