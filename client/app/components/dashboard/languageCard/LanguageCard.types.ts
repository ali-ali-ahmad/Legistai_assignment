export type UserCardPropsTypes = {
  plan: UserCardTypes;
};

export type UserCardTypes = {
  id: number;
  title: string;
  price: number;
  discount: string;
  description: descriptionTypes;
};

type descriptionTypes = {
  info: string;
  benefits: string[];
};
