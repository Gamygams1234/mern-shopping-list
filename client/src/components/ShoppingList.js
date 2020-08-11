import React, { Component, useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Button, UncontrolledCarousel } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import { connect } from "react-redux";
// import { getItems, deleteItem } from "../flux/actions/itemActions";
// import { IItemReduxProps, IShoppingList } from "../types/interfaces";

import { v4 as uuid } from "uuid";

export default class ShoppingList extends Component {
  state = {
    items: [
      { id: uuid(), name: "Eggs" },
      { id: uuid(), name: "Cheese" },
      { id: uuid(), name: "Milk" },
      { id: uuid(), name: "Ham" },
      { id: uuid(), name: "Beer" },
    ],
  };
  render() {
    const { items } = this.state;
    return (
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={() => {
            const name = prompt("Enter Item");
            if (name) {
              this.setState((state) => ({
                items: [...state.items, { id: uuid(), name }],
              }));
            }
          }}
        >
          Add Item
        </Button>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      this.setState((state) => ({
                        items: state.items.filter((item) => item.id !== id),
                      }));
                    }}
                  >
                    Delete
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}
