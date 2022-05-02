import React from "react";
import { Layout } from "antd";

export default function LayoutBasic(props) {
  const { children } = props;

  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <Layout className="layout">
        <Header className="layoutHeader">Header</Header>
        <Content>{children}</Content>
        <Footer>React Project 2022</Footer>
      </Layout>
    </Layout>
  );
}
