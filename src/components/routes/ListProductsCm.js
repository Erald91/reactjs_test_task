import React from 'react';
import ProductCm from '../ProductCm';
import PropTypes from 'prop-types';

class ListProductsCm extends React.Component {
    constructor(props) {
        super(props);

        this.renderHeaderComponents = this.renderHeaderComponents.bind(this);
        this.renderProductsList = this.renderProductsList.bind(this);
    }

    renderHeaderComponents() {
        let headerTDs = this.props.headerComponent.map((headerCol, index) => <th key={index}>{headerCol}</th>);
        return (
            <thead>
                <tr>
                    {headerTDs}
                </tr>
            </thead>
        );
    }

    renderProductsList() {
        var bodyTDs = [];
        if(!this.props.appRef.state.productsList.length) {
            bodyTDs = <tr className="text-center"><td colSpan="6">No products found</td></tr>;
        } else {
            bodyTDs = this.props.appRef.state.productsList.map((product, index) => <ProductCm appRef={this.props.appRef} data={product} key={index} routeHistory={this.props.routeHistory} />);
        }
        return (
            <tbody>
                {bodyTDs}
            </tbody>
        );
    }

    render() {
        let headerTable = this.renderHeaderComponents();
        let bodyTable = this.renderProductsList();
        return (
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-bordered products-table">
                        {headerTable}
                        {bodyTable}
                    </table>
                </div>
            </div>
        );
    }
}

ListProductsCm.propTypes = {
    headerComponent: PropTypes.array,
    appRef: PropTypes.object,
    routeHistory: PropTypes.object
}

ListProductsCm.defaultProps = {
    headerComponent: ["ID", "Price", "Name", "Description", "Creation Date", "Settings"]
}

export default ListProductsCm;