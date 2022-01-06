function SaveTime() {
    let Time = new Date().toLocaleTimeString();
    document.getElementById("CurrentTime").innerHTML = Time;
}

function NewNoteClick() {
    let NewNote = document.createElement("li");
    let NoteArea = document.createElement("input");
    let RemoveButton = document.createElement("button");
    RemoveButton.textContent = "Remove";
    RemoveButton.onclick = RemoveNote;
    NewNote.appendChild(NoteArea);
    NewNote.appendChild(RemoveButton);
    document.getElementById("CurrentNotes").appendChild(NewNote);
}

function RemoveNote() {
    console.log("removed");
}