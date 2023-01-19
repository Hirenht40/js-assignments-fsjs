let btn = document.querySelector(".btn");
console.log(btn);

btn.addEventListener("click", binaryToDecmimal); 

function binaryToDecmimal(){

    let input = document.getElementById("binary").value;

    let result = 0;
    let counter  = 0;

    for( let i = input.length-1 ; i>=0; i--){
    
        result = result + (Math.pow(2,counter) * input[i]);
        counter = counter + 1;
    }
document.getElementsByClassName("result")[0].innerHTML = result;

};


