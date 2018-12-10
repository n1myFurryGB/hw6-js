var arr_objects = [
    fd4jl8k39d = {
        name: 'Audi R8',
        price: 650000
    },
    fd7jk9r45l = {
        name: 'Дом',
        price: 50000
    },
    fd2cn5t89e = {
        name: 'Самолет',
        price: 100000000
    }
];

var arr_obj = ['fd4jl8k39d', 'fd7jk9r45l', 'fd2cn5t89e']; // Object name = id

var num_selected = 0; // Кол-во выбранных товаров
var total_price = 0; // Итоговая цена


function Buy() {
    if ( this.parentNode.classList.contains('no_selected') ) {
        this.parentNode.classList.remove('no_selected');
        this.parentNode.classList.add('selected');
        var catalog = document.getElementById('all_cat_selected');
        catalog.appendChild(this.parentNode.parentNode);
        for (var i = 0; i < arr_obj.length; i++) {
            if ( arr_obj[i] == this.parentNode.id ) {
                var num_total = document.getElementById('sum_rows_num');
                var goods_total = document.getElementById('ins_goods');
                this.innerText = 'Вернуть';
                this.style.color = 'red';
                if ( arr_obj[i] == this.parentNode.id ) {
                    var ttl_pr = document.getElementById('total_price_num');
                    total_price += arr_objects[i].price;
                    ttl_pr.innerHTML = '&nbsp' + total_price + '$';
                }
                num_total.innerText = ++num_selected;
                if ( num_selected > 1 ) {
                    var div = document.createElement('div');
                    div.id = this.parentNode.id + '_1';
                    div.classList.add('goods_selec');
                    div.innerHTML = '&nbsp' + arr_objects[i].name + ', ' + arr_objects[i].price + '$';
                    goods_total.appendChild(div);
                }
                else {
                    var div = document.createElement('div');
                    div.id = this.parentNode.id + '_1';
                    div.classList.add('goods_selec');
                    div.innerText = arr_objects[i].name + ', ' + arr_objects[i].price + '$';
                    goods_total.appendChild(div);
                }
            }
        }
    }
    else if ( this.parentNode.classList.contains('selected') ) {
        this.parentNode.classList.remove('selected');
        this.parentNode.classList.add('no_selected');
        var catalogs = document.getElementById('all_cat');
        this.innerText = 'Купить';
        this.style.color = 'green';
        catalogs.appendChild(this.parentNode.parentNode);
        for (var i = 0; i < arr_obj.length; i++) {
            if ( arr_obj[i] == this.parentNode.id ) {
                var num_total = document.getElementById('sum_rows_num');
                num_total.innerText = --num_selected;
                var ttl_pr = document.getElementById('total_price_num');
                total_price -= arr_objects[i].price;
                ttl_pr.innerHTML = '&nbsp' + total_price + '$';
            }
        }
        var name = document.getElementsByClassName('goods_selec');
        for (var i = 0; i < name.length; i++) {
            var del_name_and_pr = name[i].id.split('_');
            if ( del_name_and_pr[0] == this.parentNode.id ) {
                name[i].remove();
            }
        }
    }
}

var active = document.getElementsByClassName('buy');

for (var i = 0; i < active.length; i++) {
    active[i].onclick = Buy;
}
