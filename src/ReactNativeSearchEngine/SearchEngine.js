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
    leftIcon,
    placeholder,
    onChangeSearch,
    buttonEnabled,
    showAllMode,
    showNothing,
    value = '',
  } = props;
  const isArrayObject = typeof data[0] === 'object';
  const isCustomize = typeof customizeComponentInput?.InputCutom === 'function';
  const [search, setSearch] = useState(value);
  const [valueData, setValueData] = useState();
  const [showAll, setShowAll] = useState(showAllMode);
  const filterElements = filterArray({
    search,
    searchKey,
    data,
    isArrayObject,
    showAllMode,
    showAll,
  });
  const propertiesButton = { showAll, setShowAll };
  const propertiesInput = {
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
  };
  const elements = {
    setValueData,
    setSearch,
    filterElements,
    customizComponenteResult,
    textInfoStyle,
    containerTextInfoStyle,
    setShowAll,
    onChangeSearch,
  };
  const scrollStyles = { ...Styles.containerScroll, ...containerScrollStyle };
  const isShow = search !== valueData && search !== '';
  useEffect(() => {
    onChangeSearch && onChangeSearch({ data: filterElements, value });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setSearch('');
    setValueData('');
  }, [data]);

  return (
    <View style={style}>
      <InputProcess
        propertiesInput={propertiesInput}
        containerButtonStyle={containerButtonStyle}
        containerIconStyle={containerIconStyle}
        setShowAll={setShowAll}
      />
      {(isShow || showAll) && !showNothing && !isCustomize && (
        <ScrollView style={scrollStyles} nestedScrollEnabled={true}>
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
  buttonEnabled: false,
  showAllMode: false,
  showNothing: false,
  onChangeSearch: () => {},
  data: [],
  style: {},
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
  customizeComponentInput: PropTypes.object,
  onChangeSearch: PropTypes.func,
  customizComponenteResult: PropTypes.func,
  leftIcon: PropTypes.func,
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
