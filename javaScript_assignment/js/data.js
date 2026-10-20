const users = [
    { name: "Ahmed Ali", email: "ahmed@example.com", age: 22 },
    { name: "Mona Hassan", email: "mona@example.com", age: 20 },
    { name: "Omar Mohamed", email: "omar@example.com", age: 24 },
    { name: "Sara Ibrahim", email: "sara@example.com", age: 19 },
    { name: "Youssef Khaled", email: "youssef@example.com", age: 21 }
];

const tableBody = document.getElementById("usersTableBody");
const searchInput = document.getElementById("searchInput");
const sortNameButton = document.getElementById("sortNameButton");
const sortAgeButton = document.getElementById("sortAgeButton");
const emptyMessage = document.getElementById("emptyMessage");

let displayedUsers = [...users];

function renderTable(data) {
    tableBody.textContent = "";

    if (data.length === 0) {
        emptyMessage.textContent = "No users found.";
        return;
    }

    emptyMessage.textContent = "";

    data.forEach(function(user) {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = user.name;

        const emailCell = document.createElement("td");
        emailCell.textContent = user.email;

        const ageCell = document.createElement("td");
        ageCell.textContent = user.age;

        row.appendChild(nameCell);
        row.appendChild(emailCell);
        row.appendChild(ageCell);

        tableBody.appendChild(row);
    });
}

function filterUsers() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    displayedUsers = users.filter(function(user) {
        return user.name.toLowerCase().includes(searchTerm) ||
               user.email.toLowerCase().includes(searchTerm);
    });

    renderTable(displayedUsers);
}

searchInput.addEventListener("input", filterUsers);

sortNameButton.addEventListener("click", function() {
    displayedUsers.sort(function(a, b) {
        return a.name.localeCompare(b.name);
    });

    renderTable(displayedUsers);
});

sortAgeButton.addEventListener("click", function() {
    displayedUsers.sort(function(a, b) {
        return a.age - b.age;
    });

    renderTable(displayedUsers);
});

renderTable(displayedUsers);