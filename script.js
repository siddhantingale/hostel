// Load Students into Table
function loadStudents() {
    const table = document.getElementById("studentTable");
    table.innerHTML = ""; // Clear the table before reloading

    // Get students from localStorage (or default to an empty array if not found)
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];

    // Update the table with the students
    storedStudents.forEach((student) => {
        const row = table.insertRow();
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.room}</td>
            <td>${student.status}</td>
            <td>
                <button onclick="editStudent(${student.id})">Edit</button>
                <button onclick="deleteStudent(${student.id})">Delete</button>
            </td>
        `;
    });
}

// Open Add Student Modal
function openAddModal() {
    document.getElementById("addStudentModal").style.display = "block";
}

// Close Add Student Modal
function closeAddModal() {
    document.getElementById("addStudentModal").style.display = "none";
}

// Open Edit Student Modal
function editStudent(id) {
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    const student = storedStudents.find(s => s.id === id);
    if (student) {
        document.getElementById("editStudentId").value = student.id;
        document.getElementById("editStudentName").value = student.name;
        document.getElementById("editStudentRoom").value = student.room;
        document.getElementById("editStudentStatus").value = student.status;
        document.getElementById("editStudentModal").style.display = "block";
    }
}

// Close Edit Student Modal
function closeEditModal() {
    document.getElementById("editStudentModal").style.display = "none";
}

// Handle Add Student Form Submission
document.getElementById("addStudentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("newStudentName").value;
    const room = document.getElementById("newStudentRoom").value;
    const status = document.getElementById("newStudentStatus").value;

    // Get existing students from localStorage
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];

    // Calculate the new ID
    const newId = storedStudents.length ? storedStudents[storedStudents.length - 1].id + 1 : 1;

    // Add the new student to the array
    storedStudents.push({ id: newId, name, room, status });

    // Save the updated students list to localStorage
    localStorage.setItem('students', JSON.stringify(storedStudents));

    // Reload students in the table and close the modal
    loadStudents();
    closeAddModal();
});

// Handle Edit Student Form Submission
document.getElementById("editStudentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const id = parseInt(document.getElementById("editStudentId").value);
    const name = document.getElementById("editStudentName").value;
    const room = document.getElementById("editStudentRoom").value;
    const status = document.getElementById("editStudentStatus").value;

    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    const studentIndex = storedStudents.findIndex(s => s.id === id);
    if (studentIndex !== -1) {
        storedStudents[studentIndex] = { id, name, room, status };
        localStorage.setItem('students', JSON.stringify(storedStudents));
    }

    loadStudents();
    closeEditModal();
});

// Delete Student
function deleteStudent(id) {
    let storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    const index = storedStudents.findIndex((s) => s.id === id);
    if (index > -1) {
        storedStudents.splice(index, 1);
        localStorage.setItem('students', JSON.stringify(storedStudents));
        loadStudents();
    }
}

// Initialize
window.onload = () => {
    loadStudents();
    document.getElementById('logoutBtn').addEventListener('click', () => alert('Logging out...'));
};
