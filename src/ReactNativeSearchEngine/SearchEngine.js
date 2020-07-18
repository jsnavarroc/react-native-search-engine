import React, { useState } from 'react';
import { View } from 'react-native';

import {
  filterIfObject,
  filterIfArray,
  renderElementsIfArray,
  renderElementsIfObjet,
  ShowInput,
} from './funtionsSearchEngine';

const SearchEngine = props => {
  const { searchKey, data = [], customizeResult, customizeInput } = props;
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
      })
    : renderElementsIfArray({
        setValue,
        setSearch,
        filterElements,
        customizeResult,
      });

  return (
    <View>
      <ShowInput
        customizeInput={customizeInput}
        propertiesInput={propertiesInput}
      />
      {search !== value && results}
    </View>
  );
};

export default SearchEngine;
