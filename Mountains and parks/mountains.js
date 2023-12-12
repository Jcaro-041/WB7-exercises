const apiMountains = 'http://localhost:3000/Mountains';
let mountains = [];

document.addEventListener("DOMContentLoaded", () => {
    fetch(apiMountains)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let mountainsContainer = document.getElementById("mountainsContainer");


            data.forEach(mountain => {
                let mountainElement = document.createElement("li");
                mountainElement.innerText = `
                    ${mountain.Name}
                    ${mountain.Elevation}
                    ${mountain.Effort}
                `;
                mountainsContainer.appendChild(mountainElement);
            });
        });
        populateMountains();
});


function populateMountains() {
    const selectElement = document.getElementById("mountainsContainer");
    fetch(apiMountains)
        .then(response => response.json())
        .then(data =>
            console.log(data));

    mountains.forEach(mountain => {
        const option = document.createElement("option");
        option.value = mountain.name;  // Set the value of the option to the mountain name
        option.text = mountain.name;   // Set the text of the option to the mountain name
        selectElement.appendChild(option);  // Append the option to the select element
    });
}