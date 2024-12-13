import Event from "./Event.js";
import InputView from "./InputView.js";
import Menu from "./Menu.js";
import Validate from "./Validate.js";

class App {
  async run() {
    const date = await InputView.readDate();
    const eventInfo = Event.checkDate(date);
    this.menuValidate();
  }

  async menuValidate() {
    while (true) {
      const menu = await InputView.readMenu();
      const formValidate = Validate.menuForm(menu);
      if (!formValidate) continue;
      const menuJson = Menu.setData(menu);

      const existMenu = Validate.menuExist(menuJson);
      const existCount = Validate.menuCount(menuJson);
      const condition = existMenu && existCount;
      if (condition) break;
    }
  }
}

export default App;
