//Globals
const wheelContainer = document.getElementById("wheel-container");

const randNumber = Math.floor(Math.random() * 91) + 10;

//View code
const wheel = `
    <div class="wheel-outline">
        <div class="wheel-blade">
            <p>${randNumber}%</p>
        </div>
        <div class="wheel-middle"></div>
        </div>
    </div>
`;

wheelContainer.innerHTML += wheel;
