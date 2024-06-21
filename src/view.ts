import {Note} from "./model";

export default class View {
  document: Document;
  constructor(document: Document) {
    this.document = document;
  }
  renderNotes(notes: Note[]) {
    const grid = this.document.querySelector(".main-grid");
    notes.forEach((note) => {
      console.log("note created");
      grid.appendChild(this.createNoteDiv(note));
    });
  }
  createNoteDiv(note: Note) {
    const noteDiv = this.document.createElement("div");
    noteDiv.id = note.uuid;
    noteDiv.classList.add("note-container");

    const title = this.document.createElement("div");
    title.className = "note-title";
    title.textContent = note.title;

    const description = this.document.createElement("div");
    description.className = "note-description";
    description.textContent = note.description;

    const priority = this.document.createElement("div");
    priority.className = "note-priority";
    priority.textContent = "Приоритет: " + note.priority;

    noteDiv.appendChild(title);
    noteDiv.appendChild(description);
    noteDiv.appendChild(priority);
    return noteDiv;
  }
}
