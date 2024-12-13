import Event from "./Event.js";
import InputView from "./InputView.js";
import Menu from "./Menu.js";
import Price from "./Price.js";

class App {
  async run() {
    const date = await InputView.readDate();
    const menuJson = await Menu.menuValidate();
    const total = Price.calculateTotal(menuJson);
    console.log(total);
    const eventInfo = Event.setEventInfo(date, total);
    console.log(eventInfo);
  }
}

export default App;
