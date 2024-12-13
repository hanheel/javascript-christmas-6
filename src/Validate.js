import { Console } from "@woowacourse/mission-utils";

const Validate = {
  date(date) {
    if (date < 1 || date > 31) {
      Console.print("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
      return false;
    }
    return true;
  },
};

export default Validate;
