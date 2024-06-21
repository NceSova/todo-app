import Model from "./model";
import View from "./view";

export default class Controller {
  document: Document;
  model: Model;
  view: View;
  constructor(document: Document) {
    this.model = new Model();
    this.view = new View(document, this.clickHandler.bind(this));
    this.document = document;

    //for debug
    this.model.addNote("Бяка1", "wf", "low");
    this.model.addNote("Бяка2", "sfd", "mid");
    this.model.addNote("Бяка3", "sfwed", "high");
  }
  render() {
    const notes = this.model.getNotes();
    this.view.renderNotes(notes);
  }
  clickHandler(event: Event) {
    const target = event.target as Element;
    const parentUuid = target.parentElement.id;
    console.log(parentUuid);
    console.log(this);
    console.log(this.model);
    this.model.deleteNote(parentUuid);
    this.render();
  }
}
