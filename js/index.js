const btn = document.querySelector('.btn');
const id_tag = document.querySelector('.advice-id');
const advice_tag = document.querySelector('.advice');

function onBtnClick(){
    //console.log('click'); //temporary
    fetch('https://api.adviceslip.com/advice', {cache: 'no-store'})
        .then(resp => resp.json())
        .then(jsonData => {
            id_tag.innerText = 'advice #' + jsonData['slip']['id'];
            advice_tag.innerText = '"' + jsonData['slip']['advice'] + '"';
        });
    
}

btn.addEventListener('click', onBtnClick);

onBtnClick();
//console.log(btn, id_tag, advice_tag)