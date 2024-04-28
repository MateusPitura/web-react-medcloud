export const validateName = (name: string) => {
    const regex = /^[a-zA-Z]+(?:['\- ][a-zA-Z]+)*$/
    if(regex.test(name)){
        return true
    }
    return false
}

export const validateBirthdate = (birthdate: string) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/
    if(regex.test(birthdate)){
        return true
    }
    return false
}

export const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(regex.test(email)){
        return true
    }
    return false
}

export const validateAddress = (address: string) => {
    const regex = /^[0-9]{8}$/
    if(regex.test(address)){
        return true
    }
    return false
}