"use client";

import { IInputProps } from "./input.types";
import globalStyles from "../index.module.css";
import styles from "./input.module.css";
import { Button } from "../button";
import { useEffect, useState } from "react";

const Form = (props) => <form {...props} />;
const Div = (props) => <div {...props} />;

export const Input: React.FC<IInputProps> = (props) => {
  const {
    icon,
    position = "left",
    containerProps,
    submit,
    fullWidth,
    ...rest
  } = props;

  const [value, setValue] = useState(rest.value);

  useEffect(() => {
    setValue(rest.value);
  }, [rest.value]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    rest.onChange?.(e);
    return;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (containerProps?.onSubmit) {
      containerProps.onSubmit(e as any, value);
      return;
    }
    if (typeof submit === "object" && submit?.onSubmit) {
      submit.onSubmit(e as any, value);
      return;
    }
  };

  const Container = submit ? Form : Div;

  return (
    <Container
      {...containerProps}
      onSubmit={submit ? handleSubmit : undefined}
      className={[
        styles.container,
        fullWidth && globalStyles["full-width"],
        icon && position === "left" && styles.left,
        // TODO: make sure this overrides the previous class
        containerProps?.className,
      ]
        .filter((el) => el)
        .join(" ")}
    >
      {icon && position === "left" && icon}
      <input
        {...rest}
        value={value}
        onChange={onChange}
        className={[
          styles.input,
          icon && position === "right" && styles.right,
          rest.className,
        ]
          .filter((el) => el)
          .join(" ")}
      />
      {icon && position === "right" && icon}
      {submit && (
        <Button
          {...(typeof submit === "object" ? submit : {})}
          className={[
            styles.submit,
            icon && position === "right" && styles["submit-right"],
            typeof submit === "object" && submit.className,
          ]
            .filter((el) => el)
            .join(" ")}
          type="submit"
        >
          {typeof submit === "object" && submit.children
            ? submit.children
            : "Search"}
        </Button>
      )}
    </Container>
  );
};
