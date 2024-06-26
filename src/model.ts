import {v4 as uuid4} from "uuid";

export interface Note {
  [index: string]: string;
  uuid: string;
  title: string;
  description: string;
  priority: string;
}

export default class Model {
  _list: Note[] = Array<Note>();
  constructor() {
    if (JSON.parse(localStorage.getItem("notes")) === null) {
      localStorage.setItem("notes", this.getNotesJson());
    }
    const initialNotes = this.loadNotes();
    console.log(initialNotes);
    this._list = initialNotes;
  }

  addNote(title: string, description: string, priority: string) {
    const elem = {
      uuid: uuid4(),
      title: title,
      description: description,
      priority: priority,
    } as Note;
    this._list.push(elem);
    this.saveNotes();
  }

  saveNotes() {
    this._list.sort(function (a, b) {
      function priorityToNumber(priority: string) {
        switch (priority) {
          case "low":
            return 1;
            break;
          case "mid":
            return 2;
            break;
          case "high":
            return 3;
            break;
          default:
            return 0;
            break;
        }
      }
      return priorityToNumber(b.priority) - priorityToNumber(a.priority);
    });
    localStorage.setItem("notes", this.getNotesJson());
  }

  loadNotes() {
    const notes = JSON.parse(localStorage.getItem("notes"));
    const list = Array<Note>();
    console.log(notes);
    notes.forEach((elem: Object) => {
      list.push(elem as Note);
    });
    return list;
  }

  deleteNote(uuid: string) {
    const index = this._list.findIndex((item) => item.uuid === uuid);
    this._list.splice(index, 1);
    this.saveNotes();
  }

  getNotes() {
    return this.loadNotes();
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
    this.saveNotes();
  }
}
