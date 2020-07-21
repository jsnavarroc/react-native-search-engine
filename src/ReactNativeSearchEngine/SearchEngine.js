import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import Styles from './StyleSearchEngine';
import PropTypes from 'prop-types';

import {
  filterIfObject,
  filterIfArray,
  renderElementsIfArray,
  renderElementsIfObjet,
  ShowInput,
} from './funtionsSearchEngine';

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
    onChangeText,
    buttonEnabled = true,
  } = props;
  const isArrayObject = typeof data[0] === 'object';
  const [search, setSearch] = useState('');
  const [value, setValue] = useState('');
  const [showAll, setShowAll] = useState(false);
  const filterElements = showAll
    ? data
    : isArrayObject
    ? filterIfObject({ search, searchKey, data })
    : filterIfArray({ search, data });
  const propertiesInput = { search, setSearch };
  const propertiesButton = { showAll, setShowAll };
  const results = isArrayObject
    ? renderElementsIfObjet({
        searchKey,
        setValue,
        setSearch,
        filterElements,
        customizComponenteResult,
        textInfoStyle,
        containerTextInfoStyle,
        setShowAll,
        onChangeText,
      })
    : renderElementsIfArray({
        setValue,
        setSearch,
        filterElements,
        customizComponenteResult,
        textInfoStyle,
        containerTextInfoStyle,
        setShowAll,
        onChangeText,
      });
  const isShow = search !== value && search !== '' && results.length > 0;
  return (
    <View>
      <ShowInput
        propertiesInput={propertiesInput}
        propertiesButton={propertiesButton}
        textInputStyle={textInputStyle}
        containerInputStyle={containerInputStyle}
        placeholder={placeholder}
        customizeComponentInput={customizeComponentInput}
        containerButtonStyle={containerButtonStyle}
        customIcon={customIcon}
        containerIconStyle={containerIconStyle}
        onChangeText={onChangeText}
        setShowAll={setShowAll}
        buttonEnabled={buttonEnabled}
      />
      {(isShow || showAll) && (
        <ScrollView style={containerScrollStyle || Styles.containerScroll}>
          {results}
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
  textInfoStyle: PropTypes.object,
  textInputStyle: PropTypes.object,
  containerInputStyle: PropTypes.object,
  containerScrollStyle: PropTypes.object,
  containerTextInfoStyle: PropTypes.object,
  containerButtonStyle: PropTypes.object,
  containerIconStyle: PropTypes.object,
  customizeComponentInput: PropTypes.func,
  onChangeText: PropTypes.func.isRequired,
  customizComponenteResult: PropTypes.func,
  customIcon: PropTypes.func,
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};
