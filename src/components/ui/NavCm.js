import React from 'react';
import PropTypes from 'prop-types';
import {NavLink as Link} from 'react-router-dom';

class NavCm extends React.Component {
    render() {
        return (
            <div className="navigation-container">
                <ul className="nav nav-pills">
                    <li>
                        <Link activeStyle={this.props.activeStyle} to="/home">
                            Products List
                        </Link>
                    </li>
                    <li>
                        <Link activeStyle={this.props.activeStyle} to="/new-product">
                            Add Product
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

NavCm.propTypes = {
    activeStyle: PropTypes.object
}

NavCm.defaultProps = {
    activeStyle: {backgroundColor: '#0086ff', color: '#ffffff'}
}

export default NavCm