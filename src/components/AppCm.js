import React from 'react';
import ContainerCm from './ui/ContainerCm';
import ListProductsCm from './routes/ListProductsCm';
import AddProductCm from './routes/AddProductCm';
import ViewProductCm from './routes/ViewProductCm';
import {DefaultProductsList} from './utilities';
import {HashRouter as Router, Route, Redirect} from 'react-router-dom';

class AppCm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            productsList: DefaultProductsList,
            viewProduct: null
        }
    }
    render() {
        let AppRef = this;
        return (
            <Router>
                <div className="wrapper">
                    <Route exact path = "/home" render = {({match, location, history}) => (
                        <ContainerCm>
                            <ListProductsCm appRef={AppRef} routeHistory={history} />
                        </ContainerCm>
                    )} />
                    <Route path="/new-product" render = {({match, location, history}) => (
                        <ContainerCm>
                            <AddProductCm appRef={AppRef} routeHistory={history} />
                        </ContainerCm>
                    )} />
                    <Route path="/view-product" render = {({match, location, history}) => AppRef.state.viewProduct ? (
                        <ContainerCm>
                            <ViewProductCm appRef={AppRef} routeHistory={history} />
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