let numbers = [1,2,3,4,5,6,7,8,9],
letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    symbols = ["!","@","#","$","%","&","*","-","_","[","]","{","}","|","/","?",";","<",">"]

    
    
    
    
    
    let first = document.getElementById("first-el"),
    second = document.getElementById("second-el"),
    symbBtn = document.getElementById("symb-btn"),
    numbBtn = document.getElementById("numb-btn")
    

    document.getElementById("value-el").addEventListener("keyup", generate);
    
    function generate() {
        value = parseInt(document.getElementById("value-el").value)
        let caracteres = numbers.concat(letters, symbols);
        if (value < 21) {
            first.textContent = ""
            second.textContent = ""
            
        for (let i = 0; i < value; i++){
            let alAzar = Math.floor(Math.random()* caracteres.length)
            first.textContent += caracteres[alAzar]
        }
    
        for (let x = 0; x < value; x++){
            let alAzar = Math.floor(Math.random()* caracteres.length)
            second.textContent += caracteres[alAzar]
        }
    } else {
        first.textContent = "---------------"
        second.textContent = "---------------"
    }
    console.log(caracteres)
}

function myFunction() {  
    first.select();
    first.setSelectionRange(0, 99999);
    document.execCommand("copy")
}

function symbolsClick() {
    if (symbBtn.textContent === "On") {
        symbols = [];
        symbBtn.textContent = "Off";
        symbBtn.style.background = '#671023'
    } else if (symbBtn.textContent === "Off") {
        symbols = ["!","@","#","$","%","&","*","-","_","[","]","{","}","|","/","?",";","<",">"];
        symbBtn.textContent = "On";
        symbBtn.style.background = '#0c3a53'
    }
}

function numbersClick() {
    if (numbBtn.textContent === "On") {
        numbers = [];
        numbBtn.textContent = "Off";
        numbBtn.style.background = '#671023'
    } else if (numbBtn.textContent === "Off") {
        numbers = [1,2,3,4,5,6,7,8,9];
        numbBtn.textContent = "On";
        numbBtn.style.background = '#0c3a53'
    }
}