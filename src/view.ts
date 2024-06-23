import {Note} from "./model";

export default class View {
  document: Document;
  dblClickEventCallback: Function;
  setChangeEventCallback: Function;
  constructor(
    document: Document,
    dblClickEventCallback: Function,
    changeEventCallback: Function
  ) {
    this.document = document;
    this.dblClickEventCallback = dblClickEventCallback;
    this.setChangeEventCallback = changeEventCallback;
  }
  renderNotes(notes: Note[]) {
    const grid = this.document.querySelector(".main-grid");
    grid.innerHTML = "";
    notes.forEach((note) => {
      console.log("note created");
      grid.appendChild(this.createNoteDiv(note));
    });
  }

  createNoteDiv(note: Note) {
    const noteDiv = this.document.createElement("div");
    noteDiv.id = note.uuid;
    noteDiv.classList.add("note-container");

    const title = this.document.createElement("input");
    title.className = "title";
    title.value = note.title;

    const description = this.document.createElement("textarea");
    description.className = "description";
    description.value = note.description;

    const priority = this.document.createElement("div");
    priority.className = "priority";
    noteDiv.classList.add(note.priority);
    priority.textContent = "Приоритет: " + note.priority;

    noteDiv.appendChild(title);
    noteDiv.appendChild(description);
    noteDiv.appendChild(priority);
    noteDiv.ondblclick = (event) => {
      this.dblClickEventCallback(event);
    };
    this.setChangeEventCallback(noteDiv);
    return noteDiv;
  }
}
