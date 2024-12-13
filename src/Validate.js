import { Console } from "@woowacourse/mission-utils";
import { drinks, MenuAssets } from "./assets/MenuAssets.js";

const Validate = {
  date(date) {
    if (date < 1 || date > 31) {
      Console.print("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.\n");
      return false;
    }
    return true;
  },
  menuForm(menu) {
    const condition = menu.match(/(.)-(\d)(,(.)-(\d))*/);
    if (!condition) {
      Console.print("[ERROR] 유효하지 않은 형식입니다. 다시 입력해 주세요.\n");
      return false;
    }
    return true;
  },
  menuExist(menuJson) {
    const menuAssetsNames = MenuAssets.map((i) => i.name);
    const exist =
      menuJson.filter((i) => !menuAssetsNames.includes(i.name)).length == 0;
    if (!exist) {
      Console.print("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.\n");
      return false;
    }
    return true;
  },
  menuCount(menuJson) {
    const isValidateCount = menuJson.filter((i) => i.count <= 0) == 0;
    if (!isValidateCount) {
      Console.print("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
      return false;
    }
    return true;
  },
  menuDrink(menuJson) {
    const notOnlyDrink =
      menuJson.filter((i) => drinks.includes(i.name)).length != menuJson.length;
    if (!notOnlyDrink) {
      Console.print("[ERROR] 음료만 주문하는 것은 불가능합니다.");
      return false;
    }
    return true;
  },
  menuTotal(menuJson) {
    const total = menuJson.reduce((total, i) => total + i.count, 0);
    if (total > 20) {
      Console.print("[ERROR] 20개까지만 주문할 수 있습니다.");
      return false;
    }
    return true;
  },
};

export default Validate;
