RetrieveTime = () => {
    SetNotes();
    let Time = new Date().toLocaleTimeString();
    document.getElementById("CurrentTime").innerHTML = Time;
}

SetNotes = () => {
    document.getElementById("SavedNotes").innerHTML = "";
    let keys = Array.from(Object.keys(localStorage));

    if (keys == null) {
        return
    }

    keys.sort();
    for (let i = 0; i < keys.length; i++) {
        let NewNote = document.createElement("li");
        let NoteArea = document.createElement("p");
        NoteArea.innerText = window.localStorage.getItem(keys[i]);
        NewNote.append(NoteArea);
        document.getElementById("SavedNotes").appendChild(NewNote);
    }
};

BackButton = () => {
    window.location.href = "/HTML/index.html";
}