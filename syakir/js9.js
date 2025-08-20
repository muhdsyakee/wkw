document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.querySelector("button[type='submit']");
    const clearButton = document.getElementById("clearButton");

    submitButton.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent form submission

        // Collect required fields
        const name = document.getElementById("merchandiseForm").value.trim();
        const desc = document.getElementById("desc").value.trim();
        const gender = document.getElementById("gender").value;
        const size = document.getElementById("size").value;
        const weight = document.getElementById("weight").value.trim();
        const age = document.getElementById("age").value.trim();
        const height = document.getElementById("height").value.trim();

        const merchType = document.querySelector('input[name="merchType"]:checked');

        // Check if any field is empty or unselected
        if (
            name === "" || desc === "" || gender === "selectGender" || size === "selectSize" ||
            weight === "" || age === "" || height === "" || !merchType
        ) {
            alert("Please fill in all required fields before submitting the form.");
        } else {
            alert("Form submitted successfully!"); // Or replace with actual submission logic
        }
    });

    clearButton.addEventListener("click", function () {
        document.querySelectorAll("input[type='text'], input[type='email']").forEach(input => input.value = "");
        document.getElementById("gender").value = "selectGender";
        document.getElementById("size").value = "selectSize";
        document.querySelectorAll("input[type='radio'], input[type='checkbox']").forEach(input => input.checked = false);
    });
});
