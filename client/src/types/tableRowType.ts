import { patientType } from './patientType.ts'

export type tableRowType = {
    patient: patientType,
    setViewModalVisible: (a: boolean) => void,
    setEditModalVisible: (a: boolean) => void,
    setDeleteModalVisible: (a: boolean) => void,
    setCurrentId: (a?: string) => void,
}