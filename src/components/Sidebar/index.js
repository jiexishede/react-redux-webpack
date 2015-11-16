import React, { Component, PropTypes } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <aside className="admin-sidebar">
                <ul className="menu">
                    <li>
                        <a href="#"><i className="iconfont icon-home"></i><span>Dashboard</span><i className="iconfont icon-angleleft"></i></a>
                        <ul className="sub-menu">
                            <li>
                                <a href="#">00002</a>
                            </li>
                            <li>
                                <a href="#">00003</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i className="iconfont icon-home"></i>Line-chart<i className="iconfont icon-angleleft"></i></a>
                        <ul className="sub-menu">
                            <li>
                                <a href="#">hhhh</a>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#"><i className="iconfont icon-home"></i>Bar-chart<i className="iconfont icon-angleleft"></i></a></li>
                    <li><a href="#"><i className="iconfont icon-home"></i>Pie-chart<i className="iconfont icon-angleleft"></i></a></li>
                </ul>
            </aside>
        );
    }
}

export default Sidebar;