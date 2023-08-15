let qrImage=document.querySelector('.qrImage')
let qrText=document.querySelector('#qrText')
let error=document.querySelector('.inactive')
let card=document.querySelector('.card')

function qrGenerator(){
    if(qrText.value.length>0){
        error.classList.remove('active')
        qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        qrImage.classList.add('showImg');

    }
    else {
        error.classList.add('active');
        qrImage.classList.remove('showImg');
        card.classList='card'

    }
   
}