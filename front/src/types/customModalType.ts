import { ReactNode } from "react";

export type customModalType = {
  isVisible: boolean
  setIsVisible: (a: boolean) => void
  children: ReactNode
  title: string
}
