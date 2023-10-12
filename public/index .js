document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;

    fetch("/backend-route", {
        method: "POST",
        headers: {
            "Content-Type": "application",
        },
        body: JSON.stringify({ name }),
    })
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("name").textContent = data;
        });
});
