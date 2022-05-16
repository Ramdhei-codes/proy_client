import React, { useState } from "react";
import { Layout } from "antd";
import MenuTop from "../components/AdminComponents/MenuTop";
import MenuSlider from "../components/AdminComponents/MenuSlider";

export default function LayoutBasic(props) {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <MenuSlider menuCollapsed={menuCollapsed}></MenuSlider>
      <Layout className="layoutAdmin">
        <Header className="layoutHeader">
          <MenuTop
            menuCollapsed={menuCollapsed}
            setMenuCollapsed={setMenuCollapsed}
          ></MenuTop>
        </Header>
        <Content>
          <h1>Rutas</h1>
        </Content>
        <Footer>React Project 2022</Footer>
      </Layout>
    </Layout>
  );
}
