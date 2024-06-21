import Model from "./model";
import View from "./view";

export default class Controller {
  model: Model;
  view: View;
  constructor(model: Model, view: View) {
    (this.model = model), (this.view = view);
  }
  render() {
    const notes = this.model.getNotes();
    this.view.renderNotes(notes);
  }
}
