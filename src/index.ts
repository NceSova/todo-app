import "./index.css";

import Shelf from "./model";
import View from "./view";

const shelf = new Shelf();
shelf.addNote("Бяка", "sfd", "low");
shelf.addNote("Бяка", "sfd", "low");
shelf.addNote("Бяка", "sfd", "low");
const id = shelf.getNoteUuidByIndex(0);
shelf.updateNoteByUuid(id, "title", "sadfdsaf");
console.log(shelf.getNotes());
console.log(shelf.getNotesJson());
const ui = new View(document);
ui.renderNotes(shelf.getNotes());
