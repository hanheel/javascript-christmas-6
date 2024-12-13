import InputView from "./InputView.js";

class App {
  async run() {
    await InputView.readDate();
  }
}

export default App;
