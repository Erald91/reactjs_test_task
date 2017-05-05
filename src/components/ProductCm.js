import React from 'react';
import PropTypes from 'prop-types';
import {appStorage} from '../utilities';

class ProductCm extends React.Component {
    constructor(props) {
        super(props);

        this._updateAppState = this._updateAppState.bind(this);
        this.renderProductView = this.renderProductView.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
    }

    renderProductView(event) {
        this._updateAppState(this, this.props.data);
        this.props.routeHistory.push('/view-product');
    }

    editProduct() {
        this._updateAppState(this, this.props.data);
        this.props.routeHistory.push('/edit-product');
    }

    removeProduct() {
        if(!confirm(`Do you really want to remove this product from inventory?`)) return;
        this.props.appRef.setState((prevState, props) => {
            prevState.productsList = prevState.productsList.filter((product) => product.id != this.props.data.id);
            appStorage.setDataItem('productsList', prevState.productsList);
        });
    }

    _updateAppState(_thisCm, productDetails) {
        _thisCm.props.appRef.setState((prevState, props) => {
            prevState.product = {
                id: productDetails.id,
                price: productDetails.price,
                name: productDetails.name,
                description: productDetails.description,
                date: productDetails.date
            }
            appStorage.setDataItem('product', prevState.product);
        });
    }

    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.price}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.description}</td>
                <td>{this.props.data.date}</td>
                <td>
                    <i className="fa fa-eye" aria-hidden="true" onClick={this.renderProductView}></i>
                    <i className="fa fa-pencil" aria-hidden="true" onClick={this.editProduct}></i>
                    <i className="fa fa-trash" aria-hidden="true" onClick={this.removeProduct}></i>
                </td>
            </tr>
        );
    }
}

ProductCm.propTypes = {
    data: PropTypes.object,
    appRef: PropTypes.object,
    routeHistory: PropTypes.object
}

export default ProductCm;