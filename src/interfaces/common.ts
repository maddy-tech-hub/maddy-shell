export interface cardInfo {
  title: string;
  subTitle?: string;
  details: string[];
  duration: string;
  linkTitle?: string;
  url?: string;
  type?: string;
}

export interface RouteConfig {
  path: string;
  label: string;
  Component: React.LazyExoticComponent<React.FC>;
}
