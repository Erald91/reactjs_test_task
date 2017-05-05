import React from 'react';
import ContainerCm from './ui/ContainerCm';
import ListProductsCm from './routes/ListProductsCm';
import AddProductCm from './routes/AddProductCm';
import ViewProductCm from './routes/ViewProductCm';
import EditProductCm from './routes/EditProductCm';
import {DefaultProductsList, appStorage} from '../utilities';
import {HashRouter as Router, Route, Redirect} from 'react-router-dom';

class AppCm extends React.Component {
    constructor(props) {
        super(props);

        if(!appStorage.getDataItem('productsList')) {
            appStorage.setDataItem('productsList', DefaultProductsList);
        }

        if(!appStorage.getDataItem('product')) {
            appStorage.setDataItem('product', null);
        }

        this.state = {
            productsList: appStorage.getDataItem('productsList'),
            product: appStorage.getDataItem('product')
        }
    }
    render() {
        let AppRef = this;
        return (
            <Router>
                <div className="wrapper">
                    <Route exact path="/home" render={({match, location, history}) => (
                        <ContainerCm>
                            <ListProductsCm appRef={AppRef} routeHistory={history} />
                        </ContainerCm>
                    )} />
                    <Route path="/new-product" render={({match, location, history}) => (
                        <ContainerCm>
                            <AddProductCm appRef={AppRef} routeHistory={history} />
                        </ContainerCm>
                    )} />
                    <Route path="/view-product" render={({match, location, history}) => AppRef.state.product ? (
                        <ContainerCm>
                            <ViewProductCm appRef={AppRef} routeHistory={history} />
                        </ContainerCm>
                    ) : (
                        <Redirect to="/home" />
                    )} />
                    <Route path="/edit-product" render={({match, location, history}) => AppRef.state.product ? (
                        <ContainerCm>
                            <EditProductCm appRef={AppRef} routeHistory={history} />
                        </ContainerCm>
                    ) : (
                        <Redirect to="/home" />
                    )} />
                    <Route path="/" render={() => (
                        <Redirect to="/home" />
                    )}/>
                </div>
            </Router>
        );
    }
}

export default AppCm;