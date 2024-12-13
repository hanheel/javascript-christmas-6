import InputView from "./InputView.js";
import Validate from "./Validate.js";

const Menu = {
  setData(input) {
    const menuJson = [];
    const data = input.split(",");
    const menu = data.map((i) => i.split("-"));
    menu.forEach((i) => {
      const menuItem = {};
      menuItem.name = i[0];
      menuItem.count = Number(i[1]);
      menuJson.push(menuItem);
    });
    return menuJson;
  },
  async menuValidate() {
    let menuJson;
    while (true) {
      const menu = await InputView.readMenu();
      const formValidate = Validate.menuForm(menu);
      if (!formValidate) continue;
      menuJson = Menu.setData(menu);
      const condition = this.purchaseValidate(menuJson);
      if (condition) break;
    }
    return menuJson;
  },
  //menu json 형태가 만들어진 후, 구매에 대한 유효성 검사를 실시
  purchaseValidate(menuJson) {
    const existMenu = Validate.menuExist(menuJson);
    const existCount = Validate.menuCount(menuJson);
    const validateTotal = Validate.menuTotal(menuJson);
    const notOnlyDrink = Validate.menuDrink(menuJson);
    const condition = existMenu && existCount && validateTotal && notOnlyDrink;
    return condition;
  },
};

export default Menu;
