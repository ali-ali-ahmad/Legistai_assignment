export type PlanCardPropsTypes = {
  plan: PlanCardTypes;
  // onSelected: (email: string, planIndex: number) => void;
};

export type PlanCardTypes = {
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
