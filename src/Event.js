const event = {
  christmas: false,
  normal: false,
};

const CheckEvent = {
  date(date) {
    if (date <= 25) {
      event.christmas = true;
    }
    if (date <= 31) {
      event.normal = true;
    }
  },
};

export default Discount;
