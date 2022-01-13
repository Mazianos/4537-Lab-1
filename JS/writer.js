SaveTime = () => {
    SaveNotes();
    let Time = new Date().toLocaleTimeString();
    document.getElementById("CurrentTime").innerHTML = Time;
}

SaveNotes = () => {
    let CurrentNotes = Array.from(document.getElementsByClassName("Note"));
    let ToSave = []
    CurrentNotes.forEach(element => {
        ToSave.push(element.value);
    });
    ToSave = { "html" : ToSave };
    window.localStorage.setItem("ReaderList", JSON.stringify(ToSave));
}

NewNoteClick = () => {
    let NewNote = document.createElement("li");
    let NoteArea = document.createElement("textarea");
    let RemoveButton = document.createElement("button");
    RemoveButton.textContent = "Remove";
    RemoveButton.onclick = RemoveNote;
    NoteArea.className = "Note";
    NewNote.appendChild(NoteArea);
    NewNote.appendChild(RemoveButton);
    document.getElementById("CurrentNotes").appendChild(NewNote);
}

RemoveNote = (elem) => {
    let Notes = document.getElementById("CurrentNotes");
    Notes = Array.from(Notes.children);
    elem.target.parentNode.remove();
    SaveNotes();
}

BackButton = () => {
    window.location.href = "../HTML/index.html";
}

SetNotes = () => {
    let ParsedHTML = JSON.parse(window.localStorage.getItem("ReaderList"));
    if (ParsedHTML !== null) {
        ParsedHTML = ParsedHTML.html;
        ParsedHTML.forEach(element => {
            let NewItem = document.createElement("li");
            let NewText = document.createElement("textarea");
            NewText.value = element;
            NewText.className = "Note"
            NewItem.appendChild(NewText);
            document.getElementById("CurrentNotes").appendChild(NewItem);
        });
    }
    SaveTime();
};