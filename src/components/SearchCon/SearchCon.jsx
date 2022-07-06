import React from 'react';
import PropTypes from 'prop-types';
import * as S from './SearchCon.styles';

const SearchCon = ({ children, searchWidth, searchHeight }) => {
  return (
    <S.SearchCon width={searchWidth} height={searchHeight}>
      {children}
    </S.SearchCon>
  );
};

SearchCon.propTypes = { children: PropTypes.node.isRequired };

export default SearchCon;
