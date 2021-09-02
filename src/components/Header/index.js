import React from "react";
import "./header.css";
import { Layout, Menu, Dropdown } from 'antd';
import { DownOutlined, BarsOutlined } from '@ant-design/icons';
import Logo from "../../assets/images/logo.png";
import Bell from "../../assets/images/bell.png";

const { Header, Content, Sider } = Layout;


const menu = (
    <Menu>
        <Menu.Item>
            1st menu item
        </Menu.Item>
        <Menu.Item>
            2nd menu item
        </Menu.Item>
        <Menu.Item>
            3nd menu item
        </Menu.Item>
    </Menu>
);

const Navbar = (props) => {

    return (
        <div>
            <Header className="header" >
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="menu">
                    <div className="menuHeading">
                        <h2>Reminders</h2>
                    </div>
                    <Menu className="menuList" theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item className="menuItem" key="1"><img src={Bell} alt="" /></Menu.Item>
                        <Menu.Item className="menuItem menu-sm-hide" key="2">
                            <Dropdown overlay={menu} trigger={['click']}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    <div className="profile">
                                        <span>AT</span>
                                    </div> <DownOutlined style={{ color: "#1F295A" }} />
                                </a>
                            </Dropdown>
                        </Menu.Item>
                        <Menu.Item className="menuIcon" key="1">{props.menuIcon}</Menu.Item>
                        
                    </Menu>
                </div>
            </Header>
        </div>
    )

}

export default Navbar;