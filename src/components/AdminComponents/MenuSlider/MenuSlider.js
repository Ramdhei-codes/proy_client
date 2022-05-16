import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

import { HomeOutlined, MenuOutlined } from "@ant-design/icons";

import "./MenuSlider.scss";

export default function MenuSlider(props) {
  const { menuCollapsed } = props;
  const { Sider } = Layout;

  return (
    <Sider className="admin-sider" collapsed={menuCollapsed}>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["/admin"]}>
        <Menu.Item key="1">
          <Link to={"/admin"}>
              <HomeOutlined/>
              <span className="nav-text">Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={"/admin/menu-web"}>
              <HomeOutlined/>
              <span className="nav-text">Menu Web</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
