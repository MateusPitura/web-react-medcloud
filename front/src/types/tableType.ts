import { patientType } from "./patientType"

export type tableType = {
    setModalVisible: (a: boolean) => void
    setEditingData: (a: patientType) => void
    onDelete: (a: number) => void
}