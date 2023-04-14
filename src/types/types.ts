export type CardPropsType = {
  id?: number | undefined;
  title: string | undefined;
  size: string | undefined;
  raiting: number | undefined;
  descr?: string | undefined;
  care: (string | boolean | undefined)[] | undefined;
  place: string | undefined;
  blooming?: string | undefined;
  img?: string | undefined;
  like?: boolean | undefined;
};

export type RoutePropsType = {
  path: string;
  title: string;
  component: JSX.Element;
};

export type FormInputs = {
  title: string;
  descr: string;
  size: string;
  place: string;
  blooming: string;
  care: string[];
  raiting: number;
  image: FileList;
};

export interface Response {
  info: Info;
  results: ICharacter[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
