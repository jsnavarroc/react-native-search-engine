import React from 'react';
import { get, isEmpty, isEqual } from 'lodash';

import ShowOptions from './ShowOptions';
import ShowInfoComponent from './ShowInfoComponent';



const OptionProcess = props => {
  const { searchKey, filterElements, isArrayObject, search, showNoResults, textEmpty, data, onInput} = props;
  // Solo cuando este el boton activo funciona.
  if (!isEmpty(filterElements)) { 
    const valueFoud = get(filterElements[0], searchKey).toString().toLowerCase() || '';
    const ifFoundExactItem =  isEqual(search.toLowerCase(), valueFoud)
    const elemetFount = filterElements.length === 1 && ifFoundExactItem
    if (elemetFount) { 
      return []
    }
  }
  if (isEmpty(filterElements) && !isEmpty(search) && !showNoResults && !isEmpty(data)) { 
    return <ShowInfoComponent textEmpty={textEmpty} {...props} />;
  }
  // if (!onInput.showOptions) { 
  //   return [];
  // }
  if (showNoResults) {
    return [];
  }
  return isEmpty(searchKey) && isArrayObject ? (
    <ShowInfoComponent {...props}/>
  ) : (
    filterElements.map((element, key) => {
      return <ShowOptions {...props} key={key} element={element} />;
    })
  );
};

export default OptionProcess;
