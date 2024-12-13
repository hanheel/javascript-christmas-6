import { Console } from "@woowacourse/mission-utils";
import { MenuAssets } from "./assets/MenuAssets.js";

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
};

export default Validate;
