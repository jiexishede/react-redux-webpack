import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header/';
import { setCurrentPath } from '../actions/setCurrentPath';
import './sass/index.scss';

class App extends Component {
    render() {
        return (
            <div className="as-main">
                <Header />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentPath: state.currentPath
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setCurrentPath
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);