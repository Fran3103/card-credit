const nombre = document.querySelector('#name');
const number = document.querySelector('#number');
const month = document.querySelector('#mount');
const year = document.querySelector('#year');
const cvc = document.querySelector('#cvc');
const nameCARD = document.querySelector('.name-card');
const yearCARD = document.querySelector('#año');
const  numberCARD = document.querySelector('.number-card');
const cvcCARD = document.querySelector('.cvc-card');
const monthCARD = document.querySelector('#mes')
const errorNumber = document.querySelector('.p_number');
const errorYear= document.querySelector('.p_year');
const errorCvc = document.querySelector('.p_cvc');
const btn = document.querySelector('.btn');
const thank = document.querySelector('.thank');
const continuar = document.querySelector('#continue')
const form = document.querySelector('.formulario')





nombre.addEventListener('input', function () {
        nameCARD.innerText = nombre.value;

        if (nombre.value.length === 0) {
            nameCARD.innerText = "Jane Appleseed";
        }
    })

    var cleave = new Cleave('#number', {
        creditCard: true,
    
    });
number.addEventListener('input', ( )=>{
    numberCARD.innerText = number.value;

    if( number.value.length=== 0){
        numberCARD.innerText = "0000 0000 0000 0000";
    }
})




month.addEventListener('input', ( )=>{
    monthCARD.innerText = month.value;

    if( month.value.length=== 0){
        monthCARD.innerText = "00";
    }
})
year.addEventListener('input', ( )=>{
    yearCARD.innerText = year.value;

    if( year.value.length=== 0){
        yearCARD.innerText = "00";
    }
})
cvc.addEventListener('input', ( )=>{
    cvcCARD.innerText = cvc.value;

    if( cvc.value.length=== 0){
        cvcCARD.innerText = "000";
    }
})

form.addEventListener('submit', () =>{
    
    

    thank.style.display= 'block';
    form.style.display= 'none';
    
})

continuar.addEventListener('click', ()=>{
    thank.style.display= 'none';
    form.style.display= 'block';
    
    numberCARD.innerText = "0000 0000 0000 0000";
    nameCARD.innerText = "Jane Appleseed";
    cvcCARD.innerText = "000";
    yearCARD.innerText = "00";
    monthCARD.innerText = "00";
})


