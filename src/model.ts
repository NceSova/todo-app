import {v4 as uuidv4} from "uuid";

export class Note {
  [index: string]: string;
  uuid = uuidv4();
  title = "My Reminder";
  description = "This is a blank note";
  priority = "low";
  constructor(title: string, description: string, priority: string) {
    this.title = title;
    this.description = description;
    this.priority = priority;
  }
}

export default class Model {
  _list: Note[] = Array<Note>();
  constructor() {}

  addNote(title: string, description: string, priority: string) {
    this._list.push(new Note(title, description, priority));
  }

  getNotes() {
    return this._list;
  }

  getNotesJson() {
    return JSON.stringify(this._list);
  }

  getNoteUuidByIndex(index: number) {
    const id = this._list[index].uuid;
    console.log(id);
    return id;
  }

  updateNoteByUuid(uuid: string, field: string, data: string) {
    const index = this._list.findIndex((item) => item.uuid === uuid);
    console.log(index);
    if (index === -1) {
      return;
    } else {
      const note: Note = this._list[index];
      note[field] = data;
    }
  }
}
