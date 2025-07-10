import React from "react";
import styles from "./app.module.css";
import "../lib/index.module.css";
import { Button, Input, NavItem } from "../lib";
import { Navbar } from "src/lib/navbar";
import { Container } from "src/lib/container";
// reference: https://heroicons.com/
import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";

function App() {
  const handleSubmit = (e, value) => {
    console.log(value, "Submitted");
  };

  return (
    <Container alignCenter>
      <Navbar row alignCenter>
        <NavItem>Nav Item 1</NavItem>
        <NavItem>Nav Item 2</NavItem>
        <NavItem>Nav Item 3</NavItem>
      </Navbar>
      <p className="twcss-my-2">MF Components</p>
      <Button
        icon={<MagnifyingGlassIcon className="twcss-size-4" />}
        position="right"
      >
        Explore
      </Button>
      <Input
        fullWidth
        className={styles["fa-class-input"]}
        icon={<MagnifyingGlassIcon className="twcss-size-6" />}
        submit={{
          onSubmit: handleSubmit,
        }}
      />
    </Container>
  );
}

export default App;
