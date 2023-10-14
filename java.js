let number = ["n0", "n1", "n2", "n3", "n4"];
//console.log(number);
let numbers = $('.numbers div');

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function() { markCircle(i); });
    
}

let marked = false;
let visible_nr;

function markCircle(nr) {
    if (marked == false) {
        marked = true;
        visible_nr = nr;
        //console.log("marked = false");
        $('#n'+nr).addClass('num0');
        $('#n'+nr).removeClass('num');
    } else if (marked == true && number[visible_nr] == number[nr]) {
        //console.log("marked = true");
        $('#n'+nr).addClass('num');
        $('#n'+nr).removeClass('num0');
        marked = false;
    }
};

function submitClicked(event) {
    //console.log("submit");
    
    if (marked == true) {
    window.location = "rate.html";
    }
}
    
    //console.log("numer: "+visible_nr);

    
