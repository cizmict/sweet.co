const proslava = document.querySelector(".tab-1-content");
const dostava = document.querySelector(".tab-2-content");

const zaglavljeProslava = document.querySelector("#zaglavlje-1")
const zaglavljeDostava = document.querySelector("#zaglavlje-2")

zaglavljeProslava.addEventListener("click", showProslava)
zaglavljeDostava.addEventListener("click", showDostava) 

showProslava();



// funkcije

function showDostava(){
    proslava.style.display = "none";
    dostava.style.display = "block";

    zaglavljeDostava.classList.add('zaglavlje-border');
    zaglavljeProslava.classList.remove('zaglavlje-border');
}

function showProslava(){
    proslava.style.display = "grid";
    dostava.style.display = "none";

    zaglavljeDostava.classList.remove('zaglavlje-border');
    zaglavljeProslava.classList.add('zaglavlje-border');
}


//////////////////////////////////
const navSlide = ()=>{
    const burger=document.querySelector('.burger')
    const nav=document.querySelector('.nav-links')
  
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active')
        console.log('ndjsknfk');
    })
  }
  
  navSlide();





// V A L I D A C I J A   F O R M E //
const form = document.querySelector("form");
const nameInputElement = document.getElementById("name-input");
const phoneInputElement = document.getElementById("phone-input");
const mailInputElement = document.getElementById("mail-input");


form.addEventListener("submit", validateForm);


function validateForm(e){
    e.preventDefault();

    const nameInput = nameInputElement.value;
    const phoneInput = phoneInputElement.value;
    const mailInput = mailInputElement.value;

    
    if (!isNameValid(nameInput) || !isMailValid(mailInput) || !isPhoneValid(phoneInput)){

        alert("Pogresan format podataka");
    }
    else {
        alert("Uspesno ste porucili!");

    }

}



function isNameValid(nameInput){
    if (nameInput.length == 0 || !nameInput.includes(" ")){
        return false;
    }

    return true;
}

function isPhoneValid(phoneInput){
    let isGood = true;
    
    
    if (phoneInput.length == 0){
        isGood = false;
    }

    phoneInput.split("").forEach(letter => {  //proverava ASCII kod za svaki el
        if (letter < "0" || letter > "9"){
            isGood = false;
        }
    });

    return isGood;
}

function isMailValid(mailInput){
    if (mailInput.length == 0 || !mailInput.includes("@")){
        return false;
    }

    return true;
}