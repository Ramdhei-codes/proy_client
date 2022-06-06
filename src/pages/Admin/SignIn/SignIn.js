import React from "react";
import { Layout, Tabs } from "antd";

import LogIn from '../../../components/AdminComponents/LogIn'
import Register from '../../../components/AdminComponents/Register'

export default function Signin() {
  const { TabPane } = Tabs;
  const { Content } = Layout;
  return (
    <Layout className="tabs-signin">
      <Content>
        <Tabs type="card" className="tabs">
          <TabPane tab={<span>Iniciar sesión</span>} key="1">
            <LogIn></LogIn>
          </TabPane>
          <TabPane tab={<span>Registrarse</span>} key="2">
            <Register></Register>
          </TabPane>
        </Tabs>
      </Content>
    </Layout>
  );
}
