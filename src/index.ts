import "./index.css";

import Model from "./model";
import View from "./view";
import Controller from "./controller";

const shelf = new Model();
const ui = new View(document);

shelf.addNote("Бяка", "sfd", "low");
shelf.addNote("Бяка", "sfd", "low");
shelf.addNote("Бяка", "sfd", "low");
const id = shelf.getNoteUuidByIndex(0);
shelf.updateNoteByUuid(id, "title", "sadfdsaf");

const controller = new Controller(shelf, ui);
controller.render();
