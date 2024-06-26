import { patientType } from "../types/patientType.ts"
import { toastError, toastSucess } from "./ToastController.ts"

export const getCountDocuments = async () => {
    try{
        const maxPages = await fetch(`http://localhost:8800/`)
        const response = await maxPages.json()
        return response.documentsLength
    } catch(err){
        toastError("Unable to read, error in the server")
    }
}

export const listAllPatients = async (page: number) => {
    try {
        getCountDocuments()
        const dataFromServer = await fetch(`http://localhost:8800/patients?page=${page}`)
        return await dataFromServer.json()
    } catch (err) {
        toastError("Unable to list, error in the server")
    }
}

export const readPatient = async (id?: string) => {
    try {
        const dataFromServer = await fetch(`http://localhost:8800/${id}`)
        return await dataFromServer.json()
    } catch (err) {
        toastError("Unable to read, error in the server")
    }
}

export const searchPatient = async (searchText?: string) => {
    try {
        if(searchText){
            const dataFromServer = await fetch(`http://localhost:8800/query?search=${searchText}`)
            return await dataFromServer.json()
        }
        return await listAllPatients(1)
    } catch (err) {
        toastError("Unable to read, error in the server")
    }
}

export const createPatient = async (patient: patientType) => {
    try {
        const response = await fetch("http://localhost:8800", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(patient)
        })
        if (response.status == 400) {
            toastError("Unable to create, email already exists")
            return false
        }
        toastSucess("Patient created")
        return true
    } catch (err) {
        toastError("Unable to create, error in the server")
        return false
    }
}

export const updatePatient = async (patient: patientType, id?: string) => {
    try {
        const response = await fetch(`http://localhost:8800/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(patient)
        })
        if (response.status == 400) {
            toastError("Unable to update, email already exists")
            return false
        }
        toastSucess("Patient edited")
        return true
    } catch (err) {
        toastError("Unable to update, error in the server")
        return false
    }
}

export const deletePatient = async (id?: string) => {
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