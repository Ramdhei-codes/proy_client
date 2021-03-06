import React from "react";
import { Button } from "antd";
import Logo from "../../../assets/img/png/RAMDHEI.png";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";

import "./MenuTop.scss";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;

  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img src={Logo} alt="" className="menu-top__left-logo" />
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  );
}
