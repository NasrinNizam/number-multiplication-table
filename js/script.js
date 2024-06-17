let input  = document.querySelector('.input')
let button = document.querySelector('.button')
let result = document.querySelector('.result')

button.addEventListener('click' , ()=>{
    if(input.value==''){
        alert('please, type a number')
    }else{
        result.innerHTML = ''
        for( let n = 1; n<11; n++){
            result.innerHTML += input.value + ' x ' + n + ' = ' + input.value*n + '<br>'
        }input.value = ''
    }
})
