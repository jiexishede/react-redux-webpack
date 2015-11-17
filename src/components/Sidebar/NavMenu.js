import React, { Component, PropTypes } from 'react';
import SubMenu from './SubMenu';
import config from './config';console.log(config);

class NavMenu extends Component {
    render() {
        return (
            <ul className="nav-menu">
                {config.map((nav, i) => {
                    return (
                        <li key={i}>
                            <a href="javascript;">
                                <i className={'iconfont ' + nav.icon}></i>
                                {nav.text}
                                <i className="iconfont icon-angleleft"></i>
                            </a>
                            <SubMenu items={nav.items} />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default NavMenu;