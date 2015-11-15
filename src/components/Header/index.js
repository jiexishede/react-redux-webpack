import React, { Component, PropTypes } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="as-header">
                <h1>Hello World</h1>
            </header>
        );
    }
}

Header.propTypes = {
    /*increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired*/
};

export default Header;