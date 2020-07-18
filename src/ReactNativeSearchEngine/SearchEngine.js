import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import Styles from './StyleSearchEngine';

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
    customizeResult,
    customizeInput,
    containerScrollStyle,
    textInputStyle,
    containerInputStyle,
    textInfoStyle,
    containerTextInfoStyle,
  } = props;
  const isArrayObject = typeof data[0] === 'object';
  const [search, setSearch] = useState('');
  const [value, setValue] = useState('');
  console.log({ isArrayObject, data });
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
        customizeResult,
        textInfoStyle,
        containerTextInfoStyle,
      })
    : renderElementsIfArray({
        setValue,
        setSearch,
        filterElements,
        customizeResult,
        textInfoStyle,
        containerTextInfoStyle,
      });
  const isShow = search !== value && search !== '' && results.length > 0;
  return (
    <View>
      <ShowInput
        customizeInput={customizeInput}
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
