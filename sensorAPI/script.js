var wsUri = "ws://192.168.62.116/ws";
var output;

function init() {
    output = document.getElementById("output");
    testWebSocket();
}

function testWebSocket() {
    websocket = new WebSocket(wsUri);

    websocket.onopen = function(evt) {
        document.getElementById("connected").style.display="block";
        onOpen(evt)
    };
}


//when connection is established
function onOpen(evt) {
let throttleSlider = document.querySelector('#throttle');
let yawSlider = document.querySelector('#yaw');
let pitchSlider = document.querySelector('#pitch');
let rollSlider = document.querySelector('#roll');

throttleSlider.addEventListener('touchmove', (e)=>{
        let throttle = {
                        "throttle" : Number.parseInt(throttleSlider.value).toFixed(0)
                    };
        //console.log("Throttle: "+throttle.throttle)
        websocket.send(JSON.stringify(throttle))
    })
yawSlider.addEventListener('touchmove', (e)=>{
    let yaw = {
                    "yaw" : Number.parseInt(yawSlider.value).toFixed(0)
                };
    //console.log("Yaw: "+yaw.yaw)
    websocket.send(JSON.stringify(yaw))
})
pitchSlider.addEventListener('touchmove', (e)=>{
    let pitch = {
                    "pitch" : Number.parseInt(pitchSlider.value).toFixed(0)
                };
    //console.log("Pitch: "+pitch.pitch)
    websocket.send(JSON.stringify(pitch))
})
rollSlider.addEventListener('touchmove', (e)=>{
    let roll = {
                    "roll" : Number.parseInt(rollSlider.value).toFixed(0)
                };
    //console.log("Roll: "+roll.roll)
    websocket.send(JSON.stringify(roll))
})
}

window.addEventListener("load", init, false);
