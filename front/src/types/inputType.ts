export type inputType = {
    label: string,
    type: string,
    value?: string,
    onChange?: (e: string) => void
    isValid: boolean
    isStatic: boolean
}