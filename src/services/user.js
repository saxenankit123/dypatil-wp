export function create(data) {
    validateName(data.name)
    validateIdCard(data)
}


function validateName(name) {

    if (name.length > 15) {
        let err = new Error("User cannot be created as name is more than 15")
        err.statusCode = 400
        throw err
    }
}

function validateIdCard(data) {
    if (data.profession != undefined && data.profession == "Student" && data.Id == undefined) {
        let err = new Error("User cannot be created as profession is student and ID is missing")
        err.statusCode = 400
        throw err
    }
}