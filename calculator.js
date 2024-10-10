// Pregnancy Tracker Calculation
function calculatePregnancy() {
    const menstrualPeriod = new Date(document.getElementById("menstrualPeriod").value);
    if (!menstrualPeriod) return;

    const today = new Date();
    const gestationalAge = Math.floor((today - menstrualPeriod) / (7 * 24 * 60 * 60 * 1000));
    const dueDate = new Date(menstrualPeriod);
    dueDate.setDate(dueDate.getDate() + 280); // Estimated due date after 280 days

    document.getElementById("gestationalAge").innerText = gestationalAge + " weeks";
    document.getElementById("dueDate").innerText = dueDate.toLocaleDateString();
    document.getElementById("daysUntilBirth").innerText = Math.floor((dueDate - today) / (24 * 60 * 60 * 1000)) + " days";
}

// Ovulation Tracker Calculation
function calculateOvulation() {
    const menstrualPeriod = new Date(document.getElementById("ovulationMenstrualPeriod").value);
    const cycleLength = parseInt(document.getElementById("cycleLength").value, 10);

    if (!menstrualPeriod || !cycleLength) return;

    const ovulationDate = new Date(menstrualPeriod);
    ovulationDate.setDate(ovulationDate.getDate() + (cycleLength - 14));

    document.getElementById("bestPregnancyTime").innerText = ovulationDate.toLocaleDateString();
}

// BMI Calculator
// BMI Calculator
function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const heightInCm = parseFloat(document.getElementById("height").value);

    if (!weight || !heightInCm) return;

    // Convert height from cm to m
    const heightInM = heightInCm / 100;

    // Calculate BMI
    const bmi = weight / (heightInM * heightInM);
    document.getElementById("bmiValue").innerText = bmi.toFixed(2);

    // Determine BMI Category
    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }
    document.getElementById("bmiCategory").innerText = category;
}

