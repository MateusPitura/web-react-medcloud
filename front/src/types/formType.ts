import { ReactNode } from "react"

export type formType = {
    children: ReactNode
    onSubmit: (a: React.FormEvent<HTMLFormElement>) => {}
    buttonText: string
}