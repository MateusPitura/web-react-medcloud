import { patient } from './patient.ts'

export type tableRow = {
    patient: patient,
    setModalVisible: () => void,
    setEditingData: (a: patient) => void,
}