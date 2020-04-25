import colors from "../theme/colors";

export const documents = {
  driver: {
    privacy: "http://fitlimo.com/driver/privacy",
    terms: "http://fitlimo.com/driver/terms",
    claims: "http://fitlimo.com/driver/claims",
  },
  customer: {
    privacy: "http://fitlimo.com/privacy",
    terms: "http://fitlimo.com/terms",
    claims: "http://fitlimo.com/claims",
  },
};

export const statusColors = {
  draft: colors.gray,
  accepted: colors.green,
  arrived: colors.green,
  started: colors.green,
  ended: colors.green,
  driver_not_found: colors.red,
  searching_driver: colors.blue,
  cancelled_by_customer: colors.red,
  cancelled_by_driver: colors.red,
  missed: colors.red,
  rejected: colors.red,
  ride_cancelled: colors.red,
};
