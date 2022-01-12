RetrieveTime = () => {
    SetNotes();
    let Time = new Date().toLocaleTimeString();
    document.getElementById("CurrentTime").innerHTML = Time;
}

SetNotes = () => {
    document.getElementById("SavedNotes").innerHTML = "";
    let ParsedHTML = JSON.parse(window.localStorage.getItem("ReaderList")).html;
    ParsedHTML.forEach(element => {
        let NewItem = document.createElement("li");
        let NewText = document.createElement("textarea");
        NewText.setAttribute("readonly", "");
        NewText.value = element;
        NewItem.appendChild(NewText);
        document.getElementById("SavedNotes").appendChild(NewItem);
    });
};

BackButton = () => {
    window.location.href = "../HTML/index.html";
}