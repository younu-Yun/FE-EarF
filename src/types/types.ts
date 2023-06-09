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
  file: File | null;
  title: string;
  content: string;
  shareStatus: boolean;
};

export interface CheckboxesState {
  [key: string]: boolean;
}
