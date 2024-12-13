import { Console } from "@woowacourse/mission-utils";
import Validate from "./Validate.js";

const InputView = {
  async readDate() {
    Console.print("안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.");
    let isValidate = false;
    while (!isValidate) {
      const date = await Console.readLineAsync(
        "12월 중 식당 예상 방문 날짜는 언제인가요?"
      );
      isValidate = Validate.date(date);
    }
  },
};

export default InputView;
