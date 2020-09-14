import React from 'react';
import { TouchableOpacity, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
/* utilities */
import { onChangeExecute, onChangeCutomExecute } from '../funtionsSearchEngine';
import Styles from '../StyleSearchEngine';

const InputText = ({ propertiesInput }) => {
  const {
    search,
    setSearch,
    searchKey,
    isArrayObject,
    data,
    containerInputStyle,
    placeholder,
    onChangeSearch,
    showAllMode,
    customizeComponentInput,
    propertiesButton,
    textInputStyle,
    buttonEnabled,
  } = propertiesInput;
  const { setShowAll } = propertiesButton;
  const isCustomize = typeof customizeComponentInput?.InputCutom === 'function';
  let Input = [];
  // When is cutomize
  if (isCustomize) {
    const properties = {
      onChangeSearchEngine: text =>
      onChangeExecute({
          isArrayObject,
          text,
          searchKey,
          data,
          showAllMode,
          onChangeSearch,
      }),
      ...customizeComponentInput?.addPropsInput
    };
    Input = customizeComponentInput.InputCutom(properties);
  } else {
    Input = (
      <TextInput
        style={[
          textInputStyle || Styles.textInput,
          containerInputStyle || Styles.containerInput({ buttonEnabled }),
        ]}
        autoCompleteType={'off'}
        onChangeText={text => {
          setSearch(text);
          setShowAll(showAllMode && text === '' ? true : false);
          onChangeSearch &&
            onChangeExecute({
              isArrayObject,
              text,
              searchKey,
              data,
              onChangeSearch,
              showAllMode,
            });
        }}
        value={search}
        placeholder={placeholder || 'Search'}
      />
    );
  }
  return Input;
};

const InputProcess = elements => {
  const {
    containerButtonStyle,
    propertiesInput,
    containerIconStyle,
    customIcon,
  } = elements;
  const { propertiesButton, buttonEnabled } = propertiesInput;
  const { showAll, setShowAll } = propertiesButton;

  const isCustomizeIcon = typeof customIcon === 'function';

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
      <View style={{ width: buttonEnabled ? '80%' : '100%' }}>
        <InputText propertiesInput={propertiesInput} />
      </View>
      {buttonEnabled ? button : <></>}
    </View>
  );
};

export default InputProcess;
