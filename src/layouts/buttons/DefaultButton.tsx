import React from "react";

interface DefaultButtonProps {
  name: string;
  icon?: string;
  color?: string;
  bgcolor?: string;
  disable?: boolean;
  outline?: boolean;
}

const DefaultButton = ({ name, bgcolor }: DefaultButtonProps) => {
  return (
    <button className={`w-16 h-[50px]  ${bgcolor ? bgcolor : "bg-object_black60"} `}>
      {name}
    </button>
  );
};

export default DefaultButton;
