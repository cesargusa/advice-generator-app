const URL = 'https://api.adviceslip.com/advice'
window.onload = function() {
    GetAdvice()
}

function GetAdvice(){
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        document.getElementById("container-advice").innerHTML = `
            <div class="d-flex justify-content-center title my-3">
                <span> Advice #</span><span>${data.slip.id}</span>
            </div>
            <div class="d-flex justify-content-center text-center  body-advice my-3">
                <span class="fs-5 text-white">"${data.slip.advice}"</span>
            </div>
            <div class="d-flex justify-content-center py-1">
                <img src="./images/pattern-divider-desktop.svg" width="300px">
            </div>
        `;
        document.getElementsByClassName('container')[0].insertAdjacentHTML("beforeend", `
        <div class="button-container">
            <div class="d-flex justify-content-center rounded-pill bg-green button-change align-items-center my-3 cursor-pointer " onclick="GetAdvice()">
             <img src="./images/icon-dice.svg" width="100px" class="p-2">
            </div>
        </div>
        `);

    })
}
