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
  } = props;
  const isArrayObject = typeof data[0] === 'object';
  const [search, setSearch] = useState('');
  const [value, setValue] = useState('');
  const filterElements = isArrayObject
    ? filterIfObject({ search, searchKey, data })
    : filterIfArray({ search, data });
  const propertiesInput = { search, setSearch };
  const results = isArrayObject
    ? renderElementsIfObjet({
        searchKey,
        setValue,
        setSearch,
        filterElements,
        customizComponenteResult,
        textInfoStyle,
        containerTextInfoStyle,
      })
    : renderElementsIfArray({
        setValue,
        setSearch,
        filterElements,
        customizComponenteResult,
        textInfoStyle,
        containerTextInfoStyle,
      });
  const isShow = search !== value && search !== '' && results.length > 0;
  return (
    <View>
      <ShowInput
        customizeComponentInput={customizeComponentInput}
        propertiesInput={propertiesInput}
        textInputStyle={textInputStyle}
        containerInputStyle={containerInputStyle}
      />
      {isShow && (
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
  textInfoStyle: PropTypes.object,
  textInputStyle: PropTypes.object,
  containerInputStyle: PropTypes.object,
  containerScrollStyle: PropTypes.object,
  containerTextInfoStyle: PropTypes.object,
  customizeComponentInput: PropTypes.func,
  customizComponenteResult: PropTypes.func,
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};