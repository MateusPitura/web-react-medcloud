const express = require("express")
const cors = require("cors")
const app = express()

const admin = require("firebase-admin")
const credentials = require("../../key.json")

admin.initializeApp({
    credential: admin.credential.cert(credentials)
})

app.use(express.json())

app.use(cors())

app.unsubscribe(express.urlencoded({ extended: true }))

const db = admin.firestore()

app.post("/", async (req, res) => {
    try {
        const email = req.body.email;
        const snapshot = await db.collection('patients').where("email", "==", email).get()
        if (!snapshot.empty) {
            res.status(400).send("Email already exists")
            return
        }

        const patientJson = {
            name: req.body.name,
            birthdate: req.body.birthdate,
            email: req.body.email,
            postalCode: req.body.postalCode,
            street: req.body.street,
            number: req.body.number,
            neighborhood: req.body.neighborhood,
            city: req.body.city,
            state: req.body.state,
        }
        const response = db.collection("patients").add(patientJson);
        res.send(response)
    } catch (error) {
        res.send(error)
    }
})

// app.get("/", async (req, res) => {
//     try {
//         const patientsRef = db.collection("patients")
//         const response = await patientsRef.get();
//         let responseArr = [];
//         response.forEach(doc => {
//             responseArr.push({
//                 id: doc.id,
//                 ...doc.data()
//             })
//         })
//         res.send(responseArr)
//     } catch (error) {
//         res.send(error)
//     }
// })

const elementsPerPage = 5

app.get("/", async (req, res) => {
    try {
        const snapshot = await db.collection("patients").get()
        const documentsLength = Math.ceil(snapshot.size/elementsPerPage)
        
        const json = { documentsLength }

        res.send(json)
    } catch (error) {
        res.send(error)
    }
})

app.get("/patients", async (req, res) => {
    try {
        const page = req.query.page;

        const startAfter = (page - 1) * elementsPerPage

        const query = db.collection('patients').orderBy('name').limit(elementsPerPage).offset(startAfter)
        const response = await query.get()

        let responseArr = [];
        response.forEach(doc => {
            responseArr.push({
                id: doc.id,
                ...doc.data()
            })
        })

        res.send(responseArr)
    } catch (error) {
        res.send(error)
    }
})

app.get("/query", async (req, res) => {
    try {
        const search = req.query.search;
        const query = db.collection('patients').where('name', '>=', search).where('name', '<=', search + '\uf8ff')
        const response = await query.get()

        let responseArr = [];
        response.forEach(doc => {
            responseArr.push({
                id: doc.id,
                ...doc.data()
            })
        })
        res.send(responseArr)
    } catch (error) {
        res.send(error)
    }
})

app.get("/:id", async (req, res) => {
    try {
        const patientRef = db.collection("patients").doc(req.params.id)
        const response = await patientRef.get();
        res.send(response.data())
    } catch (error) {
        res.send(error)
    }
})

app.put("/:id", async (req, res) => {
    try {
        const patientEmailRef = await db.collection("patients").doc(req.params.id).get()
        const email = req.body.email;

        const patientEmailRefString = await patientEmailRef.data().email.toString()
        const emailString = await email.toString()

        if (patientEmailRefString != emailString) {
            const snapshot = await db.collection('patients').where("email", "==", email).get()
            if (!snapshot.empty) {
                res.status(400).send("Email already exists")
                return
            }
        }

        const name = req.body.name
        const birthdate = req.body.birthdate
        const postalCode = req.body.postalCode
        const street = req.body.street
        const number = req.body.number
        const neighborhood = req.body.neighborhood
        const city = req.body.city
        const state = req.body.state

        const patientRef = await db.collection("patients").doc(req.params.id).update({
            name,
            birthdate,
            email,
            postalCode,
            street,
            number,
            neighborhood,
            city,
            state,
        })

        res.send(patientRef)
    } catch (error) {
        res.send(error)
    }
})

app.delete("/:id", async (req, res) => {
    try {
        const response = await db.collection("patients").doc(req.params.id).delete()
        res.send(response)
    } catch (error) {
        res.send(error)
    }
})

const PORT = 8800
app.listen(PORT, () => {
    console.log("Server is running on PORT 8800")
})