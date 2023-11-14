navigator.getBattery().then((battery) => {
    let presentage = document.querySelector(".presentage")
    let present = document.querySelector(".present")
    let charge = document.querySelector(".charge")
    function updateAll() {
        update()
        updateLevelInfo()
    }

    function updateLevelInfo() {
        presentage.style.width = battery.level * 100 + "%"
        present.innerHTML = battery.level * 100 + "%"
    }
    updateAll()

    function update() {
        charge.innerHTML = battery.charging ? "Your device chargin" : "No charging"
    }

    battery.addEventListener("levelchange", () => {
        updateLevelInfo()
    })
    battery.addEventListener("chargingchange", () => {
        update()
    })
})