const navSlide = ()=>{
    const burger=document.querySelector('.burger')
    const nav=document.querySelector('.nav-links')

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active')
    })
}

navSlide();






//////////// F I L T E R //////////////////

const btnPrimeni = document.querySelector('#apply').addEventListener('click',(e)=>{
    e.preventDefault();
    
    prikaziSve();

    


    if(document.getElementById('posno').checked) {
        sakrijNeposne();
    }else if(document.getElementById('neposno').checked) {
        sakrijPosne();
    }


    const select = document.getElementById("tip_proizvoda");
    const izbor = select.value;

    if (izbor != "Prikaži sve"){
        prikaziTipProizvoda(izbor);
    }

});


const btnCancel = document.querySelector('#cancel').addEventListener('click',(e)=>{
    e.preventDefault();
    prikaziSve();

});

function sakrijNeposne(){

    const neposni = [...document.querySelectorAll(".neposno")];  // nodeList koji se dobija pomocu jsa ne moze da se koristi u foreach i zato se node pretvara u array sa [..]

    neposni.forEach(element => element.style.display = "none");
}

function sakrijPosne(){

    const posni = [...document.querySelectorAll(".posno")];

    posni.forEach(element => element.style.display = "none");
}

////////////////////////

function prikaziTipProizvoda(tip){


    const sviProzivodi = [...document.querySelectorAll(".row_product")];

    sviProzivodi.forEach(element => {

        if (!element.classList.contains(tip)){
            element.style.display= "none";
        }
    });

}


function prikaziSve(){

    const sviProzivodi = [...document.querySelectorAll(".row_product")];

    sviProzivodi.forEach(element => element.style.display= "block");

}
