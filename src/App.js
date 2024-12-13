import Event from "./Event.js";
import InputView from "./InputView.js";

class App {
  async run() {
    const date = await InputView.readDate();
    const eventInfo = Event.checkDate(date);
  }
}

export default App;
