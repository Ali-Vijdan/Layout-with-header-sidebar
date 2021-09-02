import React from "./sidebar.css";
import "./sidebar.css";
import { Layout, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';


// import icons

import Piechart from "../../assets/images/pieChart.png";
import User from "../../assets/images/user.png";
import File from "../../assets/images/file.png";
import AlignLeft from "../../assets/images/alignLeft.png";
import Settings from "../../assets/images/settings.png";
import Logout from "../../assets/images/logout.png"

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


const menu = (
    <Menu>
        <Menu.Item>
            <a href="">1st menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a href="">2nd menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a href="">3nd menu item</a>
        </Menu.Item>
    </Menu>
);

const Sidebar = () => {

    return (
        <div className="sidebar">
            <Sider style={{ background: "blue" }} className="site-layout-background">
                <Menu
                    // mode="vertical"
                    style={{ height: '100%', borderRight: 0, background: "#1F295A" }}
                >
                    <Dropdown overlay={menu} trigger={['click']} className="profileDropdown">
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            <div className="profile">
                                <span>AT</span>
                            </div> <DownOutlined style={{ color: "#FFFFFF", marginLeft: "10px" }} />
                        </a>
                    </Dropdown>
                    <Menu.Item className="siderItem" icon={<img src={Piechart} alt="icon" />} key="1">Home</Menu.Item>
                    <Menu.Item className="siderItem" icon={<img src={User} alt="icon" />} key="2">Clients</Menu.Item>
                    <Menu.Item className="siderItem" icon={<img src={File} alt="icon" />} key="3">Document Bank</Menu.Item>
                    <Menu.Item className="siderItem" icon={<img src={AlignLeft} alt="icon" />} key="4">Questionnaire Bank</Menu.Item>
                    <SubMenu className="siderItem SetingsMenu" key="5" icon={<img src={Settings} alt="icon" />} title="Settings">
                        <Menu.Item className="settingItem" key="1">Option 1</Menu.Item>
                        <Menu.Item className="settingItem" key="2">Option 2</Menu.Item>
                        <Menu.Item className="settingItem" key="3">Option 3</Menu.Item>
                        <Menu.Item className="settingItem" key="4">Option 4</Menu.Item>
                        <Menu.Item className="settingItem" key="5">Option 5</Menu.Item>
                    </SubMenu>
                    <Menu.Item className="siderItem logoutMenu" icon={<img src={Logout} alt="icon" />} key="6">Log Out</Menu.Item>
                </Menu>
            </Sider>
        </div>
    )

}

export default Sidebar;