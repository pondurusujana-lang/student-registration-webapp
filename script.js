
let students = JSON.parse(localStorage.getItem("students")) || [];

displayStudents();

function addStudent() {

    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;

    if (id === "" || name === "" || email === "" || course === "") {
        alert("Please fill all fields");
        return;
    }

    students.push({
        id: id,
        name: name,
        email: email,
        course: course
    });

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();
    clearForm();
}

function displayStudents() {

    let table = document.getElementById("studentTable");

    table.innerHTML = "";

    students.forEach((student, index) => {

        table.innerHTML += `
        <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.course}</td>

            <td>
                <button onclick="editStudent(${index})">Edit</button>

                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        </tr>
        `;
    });

}

function deleteStudent(index) {

    if (confirm("Delete this student?")) {

        students.splice(index, 1);

        localStorage.setItem("students", JSON.stringify(students));

        displayStudents();
    }

}

function editStudent(index) {

    document.getElementById("id").value = students[index].id;
    document.getElementById("name").value = students[index].name;
    document.getElementById("email").value = students[index].email;
    document.getElementById("course").value = students[index].course;

    students.splice(index, 1);

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();

}

function clearForm() {

    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("course").value = "";

          }
