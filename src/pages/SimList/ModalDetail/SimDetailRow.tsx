import * as React from 'react';
import { SimDetailProps } from './types';

export const SimDetailRow: React.FC<SimDetailProps> = ({ label, value }) => (
  <div className="flex gap-2 items-start mt-2 max-w-full w-[336px]">
    <div className="text-gray-500">{label}</div>
    <div className="flex-1 shrink text-black basis-0">{value}</div>
  </div>
);