import { ReactNode } from "react";

export type buttonType = {
    type: 'primary' | 'secondary' | 'action'
    children: ReactNode
    onClick: () => void;
}