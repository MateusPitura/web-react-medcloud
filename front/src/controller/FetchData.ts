import { patientType } from "../types/patientType.ts"
import { toastError, toastSucess } from "./ToastController.ts"

export const readPatients = async () => {
    try {
        const dataFromServer = await fetch("http://localhost:8800")
        return await dataFromServer.json()
    } catch (err) {
        toastError("Unable to read, error in the server")
    }
}

export const createPatient = async (patient: patientType) => {
    try {
        await fetch("http://localhost:8800", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(patient)
        })
        toastSucess("Patient created")
        return true
    } catch (err) {
        toastError("Unable to create, error in the server")
        return false
    }
}

export const updatePatient = async (patient: patientType, id?: string) => {
    try {
        await fetch(`http://localhost:8800/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(patient)
        })
        toastSucess("Patient edited")
        return true
    } catch (err) {
        toastError("Unable to update, error in the server")
        return false
    }
}

export const deletePatient = async (id: number) => {
    try {
        await fetch(`http://localhost:8800/${id}`, {
            method: "DELETE",
        })
        toastSucess("Patient deleted")
        return true
    } catch (err) {
        toastError("Unable to delete, error in server")
        return false
    }
}

export const fetchPostalCode = async (postalCode: string) => {
    const dataFromApi = await fetch(`https://viacep.com.br/ws/${postalCode}/json/`)
    const dataJson = await dataFromApi.json()
    if (dataJson.erro == true) {
        toastError("Postal code doesn't exist")
        return false
    }
    return dataJson
}