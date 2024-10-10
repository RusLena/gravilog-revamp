const namesData = {
    girls: [
        { name: "Aisha", meaning: "Alive, prosperous", origin: "Arabic" },
        { name: "Alice", meaning: "Noble", origin: "Germanic" },
        { name: "Sophia", meaning: "Wisdom", origin: "Greek" },
        // Add more girls' names
    ],
    boys: [
        { name: "Ali", meaning: "Noble, exalted", origin: "Arabic" },
        { name: "Oliver", meaning: "Olive tree", origin: "Latin" },
        { name: "Liam", meaning: "Strong-willed warrior", origin: "Irish" },
        // Add more boys' names
    ]
};

// Filter and display names by selected letter
function filterNames(letter) {
    const girlsContainer = document.getElementById("girls-names");
    const boysContainer = document.getElementById("boys-names");
    const filteredLetterTitle = document.getElementById("filtered-letter");

    // Update the section title
    filteredLetterTitle.textContent = `Names Starting with "${letter}"`;

    // Clear previous names
    girlsContainer.innerHTML = "";
    boysContainer.innerHTML = "";

    // Filter and display girls' names
    const filteredGirls = namesData.girls.filter(name => name.name.startsWith(letter));
    filteredGirls.forEach(nameData => {
        girlsContainer.innerHTML += `
            <div class="name-card">
                <h4>${nameData.name}</h4>
                <p><strong>Meaning:</strong> ${nameData.meaning}</p>
                <p><strong>Origin:</strong> ${nameData.origin}</p>
            </div>
        `;
    });

    // Filter and display boys' names
    const filteredBoys = namesData.boys.filter(name => name.name.startsWith(letter));
    filteredBoys.forEach(nameData => {
        boysContainer.innerHTML += `
            <div class="name-card">
                <h4>${nameData.name}</h4>
                <p><strong>Meaning:</strong> ${nameData.meaning}</p>
                <p><strong>Origin:</strong> ${nameData.origin}</p>
            </div>
        `;
    });
}
