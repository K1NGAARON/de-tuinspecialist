function calculateEstimate() {
    // Get values from the form
    const projectType = document.getElementById('projectType').value;
    const projectSize = parseInt(document.getElementById('projectSize').value);
    const complexity = document.getElementById('complexity').value;
    const laborIntensity = document.getElementById('laborIntensity').value;
    const maintenanceFrequency = document.getElementById('maintenanceFrequency').value;
    const location = document.getElementById('location').value;

    // Define base costs (these would be based on your pricing model)
    const baseCostPerM2 = {
        design: 10,
        lawn: 5,
        planting: 7,
        maintenance: 3,
        hardscaping: 15,
        irrigation: 12
    };

    const complexityMultiplier = {
        simple: 1,
        moderate: 1.5,
        complex: 2
    };

    const laborMultiplier = {
        basic: 1,
        specialized: 1.2,
        heavy: 1.5
    };

    const maintenanceCost = {
        "one-time": 0,
        monthly: 50,
        "bi-weekly": 100,
        weekly: 200
    };

    const locationMultiplier = {
        urban: 1.2,
        suburban: 1,
        rural: 0.8
    };

    // Calculate the cost
    const baseCost = baseCostPerM2[projectType] * projectSize;
    const complexityCost = baseCost * complexityMultiplier[complexity];
    const laborCost = complexityCost * laborMultiplier[laborIntensity];
    const maintenanceFee = maintenanceCost[maintenanceFrequency];
    const locationCost = laborCost * locationMultiplier[location];

    const totalEstimate = baseCost + complexityCost + laborCost + maintenanceFee + locationCost;

    // Display the estimate
    document.getElementById('estimateCost').innerText = `€${totalEstimate.toFixed(2)}`;
};