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
};

export default Menu;
