import React from "react";
import { Input, Form } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Layout, Tabs } from "antd";

import LogIn from '../../components/AdminComponents/LogIn'

export default function Signin() {
  const { TabPane } = Tabs;
  const { Content } = Layout;
  return (
    <Layout>
      <Content>
        <Tabs type="card">
          <TabPane tab={<span>Iniciar sesión</span>} key="1">
            <LogIn></LogIn>
          </TabPane>
          <TabPane tab={<span>Registrarse</span>} key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </Content>
    </Layout>
  );
}
