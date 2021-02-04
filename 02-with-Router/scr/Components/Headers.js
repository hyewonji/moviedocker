import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.ul`
  list-style: none;
  font-weight: 600;
  display: flex;
  font-size: 25px;
  padding: 30px 0px 30px 0px;
`;

const Item = styled.li`
  text-decoration: none;
  margin-right: 30px;
  background: ${(props) => (props.current ? "#ecbd0b" : "transparent")};
  color: ${(props) => (props.current ? "white" : "black")};
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <Item current={pathname === "/"}>
      <Link to="/" style={{ textDecoration: "none" }}>
        Prices
      </Link>
    </Item>
    <Item current={pathname === "/exchanges"}>
      <Link to="/exchanges" style={{ textDecoration: "none" }}>
        Exchanges
      </Link>
    </Item>
    <Item current={pathname === "/coins"}>
      <Link to="/coins" style={{ textDecoration: "none" }}>
        Coins
      </Link>
    </Item>
  </Header>
));
