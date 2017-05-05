import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ProductFormCm from '../base/ProductFormCm';
import {appStorage} from '../../utilities';

class AddProductCm extends ProductFormCm {
    constructor(props) {
        super(props);

        this.manageProductDetails = this.manageProductDetails.bind(this);
    }

    manageProductDetails(event) {
        if(!this.validateProductDetails(event)) return false;

        let AppRef = this.props.appRef;
        let usedId = AppRef.state.productsList.find((product) => product.id == this.state.id);

        if(usedId) return alert(`Product with this ID already exists`);
       
        AppRef.setState((prevState, props) => {
            prevState.productsList.push(this.state);
            appStorage.setDataItem('productsList', prevState.productsList);
        });
        
        this.props.routeHistory.push('/home');
    }
}

AddProductCm.propTypes = {
    appRef: PropTypes.object,
    routeHistory: PropTypes.object,
    actionButton: PropTypes.string
}

AddProductCm.defaultProps = {
    actionButton: "Add"
}

export default AddProductCm;