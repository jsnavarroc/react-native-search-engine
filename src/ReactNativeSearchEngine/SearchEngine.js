import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import Styles from './StyleSearchEngine';
import PropTypes from 'prop-types';
import OptionProcess from './OptionsProcess/OptionProcess';
import InputProcess from './InputProcess/InputProcess';
import { isEmpty } from 'lodash';

import { filterArray } from './funtionsSearchEngine';

const SearchEngine = props => {
  const {
    searchKey,
    data,
    style,
    error,
    customizComponenteResult,
    customizeComponentInput,
    containerScrollStyle,
    textInputStyle,
    containerInputStyle,
    textInfoStyle,
    containerTextInfoStyle,
    containerTextError,
    textInfoStyleError,
    containerButtonStyle,
    containerIconStyle,
    leftIcon,
    placeholder,
    onChangeSearch,
    buttonEnabled,
    showAllMode,
    showNoResults,
    value,
    textEmpty,
    onBlur, 
    onFocus,
    onPressOption,
  } = props;  
  const isArrayObject = typeof data[0] === 'object';
  const isCustomize = typeof customizeComponentInput?.InputCutom === 'function';
  const [search, setSearch] = useState(value);
  const [valueData, setValueData] = useState();
  const [onInput, setOnInput] = useState({
    showOptions:true
  });
  const [showAllButton, setShowAllButton] = useState(showAllMode);
  const filterElements = filterArray({
    search,
    searchKey,
    data,
    isArrayObject,
    showAllMode,
    showAllButton,
  });

  const propertiesButton = { showAllButton, setShowAllButton };
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
    error,
    onBlur,
    setOnInput,
    onInput,
  };
  const elements = {
    setValueData,
    setSearch,
    search,
    filterElements,
    customizComponenteResult,
    textInfoStyle,
    textInfoStyleError,
    containerTextInfoStyle,
    containerTextError,
    setShowAllButton,
    onChangeSearch,
    showNoResults,
    textEmpty,
    onPressOption,
    onInput,
    data
  };
  const scrollStyles = { ...Styles.containerScroll, ...containerScrollStyle };

  useEffect(() => {
    setSearch(value);
    setValueData('');
  }, [data]);

  useEffect(() => {
    // Pendiente: colocar que no mande la data de una si no que la mande cuando complete el input (Pensar primero)
    // !isEmpty(filterElements) && onChangeSearch && onChangeSearch({ data: filterElements, value });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);



  return (
    <View style={style}>
      <InputProcess
        propertiesInput={propertiesInput}
        containerButtonStyle={containerButtonStyle}
        containerIconStyle={containerIconStyle}
        setShowAllButton={setShowAllButton}
      />
 
        <ScrollView style={scrollStyles} nestedScrollEnabled={true}>
          <OptionProcess
            {...elements}
            searchKey={searchKey}
            isArrayObject={isArrayObject}
          />
        </ScrollView>
    </View>
  );
};

export default SearchEngine;

SearchEngine.defaultProps = {
  containerScrollStyle: {},
  buttonEnabled: false,
  showAllMode: false,
  showNoResults: false,
  textEmpty:'Item not found',
  onChangeSearch: () => {},
  onPressOption: () => {},
  onBlur: () => {},
  onFocus: () => {},
  data: [],
  style: {},
  value: '',
  error:false,
};
SearchEngine.propTypes = {
  searchKey: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  buttonEnabled: PropTypes.bool,
  showAllMode: PropTypes.bool,
  showNoResults: PropTypes.bool,
  style: PropTypes.object,
  textInfoStyle: PropTypes.object,
  textInputStyle: PropTypes.object,
  containerInputStyle: PropTypes.object,
  containerScrollStyle: PropTypes.object,
  containerTextInfoStyle: PropTypes.object,
  containerButtonStyle: PropTypes.object,
  containerIconStyle: PropTypes.object,
  customizeComponentInput: PropTypes.object,
  customizComponenteResult: PropTypes.func,
  leftIcon: PropTypes.func,
  containerTextError: PropTypes.object,
  textInfoStyleError: PropTypes.object,
  error: PropTypes.bool,
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onChangeSearch: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onPressOption: PropTypes.func,
};
