"use client";

import { ArrowCircleLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Header = ({ title }) => {
  const router = useRouter();

  const handelBack = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <span
        onClick={handelBack}
        className=" text-color-primary hover:text-color-accent"
      >
        <ArrowCircleLeft size={32} />
      </span>
      <h3 className="text-2xl text-color-primary font-bold">{title}</h3>
    </div>
  );
};

export default Header;
