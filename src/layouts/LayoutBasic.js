import React from "react";
import { Layout } from "antd";
import './layoutBasic.scss'

export default function LayoutBasic(props) {
  const { children } = props;

  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <Layout className="layout">
        <Header className="layoutHeader">Header</Header>
        <Content className="layoutContent">{children}</Content>
        <Footer>React Project 2022</Footer>
      </Layout>
    </Layout>
  );
}
