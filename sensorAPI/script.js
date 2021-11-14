var wsUri = "ws://10.0.0.233/ws";
var output;

function init() {
    output = document.getElementById("output");
    testWebSocket();
}

function testWebSocket() {
    websocket = new WebSocket(wsUri);

    websocket.onopen = function(evt) {
        onOpen(evt)
    };
}

//when connection is established
function onOpen(evt) {
    let slider = document.querySelector('#myslider');
    slider.addEventListener('touchmove', (e)=>{
        let throttle = {
                        "throttle" : Number.parseInt(slider.value).toFixed(0)
                    };
        document.getElementById('throttle-value').textContent=throttle.throttle
        websocket.send(JSON.stringify(throttle))
    })
    //expose device's orientation
    window.addEventListener('deviceorientation',(e)=>{
        var  data = {
            "alpha": e.alpha,
            "beta": e.beta,
            "gamma": e.gamma
        }
    document.getElementById("alpha").textContent=`Alpha: ${e.alpha}`;
    document.getElementById("beta").textContent=`Beta: ${e.beta}`;
    document.getElementById("gamma").textContent=`Gamma: ${e.gamma}`;
    websocket.send(JSON.stringify(data));
})
}

window.addEventListener("load", init, false);
