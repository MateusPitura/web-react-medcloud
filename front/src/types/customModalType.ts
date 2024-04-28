import { ReactNode } from "react";

export type customModalType = {
  isVisible: boolean
  setIsVisible: (a: boolean) => void
  onSubmit: (a: React.FormEvent<HTMLFormElement>) => boolean
  children: ReactNode
  title: string
  buttonText: string
}
