const gyroOutput = document.getElementById("gyro-output")

window.addEventListener("deviceorientation", event => {
    console.log(event.alpha)
    gyroOutput.innerText = event.alpha
})