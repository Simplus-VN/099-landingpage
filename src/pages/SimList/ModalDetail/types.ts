/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SimDetailProps {
    label: string;
    value: string;
}

export interface DropdownProps {
    label: string;
    value: string;
    icon: string;
}

export interface BenefitItemProps {
    text: string;
}

export interface ModalDetailProps {
    packageList?: any;
    flashSaleData?: any;
    dataSimDetail?: any;
    isOpen: boolean;
    setIsOpen?: any;
}