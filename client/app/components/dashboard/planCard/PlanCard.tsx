import { PlanCardPropsTypes } from "./PlanCard.types";
import { Button } from "@/components/common";
import Image from "next/image";
import ICONS from "@/assets/svg";

const PlanCard = (props: PlanCardPropsTypes) => {
  const { plan } = props;
  const { id, title, price, discount, description } = plan;
  const { info, benefits } = description;
  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm border-2">
      <div className="flex flex-col p-4 gap-10">
        <div>
          <h3 className="text-3xl text-black font-bold">{title}</h3>
          <div className="flex flex-row items-center gap-2">
            <p className="text-2xl text-[#0054ec] font-bold">${price}</p>
            <p className="text-sm text-black bg-[#f2f2f2] p-1 rounded-md">
              {discount && "-" + discount}
            </p>
          </div>
          <p className="text-sm text-gray-400">
            per user/month, billed annually
          </p>
        </div>
        <div>
          <p className="text-sm text-black font-bold">{info}</p>
          <div className="flex mt-4 flex-col pl-2 gap-2">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-row gap-2">
                <Image
                  src={ICONS.checkIcon}
                  width={20}
                  height={20}
                  className="border-2 rounded-full"
                  alt="Website Logo"
                />
                <p className="text-sm text-black">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <Button
          className="w-60 font-bold rounded-full p-2 bg-[#f1f1f1] hover:bg-[#38b9bb] transition-colors hover:text-[#fff]"
          type="submit"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default PlanCard;
