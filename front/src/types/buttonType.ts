import { ReactNode } from "react";

export type buttonType = {
    type: 'primary' | 'secondary' | 'edit' | 'delete'
    children: ReactNode
    onClick: () => void;
}