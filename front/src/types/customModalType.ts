import { ReactNode } from "react";

export type customModalType = {
  isVisible: boolean
  setIsVisible: (a: boolean) => void
  onSubmit: (a: React.FormEvent<HTMLFormElement>) => Promise<boolean>
  children: ReactNode
  title: string
  buttonText: string
}
