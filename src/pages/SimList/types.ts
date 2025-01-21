/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SimCardProps {
    discount: number;
    phoneNumber: string;
    brand: string;
    currentPrice: number;
    originalPrice: number;
    imageUrl: string;
    discountIconUrl: string;
    onClickSim?: any;
  }
  
  export interface PaginationButtonProps {
    children: React.ReactNode;
    active?: boolean;
    disabled?: boolean;
    onClick?: () => void;
  }
  
  export interface NavigationButtonProps {
    iconUrl: string;
    disabled?: boolean;
    onClick?: () => void;
  }