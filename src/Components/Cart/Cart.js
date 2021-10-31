import React from "react";
import { Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Cart.css";
const Cart = (props) => {
  const { img, name, desc, price, id } = props.package;
  return (
    <Col>
      <Card className="cart">
        <Card.Img className="cart-img" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <Card.Text>
            {price}
            <span>$</span>
          </Card.Text>
          <NavLink to={`/details/${id}`}>
            <button className="details-btn fw-bolder">Details</button>
          </NavLink>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cart;
