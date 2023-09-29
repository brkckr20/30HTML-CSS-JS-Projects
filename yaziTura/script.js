let tura = 0;
let yazi = 0;


let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-btn")
let resetBtn = document.querySelector("#reset")

flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2); // 0 veya 1 verecek

    coin.style.animation = "none";

    if (i) { // i === 1 ise demiş olduk
        setTimeout(() => {
            coin.style.animation = "spin-tura 3s forwards"
        }, 100);
        tura++;
    } else {
        //eger sayi 0 ise
        setTimeout(() => {
            coin.style.animation = "spin-yazi 3s forwards"
        }, 100);
        yazi++;
    }


    setTimeout(updateStats, 3000);
    disabledButton();
})

function updateStats() {
    document.querySelector("#tura-count").textContent = `Tura : ${tura}`
    document.querySelector("#yazi-count").textContent = `Yazı : ${yazi}`
}

function disabledButton() {
    flipBtn.disabled = true;
    setTimeout(() => {
        flipBtn.disabled = false
    }, 3000);
}

resetBtn.addEventListener("click", () => {
    coin.style.animation = "none"
    tura = 0;
    yazi = 0;
    updateStats();
})