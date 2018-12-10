function showBigImage() {
    var isHaveImg = document.getElementsByClassName('big');
    var isHaveError = document.getElementsByClassName('error');
    if ( isHaveImg.length != 0 ) {
        for (var r = 0; r < isHaveImg.length; r++) {
            isHaveImg[r].parentNode.removeChild(isHaveImg[r]);
        }
    }

    if ( isHaveError.length != 0 ) {
        for (var r = 0; r < isHaveError.length; r++) {
            isHaveError[r].parentNode.removeChild(isHaveError[r]);
        }
    }

    var bigImg = document.createElement('img');
    var res = document.getElementById('result');
    var res_link = this.src.split('/');
    var hm = res_link.length;
    bigImg.classList.add('big');
    bigImg.src = 'big/' + res_link[hm - 1];
    res.appendChild(bigImg);
    bigImg.onerror = function () {
        if ( isHaveImg.length != 0 ) {
            for (var r = 0; r < isHaveImg.length; r++) {
                isHaveImg[r].parentNode.removeChild(isHaveImg[r]);
            }
        }
        var errorText = document.createElement('div');
        errorText.classList.add('error');
        errorText.innerText = 'Ошибка: нет такой картинки';
        res.appendChild(errorText);
        console.clear();
    };
}

function deleteBigImg() {
    var isHaveImg = document.getElementsByClassName('big');
    if ( isHaveImg.length != 0 ) {
        for (var r = 0; r < isHaveImg.length; r++) {
            isHaveImg[r].parentNode.removeChild(isHaveImg[r]);
        }
    }

    var isHaveError = document.getElementsByClassName('error');
    if ( isHaveError.length != 0 ) {
        for (var r = 0; r < isHaveError.length; r++) {
            isHaveError[r].parentNode.removeChild(isHaveError[r]);
        }
    }
}

var smallImg = document.getElementsByClassName('small');
var delText = document.getElementById('delete_big_img');

delText.onclick = deleteBigImg;

for (var i = 0; i < smallImg.length; i++) {
    smallImg[i].onclick = showBigImage;
}
