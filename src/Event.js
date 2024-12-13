const eventInfo = {
  christmas: false,
  normal: false,
  addEvent: false,
};

const Event = {
  setEventInfo(date, total) {
    this.checkDate(date);
    this.checkAddEvent(total);
  },
  checkDate(date) {
    if (date <= 25) {
      eventInfo.christmas = true;
    }
    if (date <= 31) {
      eventInfo.normal = true;
    }
  },
  checkPrice(total) {
    if (total > 10000) {
      return true;
    }
    return false;
  },
  checkAddEvent(total) {
    if (total > 120000) {
      eventInfo.addEvent = true;
    }
  },
};

export default Event;
