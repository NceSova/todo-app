import Model from "./model";
import View from "./view";

export default class Controller {
  document: Document;
  model: Model;
  view: View;
  constructor(document: Document) {
    this.model = new Model();
    this.view = new View(
      document,
      this.noteDblClickHandler.bind(this),
      this.setNoteUpdateHandler.bind(this)
    );
    this.document = document;

    //for debug
    this.model.addNote("Бяка1", "wf", "low");
    this.model.addNote("Бяка2", "sfd", "mid");
    this.model.addNote("Бяка3", "sfwed", "high");
  }
  render() {
    const notes = this.model.getNotes();
    console.log(this.model.getNotesJson());
    this.view.renderNotes(notes);
  }
  noteDblClickHandler(event: Event) {
    const target = event.target as Element;
    const parentUuid = target.parentElement.id;
    console.log(parentUuid);
    console.log(this);
    console.log(this.model);
    this.model.deleteNote(parentUuid);
    this.render();
  }
  setNoteUpdateHandler(element: HTMLInputElement) {
    element.addEventListener("change", (e) => {
      const target = e.target as HTMLInputElement;
      const parentUuid = target.parentElement.id;
      this.model.updateNoteByUuid(parentUuid, target.className, target.value);
      this.render();
    });
  }
}
