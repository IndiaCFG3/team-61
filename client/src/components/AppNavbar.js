// were using reactstreap for this
import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Carousel } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";

const { Header, Content, Footer, Sider } = Layout;

class AppNavbar extends Component {
  state = {
    isOpen: false,
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    //render our navbar
    return (
      <Layout>
        <Router>
          <Sider
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0,
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="vertical" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/Home">HOME</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<UserOutlined />}>
                <Link className="link" to="/signup">
                  SIGNUP
                </Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<VideoCameraOutlined />}>
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<UploadOutlined />}>
                <Link className="link" to="/about">
                  ABOUT
                </Link>
              </Menu.Item>
              <Menu.Item key="5" icon={<BarChartOutlined />}>
                Admin
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout" style={{ marginLeft: 200 }}>
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
              <Route path="/home" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
            </Content>
            <Footer style={{ textAlign: "center" }}>Panah Foundation TM</Footer>
          </Layout>
        </Router>
      </Layout>
    );
  }
}

// const contentStyle = {
//   height: "160px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// };

export default AppNavbar;
