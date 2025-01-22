import * as React from 'react';
import { DropdownProps } from './types';
import { getAssetPath } from '../../../utils/path';

export const DropdownSelect: React.FC<DropdownProps> = ({ label, value, icon }) => (
  <div className="flex flex-col flex-1 shrink justify-center basis-0">
    <div className="text-sm leading-none">{label}</div>
    <div className="flex overflow-hidden flex-col mt-1 w-full text-base whitespace-nowrap">
      <div className="flex overflow-hidden gap-10 justify-between items-center p-3 w-full rounded-lg border border-solid border-neutral-300 min-h-[48px]">
        <div className="self-stretch px-2 my-auto">{value}</div>
        <img
          loading="lazy"
          src={getAssetPath(icon)}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
      </div>
    </div>
  </div>
);