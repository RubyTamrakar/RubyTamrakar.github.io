function clicked() {
    // alert("Hello, world");
    //     document.getElementById('bigfont').style.fontSize = '24pt';
    // }
    window.setInterval(timing, 5000);
}

function checking() {

    if (document.getElementById('bling').checked == true) {

        document.getElementById('bigfont').style.fontWeight = 'bold';
        document.getElementById('bigfont').style.color = 'green';
        document.getElementById('bigfont').style.textDecoration = 'underline';

    } else {
        document.getElementById('bigfont').style.fontWeight = 'normal';
        document.getElementById('bigfont').style.color = 'black';
        document.getElementById('bigfont').style.textDecoration = 'none';


    }
}

function timing() {
    let ele = document.getElementById('bigfont');
    let style = window.getComputedStyle(ele, null).getPropertyValue('font-size');
    let fontSize = parseInt(style);

    ele.style.fontSize = (fontSize + 2) + 'pt'
}