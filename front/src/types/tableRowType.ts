import { patientType } from './patientType.ts'

export type tableRowType = {
    patient: patientType,
    setModalVisible: (a: boolean) => void,
    setCurrentId: (a?: string) => void,
    onDelete: (a?: string) => void
}