import React from 'react';
import { TouchableOpacity, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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

const onChangeExecute = elements => {
  const { isArrayObject, text, searchKey, data, onChangeElement } = elements;
  const elementObject = isArrayObject
    ? filterIfObject({ search: text, searchKey, data })
    : filterIfArray({ search: text, data });
  if (elementObject.length === 1 && text.length > 0) {
    onChangeElement(elementObject[0]);
  }
  if (text.length === 0 || elementObject.length > 1) {
    if (isArrayObject) {
      onChangeElement({ value: '' });
    } else {
      onChangeElement('');
    }
  }
};

export const ShowInput = elements => {
  const {
    containerButtonStyle,
    propertiesInput,
    textInputStyle,
    containerInputStyle,
    containerIconStyle,
    placeholder,
    propertiesButton,
    customizeComponentInput,
    customIcon,
    onChangeElement,
    buttonEnabled,
  } = elements;
  const { search, setSearch, searchKey, data, isArrayObject } = propertiesInput;
  const { showAll, setShowAll } = propertiesButton;
  const isCustomize = typeof customizeComponentInput === 'function';
  const isCustomizeIcon = typeof customIcon === 'function';
  const isOnChangeElement = typeof onChangeElement === 'function';

  const Input = isCustomize ? (
    customizeComponentInput(propertiesInput)
  ) : (
    <TextInput
      style={[
        textInputStyle || Styles.textInput,
        containerInputStyle || Styles.containerInput({ buttonEnabled }),
      ]}
      autoCompleteType={'off'}
      onChangeText={text => {
        setSearch(text);
        setShowAll(false);
        isOnChangeElement &&
          onChangeExecute({
            isArrayObject,
            text,
            searchKey,
            data,
            onChangeElement,
          });
      }}
      value={search}
      placeholder={placeholder || 'Search'}
    />
  );

  const IconCustomize = isCustomizeIcon ? (
    customIcon()
  ) : (
    <Icon name="caret-down" size={15} color="#737373" />
  );

  const button = (
    <TouchableOpacity
      onPress={() => {
        setShowAll(showAll ? false : true);
      }}
      style={containerButtonStyle || Styles.containerTouch}
    >
      <View>
        <View style={containerIconStyle || Styles.containerIcon}>
          {IconCustomize}
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ width: buttonEnabled ? '80%' : '100%' }}>{Input}</View>
      {buttonEnabled ? button : <></>}
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
    setShowAll,
    filterElements,
    customizComponenteResult,
    textInfoStyle,
    containerTextInfoStyle,
    onChangeElement,
  } = elements;
  const isOnChangeElement = typeof onChangeElement === 'function';

  return filterElements.map((element, key) => {
    const valueResult = get(element, searchKey).toString();
    const properties = { valueResult, element };
    return (
      <TouchableOpacity
        key={key}
        onPress={() => {
          setValue(valueResult);
          setSearch(valueResult);
          setShowAll(false);
          isOnChangeElement && onChangeElement(element);
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
    setShowAll,
    onChangeElement,
  } = elements;
  const isOnChangeElement = typeof onChangeElement === 'function';
  return filterElements.map((element, key) => {
    const valueResult = element.toString();
    const properties = { valueResult, element };
    return (
      <TouchableOpacity
        key={key}
        onPress={() => {
          setValue(valueResult);
          setSearch(valueResult);
          setShowAll(false);
          isOnChangeElement && onChangeElement(element);
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
