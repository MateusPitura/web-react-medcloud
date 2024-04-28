import { patientType } from './patientType.ts'

export type tableRowType = {
    patient: patientType,
    setModalVisible: (a: boolean) => void,
    setEditingData: (a: patientType) => void,
    onDelete: (a: number) => void
}