export interface INavItemProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  noPadding?: boolean;
  noMargin?: boolean;
  to?: string;
}
