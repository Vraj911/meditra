/*exports.getAllergies = async (req, res) => {
  try {
    const allergies = ["Peanuts", "Pollen", "Shellfish"];
    res.status(200).json({ success: true, data: allergies });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching allergies" });
  }
};
*/
const { patient } = require("../dummy");

exports.getAllergies = (req, res) => {
  res.status(200).json({ success: true, data: patient.allergies });
};
