import React from "react";
import { Card, Row, Col } from "antd";

import { Link } from "react-router-dom";

export default function Admin() {
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
