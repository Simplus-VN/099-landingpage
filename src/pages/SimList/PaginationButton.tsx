import * as React from "react";
import { PaginationButtonProps } from "./types";

export const PaginationButton: React.FC<PaginationButtonProps> = ({
  children,
  active,
  disabled,
  onClick
}) => {
  const baseClasses = "overflow-hidden px-3 py-2 w-full rounded-lg shadow-sm";
  const activeClasses = active
    ? "bg-amber-400 text-white"
    : "bg-white text-black border border-solid border-neutral-300";
  const disabledClasses = disabled ? "opacity-40" : "";

  return (
    <div className="flex flex-col self-stretch my-auto text-base font-medium text-center whitespace-nowrap w-[46px]">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${baseClasses} ${activeClasses} ${disabledClasses}`}
      >
        {children}
      </button>
    </div>
  );
};