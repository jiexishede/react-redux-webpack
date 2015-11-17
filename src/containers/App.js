import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCurrentPath } from '../actions/setCurrentPath';
import Header from '../components/Header/';
import Sidebar from '../components/Sidebar/';
import Footer from '../components/Footer/';

class App extends Component {
    render() {
        let { currentPath, setCurrentPath } = this.props;

        return (
            <div className="admin-main">
                <Header />
                <Sidebar currentPath={currentPath} setCurrentPath={setCurrentPath} />
                <section className="admin-content">
                    {this.props.children || ''}
                </section>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setCurrentPath
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);