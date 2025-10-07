/*const getInsights = (req, res) => {
  const insights = [
    { title: "🎉 Great Progress!", description: "Your activity level has increased by 5% this week.", color: "green" },
    { title: "💤 Sleep Quality", description: "Your sleep duration is improving. Aim for 8 hours consistently.", color: "blue" },
    { title: "❤️ Heart Health", description: "Your heart rate is within normal range.", color: "orange" },
    { title: "🎯 Goals", description: "You're on track to meet your weekly step goal.", color: "purple" },
  ];
  res.json({ success: true, data: insights });
};
module.exports = { getInsights };
*/
const { analytics } = require("../../dummy");

exports.getInsights = (req, res) => {
  res.json({ success: true, data: analytics.insights });
};
