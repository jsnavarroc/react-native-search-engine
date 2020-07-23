import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import Styles from './StyleSearchEngine';
import PropTypes from 'prop-types';
import OptionProcess from './OptionsProcess/OptionProcess';
import InputProcess from './InputProcess/InputProcess';

import { filterArray } from './funtionsSearchEngine';

const SearchEngine = props => {
  const {
    searchKey,
    data = [],
    customizComponenteResult,
    customizeComponentInput,
    containerScrollStyle,
    textInputStyle,
    containerInputStyle,
    textInfoStyle,
    containerTextInfoStyle,
    containerButtonStyle,
    containerIconStyle,
    customIcon,
    placeholder,
    onChangeElement,
    buttonEnabled = true,
    showAllMode = false,
    showNothing = false,
  } = props;
  const isArrayObject = typeof data[0] === 'object';
  const [search, setSearch] = useState('');
  const [value, setValue] = useState('');
  const [showAll, setShowAll] = useState(showAllMode);
  const filterElements = showAll
    ? data
    : filterArray({ search, searchKey, data, isArrayObject, showAllMode });

  const propertiesInput = { search, setSearch, searchKey, isArrayObject, data };
  const propertiesButton = { showAll, setShowAll };
  const elements = {
    setValue,
    setSearch,
    filterElements,
    customizComponenteResult,
    textInfoStyle,
    containerTextInfoStyle,
    setShowAll,
    onChangeElement,
  };

  const isShow = search !== value && search !== '';
  return (
    <View>
      <InputProcess
        propertiesInput={propertiesInput}
        propertiesButton={propertiesButton}
        textInputStyle={textInputStyle}
        containerInputStyle={containerInputStyle}
        placeholder={placeholder}
        customizeComponentInput={customizeComponentInput}
        containerButtonStyle={containerButtonStyle}
        customIcon={customIcon}
        containerIconStyle={containerIconStyle}
        onChangeElement={onChangeElement}
        setShowAll={setShowAll}
        buttonEnabled={buttonEnabled}
        showAllMode={showAllMode}
      />
      {(isShow || showAll) && !showNothing && (
        <ScrollView style={containerScrollStyle || Styles.containerScroll}>
          <OptionProcess
            {...elements}
            searchKey={searchKey}
            isArrayObject={isArrayObject}
          />
        </ScrollView>
      )}
    </View>
  );
};

export default SearchEngine;
SearchEngine.propTypes = {
  searchKey: PropTypes.string,
  placeholder: PropTypes.string,
  buttonEnabled: PropTypes.bool,
  showAllMode: PropTypes.bool,
  showNothing: PropTypes.bool,
  textInfoStyle: PropTypes.object,
  textInputStyle: PropTypes.object,
  containerInputStyle: PropTypes.object,
  containerScrollStyle: PropTypes.object,
  containerTextInfoStyle: PropTypes.object,
  containerButtonStyle: PropTypes.object,
  containerIconStyle: PropTypes.object,
  customizeComponentInput: PropTypes.func,
  onChangeElement: PropTypes.func,
  customizComponenteResult: PropTypes.func,
  customIcon: PropTypes.func,
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};
