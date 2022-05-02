import React from "react";
import { Layout } from "antd";

export default function LayoutAdmin(props) {
  console.log(props);
  const { Header, Content, Footer } = Layout;
  const { children } = props;
  return (
    <Layout>
      <Layout className="layoutAdmin">
        <Header className="layoutHeader">Header</Header>
        <Content>{children}</Content>
        <Footer>React Project 2022</Footer>
      </Layout>
    </Layout>
  );
}
