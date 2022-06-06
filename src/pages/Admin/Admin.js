import React from "react";
import { Card, Row, Col } from "antd";

import { useNavigate } from "react-router-dom";
import { getAccessToken } from "../../auth/auth";

import { Link } from "react-router-dom";
import "./Admin.scss";

export default function Admin() {
  const user = getAccessToken();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user) {
      navigate("/admin/login");
    }
  });
  
  return (
    <div className="container">
      <Link to="/contact" className="cards-link">
        <Card className="card" title="Admin Home" bordered={false}>
          Contact card
        </Card>
      </Link>

      <Link to="/admin/signin" className="cards-link">
        <Card className="card" title="Admin SignIn" bordered={false}>
          Admin SignIn Card
        </Card>
      </Link>

      <Link to="/" className="cards-link">
        <Card className="card" title="Home" bordered={false}>
          Home card
        </Card>
      </Link>
    </div>
  );
}
