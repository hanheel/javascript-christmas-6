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
};

export default Event;
