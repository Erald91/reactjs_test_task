import React from 'react';
import {Link} from 'react-router-dom';

class NavCm extends React.Component {
    render() {
        return (
            <div className="navigation-container">
                <ul className="nav nav-pills">
                    <li>
                        <Link to="/">
                            Products List
                        </Link>
                    </li>
                    <li>
                        <Link to="/new-product">
                            Add Product
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavCm