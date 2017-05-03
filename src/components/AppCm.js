import React from 'react';
import ContainerCm from './ui/ContainerCm';
import ListProductsCm from './routes/ListProductsCm';
import AddProductCm from './routes/AddProductCm';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class AppCm extends React.Component {
    render() {
        return (
        <Router>
            <div className="wrapper">
                <Route exact path ="/" render = {() => (
                    <ContainerCm>
                        <ListProductsCm/>
                    </ContainerCm>
                )} />
                <Route path="/new-product" render = {() => (
                    <ContainerCm>
                        <AddProductCm/>
                    </ContainerCm>
                )} />
            </div>
        </Router>
        );
    }
}

export default AppCm;