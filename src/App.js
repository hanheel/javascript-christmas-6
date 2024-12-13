import Event from "./Event.js";
import InputView from "./InputView.js";
import Menu from "./Menu.js";
import Validate from "./Validate.js";

class App {
  async run() {
    const date = await InputView.readDate();
    const eventInfo = Event.checkDate(date);
    const menu = await InputView.readMenu();
    const menuJson = Menu.setData(menu);
    this.menuValidate(menuJson);
  }

  async menuValidate(menuJson) {
    const existMenu = Validate.menuExist(menuJson);
    const condition = existMenu;
    while (true) {
      await InputView.readMenu();
      if (condition) {
        break;
      }
    }
  }
}

export default App;
