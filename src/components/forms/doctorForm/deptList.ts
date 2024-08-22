const hospitalDept = [
    "Cardiology",
    "Dermatology",
    "Emergency Medicine",
    "Gastroenterology",
    "Pediatrics",
    "Orthopedics",
    "Neurology",
    "Oncology",
  ];
  
  export const deptList = hospitalDept.map((dept) => ({
    label: dept,
    value: dept.toLowerCase(),
  }));