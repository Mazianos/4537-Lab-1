function RetrieveTime() {
    let Time = new Date().toLocaleTimeString();
    document.getElementById("CurrentTime").innerHTML = Time;
}