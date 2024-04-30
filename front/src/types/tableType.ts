import { patientType } from "./patientType"

export type tableType = {
    setModalVisible: (a: boolean) => void
    setCurrentId: (a?: string) => void
    onDelete: (a?: string) => void
    data: patientType[]
}