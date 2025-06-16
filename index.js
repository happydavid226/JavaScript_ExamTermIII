/*
Names : Happy David
class : year 1 A
email : happydavid226@gmail.com
*/

const express = require('express')
const app = express()

let  students = []


function Student(name, grade){
    this.name = name
    this.grade = grade

    let getDetails = () => {
        let details = {
            name : this.name,
            grade : this.grade
        };
        return details
    }
}
app.use(express.json())

app.post('/students', (req, res) => {
    let student = new Student(req.body.name, req.body.grade)
    students.push(student)
    res.send(student)
})

app.get('/students', (req, res) => {
    res.send(students)
})

app.listen(3000, () => {
    console.log ("app running on port 3000")
})

// email 
//mwizstar@gmail.com




