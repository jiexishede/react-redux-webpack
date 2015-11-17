import React, { Component, PropTypes } from 'react';
import SubMenu from './SubMenu';
import config from './config';

class NavMenu extends Component {
    
    
    render() {
        return (
            <ul className="nav-menu">
                <li>
                    <a href={config.home.path}>
                        <i className={'iconfont ' + config.home.icon}></i>
                        {config.home.text}
                    </a>
                </li>

                {config.menus.map((menu, i) => {
                    return (
                        <li key={i}>
                            <a href="javascript:;">
                                <i className={'iconfont ' + menu.icon}></i>
                                {menu.text}
                                <i className="iconfont icon-angleleft"></i>
                            </a>
                            <SubMenu items={menu.items} />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default NavMenu;