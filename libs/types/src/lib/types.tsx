export interface UiProps {
  title: string;
  showTitle?: boolean;
}
export  interface IndexProps {
  countries: [Country];
}
export  interface Country {
  code: string;
  name: string;
}