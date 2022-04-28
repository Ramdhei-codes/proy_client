import React from "react";
import { Layout } from "antd";

export default function LayoutAdmin(props) {
  console.log(props);
  const { children } = props;

  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <h2>Menu Slider</h2>
      <Layout>
        <Header>Header</Header>
        <Content>{children}</Content>
        <Footer>React project 2022</Footer>
      </Layout>
    </Layout>
  );
}
