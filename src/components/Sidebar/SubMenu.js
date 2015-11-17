import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class SubMenu extends Component {
    render() {
        let { items } = this.props;

        return (
            <ul className="sub-menu">
                {items.map((sub, i) => {
                    return (
                        <li key={i}>
                            <Link to={sub.path}>{sub.text}</Link>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default SubMenu;