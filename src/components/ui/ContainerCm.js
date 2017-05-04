import React from 'react';
import NavCm from './NavCm';

class ContainerCm extends React.Component {
    render() {
        return (
            <div className="container app-container">
                <div className="row">
                    <div className="col-md-offset-1 col-md-9">
                        <div className="row">
                            <div className="col-md-12">
                                <blockquote className="custom-blockquote">
                                     <h4 className="main-app-header">Products Inventory</h4>
                                </blockquote>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <NavCm />
                            </div>
                        </div>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default ContainerCm;