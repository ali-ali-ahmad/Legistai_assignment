export type PlanFormPropsTypes = {
  plan: PlanFormTypes;
};
export type PlanFormTypes = {
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
