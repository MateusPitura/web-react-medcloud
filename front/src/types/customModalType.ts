import { ReactNode } from "react";

export type customModalType = {
  isVisible: boolean
  setIsVisible: (a: boolean) => void
  onSubmit: (a: React.FormEvent<HTMLFormElement>) => void
  children: ReactNode
  title: string
  buttonText: string
}
