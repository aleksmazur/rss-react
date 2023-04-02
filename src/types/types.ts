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

export type CarePropsType = {
  bright: boolean;
  sun: boolean;
  shade: boolean;
  sandy: boolean;
  soil: boolean;
  waterDaily: boolean;
  waterWeekly: boolean;
};

export type TypeStateForm = {
  title: boolean;
  descr: boolean;
  size: boolean;
  place: boolean;
  blooming: boolean;
  care: boolean;
  raiting: boolean;
  image: boolean;
  showErrors: boolean;
};

export type TypePropsForm = {
  addCard: (card: CardPropsType) => void;
};

export type PropsTypeOtherInput = {
  label: string;
  type: string;
  inputRef: React.Ref<HTMLInputElement>;
  isValid: boolean;
  error: string;
  showErrors: boolean;
};

export type PropsTypeCheckbox = {
  label: string;
  inputRef: React.Ref<HTMLInputElement>;
};

export type PropsTypeSelect = {
  label: string;
  options: (number | undefined)[] | (string | undefined)[];
  inputRef: React.Ref<HTMLSelectElement>;
  isValid: boolean;
  error: string;
  showErrors: boolean;
};

export type PropsTypeSwitcher = {
  value1: string;
  value2: string;
  label: string;
  name: string;
  inputRef1: React.Ref<HTMLInputElement>;
  inputRef2: React.Ref<HTMLInputElement>;
  isValid: boolean;
  error: string;
  showErrors: boolean;
};

export type PropsTypeHeader = {
  title: string;
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
