import InputView from "./InputView.js";

class App {
  async run() {
    const date = await InputView.readDate();
  }
}

export default App;
