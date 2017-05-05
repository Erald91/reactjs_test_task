import React from 'react';
import PropTypes from 'prop-types';
import {appStorage} from '../../utilities';

class ViewProductCm extends React.Component {
    componentWillUnmount() {
        this.props.appRef.setState((prevState, props) => {
            prevState.product = null;
            appStorage.setDataItem('product', prevState.product);
        });
    }

    render() {
        let productDetails = this.props.appRef.state.product;
        return (
            <div className="row">
                <div className="col-md-offset-4 col-md-4">
                    <h3 className="text-center">Product Details</h3>
                    <form>
                        <div className="form-group">
                            <label>ID</label><br/>
                            <span className="product-detail">{productDetails.id}</span>
                        </div>
                        <div className="form-group">
                            <label>Price</label><br/>
                            <span className="product-detail">{productDetails.price}</span>
                        </div>
                        <div className="form-group">
                            <label>Name</label><br/>
                            <span className="product-detail">{productDetails.name}</span>
                        </div>
                        <div className="form-group">
                            <label>Description</label><br/>
                            <span className="product-detail">{productDetails.description}</span>
                        </div>
                        <div className="form-group">
                            <label>Creation Date</label><br/>
                            <span className="product-detail">{productDetails.date}</span>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

ViewProductCm.propTypes = {
    appRef: PropTypes.object,
    routeHistory: PropTypes.object
}

export default ViewProductCm;