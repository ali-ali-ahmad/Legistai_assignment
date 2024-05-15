"use client";

import { PlanFormPropsTypes } from "./PlanForm.types";
import { useFormState } from "react-dom";
import { POST } from "@/api/users";
import { PlanCard } from "../planCard";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const SelectPlanForm = (props: PlanFormPropsTypes) => {
  const { plan } = props;

  const user = useSelector((state: RootState) => state.user);

  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(POST, initialState);

  const id = Number(String(Date.now()).slice(-7));
  return (
    <form action={dispatch}>
      <input type="hidden" value={id} name="id" />
      <input type="hidden" value={`${user.email}`} name="email" />
      <input type="hidden" value={plan.id} name="plan_index" />
      <PlanCard plan={plan} />
    </form>
  );
};

export default SelectPlanForm;
