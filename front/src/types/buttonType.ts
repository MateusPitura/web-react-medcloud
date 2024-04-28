import { ReactNode } from "react";

export type buttonType = {
    type: 'primary' | 'edit' | 'delete'
    children: ReactNode
    onClick: () => void;
}