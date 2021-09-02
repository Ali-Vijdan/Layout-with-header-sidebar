import React, { useState } from "react";
import "./home.css";
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { MenuFoldOutlined, CloseOutlined,  } from '@ant-design/icons';
import Navbar from "../../components/Header/index.js";
import Sidebar from "../../components/Sidebar/index.js";

import Reminder from "../Reminders/index.js";

const { Content } = Layout;


const Home = (props) => {

  const [menuIcon, setMenuIcon] = useState(false);
  const sidebarToggle = () => {
    setMenuIcon(!menuIcon);
  };

  return (

    <Layout style={{ background: "transparent" }} className="mainContentWrapper">
      <Navbar menuIcon={menuIcon ? <MenuFoldOutlined onClick={sidebarToggle} />: <CloseOutlined onClick={sidebarToggle} />} />
      <Layout style={{ background: "transparent", margin: "0px" }}>
        <div className={menuIcon ? "sidebarHide" : "sidebarMain"} >
          <Sidebar />
        </div>
        <Layout style={{ padding: '0 24px 24px', background: "#dae5f6" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: "transparent"
            }}
          >
            <Reminder />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );

}

export default Home;