import React, { useState } from "react";
import { Layout } from "antd";
import MenuTop from "../components/AdminComponents/MenuTop";
import MenuSlider from "../components/AdminComponents/MenuSlider";
import Signin from "../pages/Admin/SignIn/SignIn";
import { Routes, Route } from "react-router-dom";

export default function LayoutBasic(props) {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;
  const { children } = props;
  const user = null;

  if (!user) {
    return (
      <Layout>
        <Signin />
        <Routes>
          <Route path="/admin/login/*" element={<Signin />}></Route>
        </Routes>
      </Layout>
    );
  }
  return (
    <Layout className="layoutAdmin">
      <Header style={{ padding: "0.5em" }}>
        <MenuTop
          menuCollapsed={menuCollapsed}
          setMenuCollapsed={setMenuCollapsed}
        ></MenuTop>
      </Header>
      <Layout>
        <MenuSlider menuCollapsed={menuCollapsed}></MenuSlider>
        <Content>{children}</Content>
      </Layout>
      <Footer className="layoutFooter">React Project 2022</Footer>
    </Layout>
  );
}
