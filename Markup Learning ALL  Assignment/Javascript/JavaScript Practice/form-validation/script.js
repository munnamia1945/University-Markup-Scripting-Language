document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message");

    if (name === "" || email === "") {
        message.textContent = "Please fill in all fields.";
        return;
    }

    message.textContent = "Form submitted successfully.";
});
