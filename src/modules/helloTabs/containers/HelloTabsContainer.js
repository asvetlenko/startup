import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import HelloTabs from '../components/HelloTabs'

class HelloTabsContainer extends PureComponent {
    /*
  handleChangeSearchFilter = (e) => {
    const {searchFilter, activityActions} = this.props

    let newSearchFilter = e.target.value
    if (newSearchFilter !== searchFilter) {
      activityActions.onEnterSearchTextFilter(newSearchFilter)
    }
  }
   */
    render () {
        /*
      const {searchFilter} = this.props

      const props = {
        searchFilter: searchFilter,
        handleChangeSearchFilter: this.handleChangeSearchFilter
      }
      */
        return (<HelloTabs {...this.props} />)
    }
}

HelloTabsContainer.propTypes = {
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
}

const mapStateToProps = ({router}) => {
    console.dir(router);
    return {
        pathname: router.location.pathname,
        search: router.location.search,
        hash: router.location.hash,
    }
}

export default connect(mapStateToProps)(HelloTabsContainer)
