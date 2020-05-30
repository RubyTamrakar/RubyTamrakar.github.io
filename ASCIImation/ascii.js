    var startB = document.getElementById("startButton");
    startB.addEventListener("click", startEventHandler);


    function startEventHandler() {
        document.getElementById("myTextArea").value = "you pressed start button";
    }

    var stopB = document.getElementById("stopButton");
    stopB.addEventListener("click", stopEventHandler);

    function stopEventHandler() {
        document.getElementById("myTextArea").value = "you pressed stop button";
    }

    var animButton = document.getElementById("animType");
    animButton.addEventListener("change", animEventHandler);

    function animEventHandler() {

        document.getElementById("myTextArea").value = ANIMATIONS[animButton.value];
    }

    var sizeButton = document.getElementById("animSize");
    sizeButton.addEventListener("change", sizeEventHandler);

    function sizeEventHandler() {
        if (document.getElementById("myTextArea").value = "tiny") {

        }
    }

    var speedButton = document.getElementById("animSpeed");
    speedButton.addEventListener("change", speedEventHandler);

    function speedEventHandler() {
        document.getElementById("myTextArea").value = speedButton.checked;
    }