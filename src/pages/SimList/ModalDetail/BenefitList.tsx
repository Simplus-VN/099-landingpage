import * as React from 'react';
import { BenefitItemProps } from './types';

export const BenefitList: React.FC<{ items: BenefitItemProps[] }> = ({ items }) => (
  <div className="p-4 mt-4 w-full text-xs font-medium leading-4 rounded-xl bg-slate-50 text-zinc-900 max-md:max-w-full">
    {items.map((item, index) => (
      <React.Fragment key={index}>
        {item.text}
        <br />
      </React.Fragment>
    ))}
  </div>
);