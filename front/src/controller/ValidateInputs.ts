import { toastError } from "./ToastController.ts"

export const validateName = (name: string) => {
    const regex = /^[a-zA-Z]+(?:['\- ][a-zA-Z]+)*$/
    if(regex.test(name)){
        return true
    }
    toastError("Invalid name")
    return false
}

export const validateBirthdate = (birthdate: string) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/
    if(regex.test(birthdate)){
        return true
    }
    toastError("Invalid birthdate")
    return false
}

export const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(regex.test(email)){
        return true
    }
    toastError("Invalid email")
    return false
}

export const validatePostalCode = (postalCode: string) => {
    const regex = /^[0-9]{8}$/
    if(regex.test(postalCode)){
        return true
    }
    return false
}

export const validateNumber = (number: string) => {
    if(number){
        return true
    }
    toastError("Invalid number")
    return false
}