import {v4 as uuidv4} from "uuid";

export class Note {
  uuid = uuidv4();
  title = "My Reminder";
  description = "This is a blank note";
  priority = "low";
  constructor(title, description, priority) {
    this.title = title;
    this.description = description;
    this.priority = priority;
  }
}

export default class Shelf {
  #list = Array();
  constructor() {}

  addNote(title, description, priority) {
    this.#list.push(new Note(title, description, priority));
  }

  getNotes() {
    return this.#list;
  }

  getNotesJson() {
    return JSON.stringify(this.#list);
  }

  getNoteUuidByIndex(index) {
    const id = this.#list[index].uuid;
    console.log(id);
    return id;
  }

  updateNoteByUuid(uuid, field, data) {
    const index = this.#list.findIndex((item) => item.uuid === uuid);
    console.log(index);
    if (index === -1) {
      return;
    } else {
      const note = this.#list[index];
      note[field] = data;
    }
  }
}
