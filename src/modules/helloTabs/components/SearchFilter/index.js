import React from 'react'
import PropTypes from 'prop-types'

import './styles.less'

const SearchFilter = ({searchFilter, handleChangeSearchFilter}) => {
  return <div className='searchActivitiesFilter'>
    <input
      type='text'
      maxLength='100'
      placeholder='Search Activities'
      onInput={handleChangeSearchFilter}
      value={searchFilter}
    />
  </div>
}

SearchFilter.propTypes = {
  searchFilter: PropTypes.string.isRequired,
  handleChangeSearchFilter: PropTypes.func.isRequired
}

export default SearchFilter
