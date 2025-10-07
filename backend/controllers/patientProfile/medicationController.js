/*exports.getMedications = async (req, res) => {
  try {
    const medications = [
      { name: "Metformin", dosage: "500mg", frequency: "Twice daily" },
      { name: "Vitamin D3", dosage: "1000 IU", frequency: "Once daily" },
      { name: "Omega-3", dosage: "1000mg", frequency: "Once daily" }
    ];
    res.status(200).json({ success: true, data: medications });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching medications" });
  }
};
*/
const { patient } = require("../../dummy");

exports.getMedications = (req, res) => {
  try {
    res.status(200).json({ success: true, data: patient.medications });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching medications" });
  }
};
