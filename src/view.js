class view {
  constructor(document) {
    this.document = document;
  }
  renderAllNotes(...notes) {}
  createNoteDiv(note) {
    const noteDiv = this.document.createElement("div");
    noteDiv.id = "note-" + note.uuid;
    noteDiv.style.classList;
  }
}
