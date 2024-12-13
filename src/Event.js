const eventInfo = {
  christmas: false,
  normal: false,
};

const Event = {
  checkDate(date) {
    if (date <= 25) {
      eventInfo.christmas = true;
    }
    if (date <= 31) {
      eventInfo.normal = true;
    }
    return eventInfo;
  },
  checkPrice(price) {
    if (price > 10000) {
    }
  },
};

export default Event;
