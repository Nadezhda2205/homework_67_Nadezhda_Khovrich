function show (){
    const div = document.createElement('div');
    div.classList = 'fixed_overlay_modal';
    div.setAttribute('id', 'temp_element');

    container.appendChild(div);
    const div2 = document.createElement('div');
    div2.classList = 'modal';
    div.appendChild(div2);
    const div3 = document.createElement('div');
    div3.classList = 'modal_container';
    div2.appendChild(div3).innerHTML = 'Какой чудесный день!';
    const button2 = document.createElement('button');
    button2.classList = 'close';
    div3.appendChild(button2).innerText = 'Пока';
    button2.setAttribute('id', 'close');
    document.getElementById('close').onclick = hide;
    setTimeout(hide, 5000);
}

function hide(){
    document.getElementById('temp_element').hidden = true;

}

let button = document.getElementById('button');
button.addEventListener ('click', show);


