import React, { Component, PropTypes } from 'react';
import NavMenu from './NavMenu';

class Sidebar extends Component {
    render() {
        let { currentPath, setCurrentPath } = this.props;

        return (
            <aside className="admin-sidebar">
                <NavMenu />
            </aside>
        );
    }
}

export default Sidebar;