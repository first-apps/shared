export interface INavbarProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  row?: boolean;
  column?: boolean;
  alignCenter?: boolean;
}
