// DUMMY DATA FOR MEDITRA

const analytics = {
  activityData: {
    distribution: [
      { name: "Walking", value: 45, color: "#4ade80" },
      { name: "Running", value: 25, color: "#22c55e" },
      { name: "Cycling", value: 20, color: "#16a34a" },
      { name: "Other", value: 10, color: "#15803d" },
    ],
    weekly: [
      { day: "Mon", steps: 8500, calories: 320, activeMinutes: 45 },
      { day: "Tue", steps: 12000, calories: 450, activeMinutes: 60 },
      { day: "Wed", steps: 9800, calories: 380, activeMinutes: 50 },
      { day: "Thu", steps: 15000, calories: 520, activeMinutes: 75 },
      { day: "Fri", steps: 11000, calories: 420, activeMinutes: 55 },
      { day: "Sat", steps: 18000, calories: 650, activeMinutes: 90 },
      { day: "Sun", steps: 12450, calories: 480, activeMinutes: 65 },
    ],
  },
  insights: [
    { title: "🎉 Great Progress!", description: "Your activity level has increased by 5% this week.", color: "green" },
    { title: "💤 Sleep Quality", description: "Your sleep duration is improving. Aim for 8 hours consistently.", color: "blue" },
    { title: "❤️ Heart Health", description: "Your heart rate is within normal range.", color: "orange" },
    { title: "🎯 Goals", description: "You're on track to meet your weekly step goal.", color: "purple" },
  ],
  sleep: [
    { date: "Mon", value: 7.2 },
    { date: "Tue", value: 7.8 },
    { date: "Wed", value: 6.9 },
    { date: "Thu", value: 8.1 },
    { date: "Fri", value: 7.5 },
    { date: "Sat", value: 8.3 },
    { date: "Sun", value: 7.5 },
  ],
  vitals: [
    { metric: "Blood Pressure", value: "120/80", unit: "mmHg", status: "normal", color: "#22c55e" },
    { metric: "Body Temperature", value: "98.6", unit: "°F", status: "normal", color: "#22c55e" },
    { metric: "Oxygen Saturation", value: "98", unit: "%", status: "normal", color: "#22c55e" },
    { metric: "Blood Glucose", value: "95", unit: "mg/dL", status: "normal", color: "#22c55e" },
  ],
  metrics: [
    { label: "Heart Rate", value: 72, unit: "BPM", change: -2, trend: "down", target: 70 },
    { label: "Sleep Duration", value: 7.5, unit: "hrs", change: 0.5, trend: "up", target: 8 },
    { label: "Activity Level", value: 85, unit: "%", change: 5, trend: "up", target: 80 },
    { label: "Steps", value: 12450, unit: "steps", change: 1200, trend: "up", target: 10000 },
  ],
  metricHistory: [
    { date: "Mon", value: 75 },
    { date: "Tue", value: 73 },
    { date: "Wed", value: 72 },
    { date: "Thu", value: 71 },
    { date: "Fri", value: 74 },
    { date: "Sat", value: 70 },
    { date: "Sun", value: 72 },
  ],
};

const appointments = {
  appointments: [
    {
      id: "1",
      date: "2025-10-15",
      time: "11:30 AM",
      doctorId: "1",
      type: "in-person",
      status: "confirmed",
      location: "Room 205, Cardiology Wing",
      notes: "Annual heart checkup",
    },
    {
      id: "2",
      date: "2025-10-20",
      time: "2:00 PM",
      doctorId: "2",
      type: "virtual",
      status: "pending",
      notes: "Skin consultation",
    },
    {
      id: "3",
      date: "2025-10-10",
      time: "10:00 AM",
      doctorId: "3",
      type: "in-person",
      status: "confirmed",
      location: "Room 101, Main Building",
    },
  ],
  doctors: [
    { id: "1", name: "Dr. Bhatt", specialty: "Cardiology", availableSlots: ["9:00 AM","10:00 AM","11:30 AM"], icon: "Heart" },
    { id: "2", name: "Dr. Riya", specialty: "Dermatology", availableSlots: ["2:00 PM","2:30 PM"], icon: "Eye" },
    { id: "3", name: "Dr. Nilesh", specialty: "General Practice", availableSlots: ["10:00 AM","10:30 AM"], icon: "Stethoscope" },
    { id: "4", name: "Dr. Ketan", specialty: "Neurology", availableSlots: ["1:00 PM","3:00 PM"], icon: "Brain" },
    { id: "5", name: "Dr. Sharma", specialty: "Orthopedics", availableSlots: ["4:00 PM","4:30 PM"], icon: "Bone" },
  ],
  notifications: [
    { id: "1", title: "Appointment Reminder", message: "Your appointment with Dr. Bhatt is tomorrow at 11:30 AM", type: "reminder", time: "2 hours ago", read: false, priority: "high" },
    { id: "2", title: "Test Results Available", message: "Your blood test results are now available", type: "result", time: "1 day ago", read: false, priority: "medium" },
    { id: "3", title: "Hydration Reminder", message: "Remember to drink water throughout the day", type: "alert", time: "3 hours ago", read: true, priority: "low" },
    { id: "4", title: "Appointment Confirmed", message: "Your appointment with Dr. Johnson has been confirmed", type: "appointment", time: "2 days ago", read: true, priority: "medium" },
  ],
};

