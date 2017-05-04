import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class AddProductCm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "",
            price: "",
            name: "",
            description: "",
            date: ""
        }

        this.manageUpdateOfFormState = this.manageUpdateOfFormState.bind(this);
        this.storeProductToInventary = this.storeProductToInventary.bind(this);
    }

    componentDidMount() {
        var _this = this;
        $('input.date')
        .datepicker({format: 'yyyy-mm-dd', 'autoclose': true, 'setDate': new Date(), todayHighlight: true})
        .on('changeDate', (event) => {
            _this.manageUpdateOfFormState("date", event);
        });

        $('input.date').datepicker('update', new Date());
        _this.manageUpdateOfFormState("date", {
            target: {
                value: $('input.date').val()
            }
        });

    } 

    manageUpdateOfFormState(field, event) {
        let currentState = this.state
        switch(field) {
            case "id":
                currentState.id = event.target.value;
                break;
            case "price":
                currentState.price = event.target.value;
                break;
            case "name":
                currentState.name = event.target.value;
                break;
            case "description":
                currentState.description = event.target.value;
                break;
            case "date":
                currentState.date = event.target.value;
                break;
            default:
                console.error(`Undefined product property: ${field}`);
        }
        this.setState(currentState);
    }

    storeProductToInventary(event) {
        let productDetails = this.state;
        for(let prodProperty in productDetails) {
            if(productDetails.hasOwnProperty(prodProperty)) {
                if(!productDetails[prodProperty].trim().length) {
                    return alert(`Field ${prodProperty} must not be empty`);
                }

                if(prodProperty == "price") {
                    if(!(/^[0-9]+$/.test(productDetails[prodProperty]))) {
                        return alert(`Field ${prodProperty} must be a number`);
                    }
                }
            }
        }

        let AppRef = this.props.appRef;
        let usedId = AppRef.state.productsList.find((product) => product.id == productDetails.id);

        if(usedId) return alert(`Product with this ID already exists`);
        else {
            AppRef.setState((prevState, props) => {
                prevState.productsList.push(this.state);
            });
        }
        
        this.props.routeHistory.push('/home');
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-offset-4 col-md-4">
                    <form className="add-category-form">
                        <div className="form-group">
                            <label htmlFor="id-field">ID</label>
                            <input type="text" className="form-control" id="id-field" placeholder="ID" value={this.state.id} onChange={(event) => this.manageUpdateOfFormState("id", event)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price-field">Price</label>
                            <input type="text" className="form-control" id="price-field" placeholder="Price" value={this.state.price} onChange={(event) => this.manageUpdateOfFormState("price", event)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name-field">Name</label>
                            <input type="text" className="form-control" id="name-field" placeholder="Name" value={this.state.name} onChange={(event) => this.manageUpdateOfFormState("name", event)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description-field">Description</label>
                            <input type="text" className="form-control" id="description-field" placeholder="Description" value={this.state.description} onChange={(event) => this.manageUpdateOfFormState("description", event)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="date-field">Date</label>
                            <input type="text" className="form-control date" id="date-field" placeholder="Date" value={this.state.date} />
                        </div>
                        <button className="btn btn-default" onClick={this.storeProductToInventary}>Create</button>
                    </form>
                </div>
            </div>
        );
    }
}

AddProductCm.propTypes = {
    appRef: PropTypes.object,
    routeHistory: PropTypes.object
}

export default AddProductCm;