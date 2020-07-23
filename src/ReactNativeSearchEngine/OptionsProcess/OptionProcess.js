import React from 'react';
import { get, isEmpty } from 'lodash';

import ShowOptions from './ShowOptions';
import ShowInfoComponent from './ShowInfoComponent';

const OptionProcess = props => {
  const { searchKey, filterElements, isArrayObject } = props;
  return isEmpty(searchKey) && isArrayObject ? (
    <ShowInfoComponent />
  ) : (
    filterElements.map((element, key) => {
      return <ShowOptions {...props} key={key} element={element} />;
    })
  );
};

export default OptionProcess;
