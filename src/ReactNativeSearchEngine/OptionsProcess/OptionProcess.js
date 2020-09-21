import React from 'react';
import { get, isEmpty, isEqual } from 'lodash';

import ShowOptions from './ShowOptions';
import ShowInfoComponent from './ShowInfoComponent';

const OptionProcess = props => {
  const { searchKey, filterElements, isArrayObject, search, showNoResults, textEmpty, containerTextError} = props;
  // Solo cuando este el boton activo funciona.
  if (!isEmpty(filterElements)) { 
    const valueFoud = get(filterElements[0], searchKey).toString().toLowerCase() || '';
    const ifFoundExactItem =  isEqual(search.toLowerCase(), valueFoud)
    const elemetFount = filterElements.length === 1 && ifFoundExactItem
    if (elemetFount) { 
      return []
    }
  }
  if (isEmpty(filterElements) && !isEmpty(search) && !showNoResults) { 
    return <ShowInfoComponent textEmpty={textEmpty} containerTextError={containerTextError} />;
  }
  if (showNoResults) {
    return [];
  }
  return isEmpty(searchKey) && isArrayObject ? (
    <ShowInfoComponent  textEmpty={'The search key is not correct'} containerTextError={containerTextError}/>
  ) : (
    filterElements.map((element, key) => {
      return <ShowOptions {...props} key={key} element={element} />;
    })
  );
};

export default OptionProcess;
