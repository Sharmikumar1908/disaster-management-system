function reportDisaster() {

    let disaster = document.getElementById("disaster").value;
    let location = document.getElementById("location").value;
    let result = document.getElementById("result");

    if (disaster === "" || location === "") {
        result.innerHTML = "Please enter all details.";
        result.style.color = "red";
    }
    else {
        result.innerHTML =
            "Disaster reported successfully!";
        result.style.color = "green";
    }
}