const dashboard = {
  metrics: { heartRate: 76, bloodPressure: "118/79", bloodSugar: 95, stressLevel: 42, sleepQuality: 84, energyLevel: 78 },
  metricsHistory: [
    { date: "2025-09-28", value: 76 },
    { date: "2025-09-29", value: 86 },
    { date: "2025-09-30", value: 76 },
    { date: "2025-10-01", value: 76 },
    { date: "2025-10-02", value: 86 },
    { date: "2025-10-03", value: 84 },
    { date: "2025-10-04", value: 74 },
  ],
  todaysPlan: [
    { id: 1, task: "Morning Walk", status: "pending" },
    { id: 2, task: "Take Vitamin D", status: "completed" },
  ],
  reminders: [{ id: 1, type: "medication", message: "Take BP tablet at 9 AM" }],
  reports: [
    { id: 1, type: "Blood Test", date: "2025-09-30" },
    { id: 2, type: "X-Ray", date: "2025-09-25" },
  ],
};

const medication = {
  medications: [
    { id: "1", name: "Metformin", dosage: "500mg", frequency: "Twice daily", time: "8:00 AM", taken: true, category: "morning", instructions: "Take with breakfast" },
    { id: "2", name: "Metformin", dosage: "500mg", frequency: "Twice daily", time: "8:00 PM", taken: false, category: "evening", instructions: "Take with dinner" },
    { id: "3", name: "Vitamin D3", dosage: "1000 IU", frequency: "Once daily", time: "9:00 AM", taken: true, category: "morning", instructions: "Take with food" },
    { id: "4", name: "Omega-3", dosage: "1000mg", frequency: "Once daily", time: "2:00 PM", taken: false, category: "afternoon", instructions: "Take with lunch" },
    { id: "5", name: "Magnesium", dosage: "200mg", frequency: "Once daily", time: "10:00 PM", taken: false, category: "night", instructions: "Take before bed" },
  ],
  adherence: [
    { date: "Mon", taken: 4, total: 5, percentage: 80 },
    { date: "Tue", taken: 5, total: 5, percentage: 100 },
    { date: "Wed", taken: 3, total: 5, percentage: 60 },
    { date: "Thu", taken: 5, total: 5, percentage: 100 },
    { date: "Fri", taken: 4, total: 5, percentage: 80 },
    { date: "Sat", taken: 5, total: 5, percentage: 100 },
    { date: "Sun", taken: 2, total: 5, percentage: 40 },
  ],
  badges: [
    { id: "1", name: "Consistency Hero", description: "Take medications for 7 days straight", earned: false, progress: 5 },
    { id: "2", name: "Wellness Achiever", description: "Maintain 90% adherence for a month", earned: false, progress: 75 },
    { id: "3", name: "Perfect Week", description: "100% adherence for a week", earned: true, progress: 100 },
    { id: "4", name: "Health Guardian", description: "Never miss a critical medication", earned: false, progress: 85 },
  ],
};

const wellness = {
  breathingExercises: [
    { id: "1", name: "4-4-6 Breathing", description: "Calm breathing", inhaleTime: 4, holdTime: 4, exhaleTime: 6, cycles: 5 },
    { id: "2", name: "Box Breathing", description: "Military technique", inhaleTime: 4, holdTime: 4, exhaleTime: 4, cycles: 8 },
  ],
  meditations: [
    { id: "1", title: "Morning Mindfulness", duration: 10, description: "Start your day with awareness" },
    { id: "2", title: "Stress Relief", duration: 15, description: "Release tension and relax" },
  ],
  wellnessTips: [
    { id: "1", title: "Stay Hydrated", description: "Drink at least 8 glasses of water" },
    { id: "2", title: "Take Short Breaks", description: "Step away every 30 minutes" },
  ],
};

const patient = {
  allergies: ["Peanuts", "Pollen", "Shellfish"],
  healthEvents: [
    { id: "1", date: "2024-01-20", type: "appointment", title: "Annual Physical Exam", status: "completed" },
    { id: "2", date: "2024-01-15", type: "lab", title: "Blood Work Results", status: "completed" },
  ],
  labReports: [
    { id: "1", test: "Cholesterol", result: "190", unit: "mg/dL", status: "normal" },
    { id: "2", test: "Vitamin D", result: "32", unit: "ng/mL", status: "low" },
  ],
  medications: [
    { name: "Metformin", dosage: "500mg", frequency: "Twice daily" },
    { name: "Vitamin D3", dosage: "1000 IU", frequency: "Once daily" },
  ],
  healthMetrics: [
    { label: "Age", value: "34", unit: "years" },
    { label: "Weight", value: "72", unit: "kg" },
    { label: "BMI", value: "24.2", unit: "kg/m²" },
  ],
};

module.exports = { analytics, appointments, dashboard, medication, wellness, patient };
