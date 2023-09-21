let calculation=localStorage.getItem('calculation') || '';
display();

function calculate(value){
    calculation+=value;
    console.log(calculation);
    display();
    saveItems();

}

function saveItems(){
    localStorage.setItem('calculation',calculation);
}

function display(){
    document.querySelector('.js-calculation').innerHTML=calculation;
}