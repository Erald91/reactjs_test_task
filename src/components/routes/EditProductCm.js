import React from 'react';
import PropTypes from 'prop-types';
import ProductFormCm from '../base/ProductFormCm';
import {appStorage} from '../../utilities';

class EditProductCm extends ProductFormCm {
    constructor(props) {
        super(props);

        this.state = {
            id: props.appRef.state.product.id,
            price: props.appRef.state.product.price,
            name: props.appRef.state.product.name,
            description: props.appRef.state.product.description,
            date: props.appRef.state.product.date
        }

        this.manageProductDetails = this.manageProductDetails.bind(this);
    }

    manageProductDetails(event) {
        let AppRef = this.props.appRef;
        let productId = AppRef.state.product.id;
        let updatedValues = this.state;

        if(!this.validateProductDetails(event)) return;

        let checkIdUsers = AppRef.state.productsList.find((product) => product.id == updatedValues.id && product.id != productId);

        if(checkIdUsers) return alert(`Product with this ID already exists`);

        AppRef.setState((prevState, props) => {
            prevState.productsList.forEach((product, index, list) => {
                if(product.id == productId) {
                    list[index] = {
                        id: updatedValues.id,
                        price: updatedValues.price,
                        name: updatedValues.name,
                        description: updatedValues.description,
                        date: updatedValues.date
                    }
                }
            });
            appStorage.setDataItem('productsList', prevState.productsList);
        });

        this.props.routeHistory.push('/home');
    }
}

EditProductCm.propTypes = {
    appRef: PropTypes.object,
    routeHistory: PropTypes.object,
    actionButton: PropTypes.string,
    header: PropTypes.element
}

EditProductCm.defaultProps = {
    actionButton: "Update",
    header: <h3 className="text-center">Edit Product Details</h3>
}

export default EditProductCm;