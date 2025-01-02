/**
 * A basic button component.
 * @example
 * <Button>Hello World!</Button>
 **/
export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon?: React.ReactNode;
  position?: "left" | "right";
}
