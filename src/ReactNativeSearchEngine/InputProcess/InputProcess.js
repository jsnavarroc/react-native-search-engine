import React from 'react';
import { TouchableOpacity, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
/* utilities */
import { onChangeExecute } from '../funtionsSearchEngine';
import Styles from '../StyleSearchEngine';

const InputProcess = elements => {
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
    showAllMode,
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
            showAllMode,
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

export default InputProcess;
