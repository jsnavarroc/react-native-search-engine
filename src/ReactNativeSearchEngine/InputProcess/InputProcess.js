import React from 'react';
import { TouchableOpacity, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { isEmpty } from 'lodash';
/* utilities */
import { onChangeExecute } from '../funtionsSearchEngine';
import Styles from '../StyleSearchEngine';
const IconCutom = props => {
  const {
    containerPropsIcon: {
      showAllButton,
      setShowAllButton,
      containerButtonStyle,
      containerIconStyle,
      buttonEnabled,
      leftIcon,
    },
    error
  } = props;
  const isCustomizeIcon = typeof leftIcon === 'function';
  const IconCustomize = isCustomizeIcon ? (
    leftIcon()
  ) : (
    <Icon name="caret-down" size={15} color="#737373" />
  );

  const Button = (
    <TouchableOpacity
      onPress={() => {
        setShowAllButton(showAllButton ? false : true);
      }}
      style={{ ...Styles.containerTouch({error}), ...containerButtonStyle }}
    >
      <View>
        <View style={{ ...Styles.containerIcon, ...containerIconStyle }}>
          {IconCustomize}
        </View>
      </View>
    </TouchableOpacity>
  );
  const Incon = (
    <View style={{ ...Styles.containerTouch, ...containerButtonStyle }}>
      <View>
        <View style={{ ...Styles.containerIcon, ...containerIconStyle }}>
          {IconCustomize}
        </View>
      </View>
    </View>
  );
  if (isCustomizeIcon && !buttonEnabled) {
    return Incon;
  }
  if (buttonEnabled) {
    return Button;
  }
  return <></>;
};

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
    leftIcon,
    error,
  } = propertiesInput;
  const { setShowAllButton } = propertiesButton;
  const isCustomize = typeof customizeComponentInput?.InputCutom === 'function';
  const showElement = typeof leftIcon === 'function' || buttonEnabled;
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
      ...customizeComponentInput?.addPropsInput,
    };
    Input = customizeComponentInput.InputCutom(properties);
  } else {
    Input = (
      <TextInput
        style={[
          { ...Styles.textInput, ...textInputStyle },
          { ...Styles.containerInput({ showElement, error }), ...containerInputStyle },
        ]}
        autoCompleteType={'off'}
        onChangeText={text => {
          setSearch(text);
          setShowAllButton(showAllMode && text === '' ? true : false);
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
  } = elements;
  const { propertiesButton, buttonEnabled, leftIcon } = propertiesInput;
  const showElement = typeof leftIcon === 'function' || buttonEnabled
  const { showAllButton, setShowAllButton } = propertiesButton;
  const containerPropsIcon = {
    showAllButton,
    setShowAllButton,
    containerButtonStyle,
    containerIconStyle,
    buttonEnabled,
    leftIcon,
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ width: showElement ? '80%' : '100%' }}>
        <InputText propertiesInput={propertiesInput} />
      </View>
      <IconCutom containerPropsIcon={containerPropsIcon} error={propertiesInput.error}/>
    </View>
  );
};

export default InputProcess;
