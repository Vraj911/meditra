const { analytics } = require("../dummy");
exports.getActivityData = (req, res) => {
  res.json({ success: true, data: analytics.activityData });
};
