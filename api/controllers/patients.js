import { db } from "../db.js";

export const getPatients = (_, res) => {
    const q = "SELECT * FROM patients"

    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.status(200).json(data)
    })
}

export const addPatient = (req, res) => {
    const q = 
    "INSERT INTO patients(`name`, `birthdate`, `email`, `postalCode`, `street`, `number`, `neighborhood`, `city`, `state`) VALUES(?)"

    const values = [
        req.body.name,
        req.body.birthdate,
        req.body.email,
        req.body.postalCode,
        req.body.street,
        req.body.number,
        req.body.neighborhood,
        req.body.city,
        req.body.state,
    ]

    db.query(q, [values], (err) => {
        if(err) {
            return res.json(err)
        }

        return res.status(200).json("Usuário criado com sucesso")
    })
}

export const updatePatient = (req, res) => {
    const q = 
    "UPDATE patients SET `name` = ?, `birthdate` = ?, `email` = ?, `postalCode` = ?, `street` = ?, `number` = ?, `neighborhood` = ?, `city` = ?, `state` = ? WHERE `id` = ?";

    const values = [
        req.body.name,
        req.body.birthdate,
        req.body.email,
        req.body.postalCode,
        req.body.street,
        req.body.number,
        req.body.neighborhood,
        req.body.city,
        req.body.state,
    ]

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso.")
    })
}

export const deletePatient = (req, res) => {
    const q = 
    "DELETE FROM patients WHERE `id` = ?"

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err)

        return res.status(200).json("Usuário deletado com sucesso")
    })
}