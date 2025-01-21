import * as React from "react";
import { NavigationButtonProps } from "./types";

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  iconUrl,
  disabled,
  onClick
}) => {
  return (
    <div className="flex flex-col self-stretch my-auto w-10">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`flex overflow-hidden flex-col justify-center items-center px-2.5 w-10 h-10 bg-white rounded-lg border border-solid shadow-sm border-neutral-300 ${
          disabled ? "opacity-40" : ""
        }`}
      >
        <img
          loading="lazy"
          src={iconUrl}
          alt=""
          className="object-contain w-full aspect-square"
        />
      </button>
    </div>
  );
};