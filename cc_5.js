// Employee Array
const employees = [
  { name: "Alice", hourlyRate: 25, hoursWorked: 42 },
  { name: "Bob", hourlyRate: 20, hoursWorked: 38 },
  { name: "Charlie", hourlyRate: 30, hoursWorked: 45 },
  { name: "Dana", hourlyRate: 22, hoursWorked: 40 },
  { name: "Eli", hourlyRate: 18, hoursWorked: 50 }
];

// Calculate base pay 
function calculateBasePay(rate, hours) {
  return rate * Math.min(hours, 40);
}

// Calculate overtime pay
function calculateOvertimePay(rate, hours) {
  const overtimeHours = Math.max(hours - 40, 0);
  return overtimeHours * rate * 1.5;
}

// Calculate 15% tax
function calculateTaxes(grossPay) {
  return grossPay * 0.15;
}

// Process payroll
function processPayroll(employee) {
  const { name, hourlyRate, hoursWorked } = employee;
  const basePay = calculateBasePay(hourlyRate, hoursWorked);
  const overtimePay = calculateOvertimePay(hourlyRate, hoursWorked);
  const grossPay = basePay + overtimePay;
  const netPay = grossPay - calculateTaxes(grossPay);

  return {
    name,
    basePay: basePay.toFixed(2),
    overtimePay: overtimePay.toFixed(2),
    grossPay: grossPay.toFixed(2),
    netPay: netPay.toFixed(2)
  };
}

// Loop through employee array and log payroll results
employees.forEach(employee => {
  const payrollReport = processPayroll(employee);
  console.log(payrollReport);
});
