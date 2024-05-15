export type State = {
  errors?: {
    email?: string[];
    plan_index?: string[];
  };
  message?: string | null;
};

export type FormSelectPlanAction = (
  state: State,
  formData: FormData
) => Promise<State>;
