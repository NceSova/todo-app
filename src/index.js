import Shelf from "./model";

const shelf = new Shelf();
shelf.addNote("Бяка", "sfd", "yesterday", "low");
shelf.addNote("Бяка", "sfd", "yesterday", "low");
shelf.addNote("Бяка", "sfd", "yesterday", "low");
const id = shelf.getNoteUuidByIndex(0);
shelf.updateNoteByUuid(id, "title", "sadfdsaf");
console.log(shelf.getNotes());
