import { patientType } from "./patientType"

export type tableType = {
    setViewModalVisible: (a: boolean) => void,
    setEditModalVisible: (a: boolean) => void,
    setCurrentId: (a?: string) => void
    onDelete: (a?: string) => void
    data: patientType[]
}