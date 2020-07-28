import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import Styles from './StyleSearchEngine';
import PropTypes from 'prop-types';
import OptionProcess from './OptionsProcess/OptionProcess';
import InputProcess from './InputProcess/InputProcess';

import { filterArray } from './funtionsSearchEngine';

const SearchEngine = props => {
  const {
    searchKey,
    data,
    style,
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
    buttonEnabled,
    showAllMode,
    showNothing,
    value = ''
  } = props;
  const isArrayObject = typeof data[0] === 'object';
  const [search, setSearch] = useState(value);
  const [valueData, setValueData] = useState();
  const [showAll, setShowAll] = useState(showAllMode);
  const filterElements = filterArray({ search, searchKey, data, isArrayObject, showAllMode, showAll });
  const propertiesInput = { search, setSearch, searchKey, isArrayObject, data };
  const propertiesButton = { showAll, setShowAll };
  const elements = {
    setValueData,
    setSearch,
    filterElements,
    customizComponenteResult,
    textInfoStyle,
    containerTextInfoStyle,
    setShowAll,
    onChangeElement,
  };
  const scrollStyles = { ...Styles.containerScroll, ...containerScrollStyle };
  const isShow = search !== valueData && search !== '';

  useEffect(() => {
    onChangeElement({data:filterElements, value})
  },[])

  useEffect(() => { 
    setSearch('')
    setValueData('')
  },[data])

  return (
    <View style={style}>
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
        <ScrollView style={scrollStyles} nestedScrollEnabled = {true}>
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


SearchEngine.defaultProps = {
  containerScrollStyle: {},
  buttonEnabled: true,
  showAllMode: false,
  showNothing: false,
  data: [],
  style: {}
};
SearchEngine.propTypes = {
  searchKey: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  buttonEnabled: PropTypes.bool,
  showAllMode: PropTypes.bool,
  showNothing: PropTypes.bool,
  style: PropTypes.object,
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
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
