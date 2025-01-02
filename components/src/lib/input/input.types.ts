import { IButtonProps } from "../button/button.types";

interface IContainerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSubmit"> {
  onSubmit?: (e?: React.FormEvent<HTMLFormElement>, value?: any) => void;
}
interface ISubmitProps extends Omit<IButtonProps, "onSubmit"> {
  onSubmit?: (e?: React.FormEvent<HTMLButtonElement>, value?: any) => void;
}

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  position?: "left" | "right";
  containerProps?: IContainerProps;
  fullWidth?: boolean;
  submit?: boolean | ISubmitProps;
}
