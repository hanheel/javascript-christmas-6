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
    while (true) {
      const menu = await InputView.readMenu();
      const formValidate = Validate.menuForm(menu);
      if (!formValidate) continue;
      const menuJson = Menu.setData(menu);
      this.validate(menuJson);
      if (condition) break;
    }
  },
  async purchaseValidate(menuJson) {
    const existMenu = Validate.menuExist(menuJson);
    const existCount = Validate.menuCount(menuJson);
    const validateTotal = Validate.menuTotal(menuJson);
    const notOnlyDrink = Validate.menuDrink(menuJson);
    const condition = existMenu && existCount && validateTotal && notOnlyDrink;
    return condition;
  },
};

export default Menu;
