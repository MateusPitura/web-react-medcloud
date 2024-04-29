import { patientType } from "../types/patientType"

export const handleSubmitForm = async (
    event: React.FormEvent<HTMLFormElement>,
    validateInputs: (patient: patientType) => Promise<boolean>,
    handleFunction: (patient: patientType, id?: number ) => Promise<boolean>,
    id?: number 
) => {
    const newData: patientType = {
        name: event.target[0].value,
        birthdate: event.target[1].value,
        email: event.target[2].value,
        postalCode: event.target[3].value,
        street: event.target[4].value,
        number: event.target[5].value,
        neighborhood: event.target[6].value,
        city: event.target[7].value,
        state: event.target[8].value
    }
    if (!(await validateInputs(newData))) return false
    if (await handleFunction(newData, id)) return true
    return false
}