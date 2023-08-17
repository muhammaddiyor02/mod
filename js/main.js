var elModal = document.querySelector('.modal')
var elInp1 = document.querySelector('.inp1')
var elInp2 = document.querySelector('.inp2')
var elSpan = document.querySelector('.span')
var elBg = document.querySelector('.bgcolor')
var elTit = document.querySelector('.tit')



function fn(){
    if(elInp1.value.length >= 7 && elInp2.value.length >= 8){
        elInp1.classList.add('blue')
        elInp2.classList.add('blue')
        elInp1.classList.remove('danger')
        elInp2.classList.remove('danger')
        elModal.classList.toggle('modal_op')
        elTit.textContent = 'SUCCESSFUL'
    }else{
        elInp1.classList.add('danger')
        elInp2.classList.add('danger')
        elInp1.classList.remove('blue')
        elInp2.classList.remove('blue')
        elModal.classList.toggle('modal_op')
        elTit.textContent = 'UNSUCCESSFUL'
    }
    
}
elSpan.addEventListener ('clcik',()=>{
    elModal.classList.remove('mmm')
})