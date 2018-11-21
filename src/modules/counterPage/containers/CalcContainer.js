import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import Calc from '../components/Calc'
import * as counterActions from '../actions'

class CalcContainer extends Component {
    handleIncrementClick = () => {
        const {actions} = this.props
        actions.increment()
    }

    handleDecrementClick = () => {
        const {actions} = this.props
        actions.decrement()
    }

    render () {
        const {count} = this.props

        const props = {
            count,
            handleIncrementClick: this.handleIncrementClick,
            handleDecrementClick: this.handleDecrementClick
        }

        return (<Calc {...props} />)
    }
}

CalcContainer.propTypes = {
    count: PropTypes.number.isRequired,
    actions: PropTypes.shape({
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired
    }).isRequired
}

const mapStateToProps = ({counter}) => {
    return {
        count: counter.count
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CalcContainer)
