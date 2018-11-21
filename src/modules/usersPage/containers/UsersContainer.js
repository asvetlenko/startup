import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import * as usersActions from '../actions'
import UsersList from '../components/UsersList'

class UsersContainer extends PureComponent {
  render () {
    const {usersList} = this.props

    const props = {
      usersList
    }
    return <UsersList {...props} />
  }
  componentDidMount() {
    this.props.actions.onLoadUsersList()
  }
}

UsersContainer.propTypes = {
  usersList: PropTypes.array.isRequired,
  actions: PropTypes.shape({
    onLoadUsersList: PropTypes.func.isRequired
  }).isRequired
}

const mapStateToProps = ({users, }) => {
  return {
    usersList: users.usersList
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(usersActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
