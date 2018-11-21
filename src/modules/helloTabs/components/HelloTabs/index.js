import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const HelloTabs = ({ pathname, search, hash }) => (
    <div>
        Hello-Child
        <ul>
            <li><Link to="/hello?color=Blue&size=40">My tab run With query string tab</Link></li>
            <li><Link to="/hello#lovelove">My tab With hash</Link></li>
            <li><Link to="/hello#lovelove">My tab With hash</Link></li>
        </ul>
        <div>
            pathname: {pathname}
        </div>
        <div>
            search: {search}
        </div>
        <div>
            hash: {hash}
        </div>
    </div>
)



HelloTabs.propTypes = {
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
}

export default HelloTabs
