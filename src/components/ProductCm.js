import React from 'react';
import PropTypes from 'prop-types';

class ProductCm extends React.Component {
	constructor(props) {
		super(props);

		this.renderProductView = this.renderProductView.bind(this);
		this.removeProduct = this.removeProduct.bind(this);
	}

	renderProductView(event) {
		this.props.appRef.setState((prevState, props) => {
			let newState = prevState;
			newState.viewProduct = {
				id: this.props.data.id,
				price: this.props.data.price,
				name: this.props.data.name,
				description: this.props.data.description,
				date: this.props.data.date
			}

			return newState;
		});

		this.props.routeHistory.push('/view-product');
	}

	removeProduct() {
		if(!confirm('Do you really want to remove this product from inventory?')) return;
		this.props.appRef.setState((prevState, props) => {
			prevState.productsList = prevState.productsList.filter((product) => product.id != this.props.data.id);
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
					<i className="fa fa-pencil" aria-hidden="true"></i>
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