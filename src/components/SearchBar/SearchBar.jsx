import React from 'react';
import * as S from './SearchBar.styles';

import PropTypes from 'prop-types';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ handleChange, value }) => {
  return (
    <S.SearchBar>
      <S.Icon icon={faMagnifyingGlass} />
      <S.Input value={value} onChange={(e) => handleChange(e.target.value)} />
    </S.SearchBar>
  );
};

SearchBar.propTypes = {};

export default SearchBar;
