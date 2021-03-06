import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const layout = props => {
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;
  return (
    <div>
      <Layout>
        <Header className="header">
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: "#fff" }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    Doctor pacient
                  </span>
                }
              >
                <Menu.Item key="1">
                  <Link to="/record" />
                  Add record
                </Menu.Item>
                <Menu.Item key="2">See pacient card</Menu.Item>
                <Menu.Item key="3">See family diagnose</Menu.Item>
                <Menu.Item key="4">See drugs</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="laptop" />
                    Order
                  </span>
                }
              >
                <Menu.Item key="5">Order pacient</Menu.Item>
                <Menu.Item key="6">See all pacient</Menu.Item>
                <Menu.Item key="7">Pacient details</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="notification" />
                    subnav 3
                  </span>
                }
              >
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content
            style={{
              background: "#fff",
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default layout;
