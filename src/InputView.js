import { Console } from "@woowacourse/mission-utils";
import Validate from "./Validate.js";
import Menu from "./Menu.js";

const InputView = {
  async readDate() {
    Console.print("안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.");
    let date = 0;
    while (true) {
      date = await Console.readLineAsync(
        "12월 중 식당 예상 방문 날짜는 언제인가요?\n"
      );
      if (Validate.date(date)) {
        break;
      }
    }
    return date;
  },
  async readMenu() {
    let menu;
    while (true) {
      menu = await Console.readLineAsync(
        "주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n"
      );
      const formValidate = Validate.menuForm(menu);
      if (formValidate) {
        break;
      }
    }
    return menu;
  },
};

export default InputView;
