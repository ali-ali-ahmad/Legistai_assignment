import { redirect } from "next/navigation";
import { FormSelectPlanAction } from "./route.type";
import { toast } from "react-hot-toast";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const userApi = process.env.NEXT_PUBLIC_USER_API;

export const POST: FormSelectPlanAction = async (prevState, formData) => {
  const id = formData.get("id");
  const email = formData.get("email");
  const plan_index = formData.get("plan_index");
  try {
    const response = await fetch(`${baseUrl}/${userApi}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        email: email,
        plan_index: plan_index,
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    console.log("Success:", responseData);
    toast.success("Congratulations, your subscription has been approved");
  } catch (error) {
    console.error("Error:", error);
    toast.error("Network Error: Failed to Select Plan.");
    return {
      message: "Network Error: Failed to Select Plan.",
    };
  }

  redirect("/dashboard");
};
