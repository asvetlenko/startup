import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import * as userDetailsActions from '../actions'
import DetailsUser from '../components/DetailsUser'

class DetailsUserPageContainer extends PureComponent {
  render () {
    const {userInfo} = this.props

    return userInfo.id ? <DetailsUser  {...userInfo}/> : 'Loading...'
  }

  componentDidMount() {
    const {userUrlParams} = this.props
    this.props.actions.onLoadUserDetails({selectedUserId: userUrlParams.id})
  }

  componentWillUnmount() {
    this.props.actions.resetUserDetails()
  }
}

DetailsUserPageContainer.propTypes = {
  userUrlParams: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  userInfo: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  actions: PropTypes.shape({
    onLoadUserDetails: PropTypes.func.isRequired,
    resetUserDetails: PropTypes.func.isRequired,
  }).isRequired
}

const mapStateToProps = ({selectedUser}, {match}) => {
  return {
    userUrlParams: match.params,
    userInfo: selectedUser
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userDetailsActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailsUserPageContainer)
