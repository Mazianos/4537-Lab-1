SaveTime = () => {
    SaveNotes();
    let Time = new Date().toLocaleTimeString();
    document.getElementById("CurrentTime").innerHTML = Time;
}

SaveNotes = () => {
    let Notes = document.getElementById("CurrentNotes");
    Notes = Array.from(Notes.children);
    for (let i = 0; i < Notes.length; i++) {
        window.localStorage.setItem(i, Notes[i].firstChild.value);
    }
}

NewNoteClick = () => {
    let NewNote = document.createElement("li");
    let NoteArea = document.createElement("textarea");
    let RemoveButton = document.createElement("button");
    RemoveButton.textContent = "Remove";
    RemoveButton.onclick = RemoveNote;
    NewNote.appendChild(NoteArea);
    NewNote.appendChild(RemoveButton);
    document.getElementById("CurrentNotes").appendChild(NewNote);
}

RemoveNote = () => {
    let Notes = document.getElementById("CurrentNotes");
    Notes = Array.from(Notes.children);
    window.localStorage.removeItem(Notes.length - 1);
    this.parentElement.remove();
    SaveNotes();
}

BackButton = () => {
    window.location.href = "/HTML/index.html";
}