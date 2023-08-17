var elInp1 = document.querySelector('.inp1')
var elInp2 = document.querySelector('.inp2')
var elBtn = document.querySelector('.btn')
var elForm = document.querySelector('.form')
var elMo = document.querySelector('.modal')
var elBg = document.querySelector('.bgcolor')




elForm.addEventListener('submit', function(){
    if(elInp1.value == 'MUHAMMAD' && elInp2.value.length >= 8){
        elMo.classList.add('modal_op')
        elMo.classList.add('span')
        elBg.classList.add('bgcolor_op')
        elMo.textContent = 'passed'
    }else{
        elMo.classList.add('modal_op')
        elMo.classList.add('span')
        elBg.classList.add('bgcolor_op')
        elMo.textContent = 'unpassed'
    }
})




