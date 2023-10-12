function sendName() {
  const name = document.getElementById("nameInput").value;
  fetch("/api/greeting", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  })
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("greeting").innerText = data;
    });
}
