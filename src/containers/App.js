import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCurrentPath } from '../actions/setCurrentPath';
import Header from '../components/Header/';
import Sidebar from '../components/Sidebar/';
import Footer from '../components/Footer/';

class App extends Component {
    render() {
        return (
            <div className="admin-main">
                <Header />
                <div className="admin-content-container">
                    <Sidebar />
                    <section className="admin-content">
                        {this.props.children || ''}
                    </section>
                </div>
                <Footer />
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