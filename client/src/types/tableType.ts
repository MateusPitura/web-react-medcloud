import { patientType } from "./patientType"

export type tableType = {
    setViewModalVisible: (a: boolean) => void,
    setEditModalVisible: (a: boolean) => void,
    setDeleteModalVisible: (a: boolean) => void,
    setCurrentId: (a?: string) => void
    setPage: (a: number) => void
    page?: number
    maxPages?: number
    data: patientType[]
}