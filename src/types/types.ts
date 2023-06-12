export interface User {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
}

export interface QuestionPost {
  id: string;
  userId: string;
  title: string;
  content: string;
}

export interface PostInput {
  userId: string;
  title: string;
  content: string;
}

export type TFormData = {
  tag: string[];
  file: string | Blob;
  title: string;
  content: string;
  shareStatus: boolean;
};

export interface CheckboxesState {
  [key: string]: boolean;
}

export type EachDayDataApiType = {
  _id: string;
  id: string;
  tag: string[];
  imageUrl: string;
  title: string;
  content: string;
  shareStatus: boolean;
  date: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
