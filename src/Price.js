import { MenuAssets } from "./assets/MenuAssets.js";

const Price = {
  calculateDiscount() {},
  calculateTotal(menuJson) {
    let total = 0;
    menuJson.forEach((prod) => {
      const menuInfo = MenuAssets.find((i) => i.name == prod.name);
      const price = menuInfo.price;
      const itemTotal = price * prod.count;
      total += itemTotal;
    });
    return total;
  },
  calculateDiscountTotal() {},
};

export default Price;
