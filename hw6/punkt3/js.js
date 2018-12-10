var selectedImg = 1;

function newImg() {
    var img = document.getElementById('img_size');
    selectedImg++;
    if ( selectedImg == 7 ) {
        selectedImg = 1;
        img.src = 'img/img1.jpg';
    }

    img.src = 'img/img' + selectedImg + '.jpg';
}

function back() {
    var img = document.getElementById('img_size');
    selectedImg--;
    if ( selectedImg == 0 ) {
        selectedImg = 6;
        img.src = 'img/img6.jpg';
    }

    img.src = 'img/img' + selectedImg + '.jpg';
}


var left = document.getElementById('button_left');
var right = document.getElementById('button_right');

left.onclick = back;
right.onclick = newImg;
