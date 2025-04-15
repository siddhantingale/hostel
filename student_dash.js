const form = document.getElementById("studentForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const gradeInput = document.getElementById("grade");
const tableBody = document.getElementById("studentTableBody");

let students = [];
let editIndex = null;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const age = ageInput.value;
  const grade = gradeInput.value;

  if (editIndex === null) {
    students.push({ name, age, grade });
  } else {
    students[editIndex] = { name, age, grade };
    editIndex = null;
  }

  form.reset();
  renderTable();
});

function renderTable() {
  tableBody.innerHTML = "";

  students.forEach((student, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.grade}</td>
      <td>
        <button class="edit" onclick="editStudent(${index})">Edit</button>
        <button class="delete" onclick="deleteStudent(${index})">Delete</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

function editStudent(index) {
  const student = students[index];
  nameInput.value = student.name;
  ageInput.value = student.age;
  gradeInput.value = student.grade;
  editIndex = index;
}

function deleteStudent(index) {
  students.splice(index, 1);
  renderTable();
}
