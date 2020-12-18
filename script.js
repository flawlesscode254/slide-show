let images = ["one.jpg", "two.jpg", "three.jpg"];

let num = 0;

function Next(){
    num ++;
    let slide = document.getElementById("slide");
    if(num >= images.length){
        num = 0;
    };
    slide.src = images[num];

    let choice = images[num];

    switch(choice){
        case images[num] = "one.jpg":
            let ten = document.getElementById("two");
            ten.style.backgroundColor = "black";
            let nine = document.getElementById("four");
            nine.style.backgroundColor = "white";
            let eight = document.getElementById("three");
            eight.style.backgroundColor = "white";
            break;
        case images[num] = "two.jpg":
            let three = document.getElementById("three");
            three.style.backgroundColor = "black";
            let six = document.getElementById("two");
            six.style.backgroundColor = "white";
            break;
        case images[num] = "three.jpg":
            let four = document.getElementById("four");
            four.style.backgroundColor = "black";
            let seven = document.getElementById("three");
            seven.style.backgroundColor = "white";
            break;
    };
};

let div_two = document.querySelector("#two");
div_two.addEventListener('click', () => {

    let find = document.getElementById("slide");
    find.src = "one.jpg";

    let two = document.getElementById("two");
    two.style.backgroundColor = "black";
    let nine = document.getElementById("four");
    nine.style.backgroundColor = "white";
    let eight = document.getElementById("three");
    eight.style.backgroundColor = "white";
    
});

let div_three = document.querySelector("#three");
div_three.addEventListener('click', () => {
    let find = document.getElementById("slide");
    find.src = "two.jpg";

    let three = document.getElementById("three");
    three.style.backgroundColor = "black";
    let six = document.getElementById("two");
    six.style.backgroundColor = "white";
    let four = document.getElementById("four");
    four.style.backgroundColor = "white";
    
});

let div_four = document.querySelector("#four");
div_four.addEventListener('click', () => {
    let find = document.getElementById("slide");
    find.src = "three.jpg";

    let four = document.getElementById("four");
    four.style.backgroundColor = "black";
    let seven = document.getElementById("three");
    seven.style.backgroundColor = "white";
});


function Run(){
    num ++;
    let slide = document.getElementById("slide");
    if(num >= images.length){
        num = 0;
    };
    slide.src = images[num];

    let choice = images[num];

    switch(choice){
        case images[num] = "one.jpg":
            let ten = document.getElementById("two");
            ten.style.backgroundColor = "black";
            let nine = document.getElementById("four");
            nine.style.backgroundColor = "white";
            let eight = document.getElementById("three");
            eight.style.backgroundColor = "white";
            break;
        case images[num] = "two.jpg":
            let three = document.getElementById("three");
            three.style.backgroundColor = "black";
            let six = document.getElementById("two");
            six.style.backgroundColor = "white";
            let eleven = document.getElementById("four");
            eleven.style.backgroundColor = "white";
            break;
        case images[num] = "three.jpg":
            let four = document.getElementById("four");
            four.style.backgroundColor = "black";
            let seven = document.getElementById("three");
            seven.style.backgroundColor = "white";
            let twelve = document.getElementById("two");
            twelve.style.backgroundColor = "white";
            break;
    };
}
setInterval(Run, 4000);


function Previous(){
    num --;
    let slide = document.getElementById("slide");
    if(num < 0){
        num = images.length -1;
    };
    slide.src = images[num];

    let choice = images[num];

    switch(choice){
        case images[num] = "one.jpg":
            let ten = document.getElementById("two");
            ten.style.backgroundColor = "black";
            let nine = document.getElementById("four");
            nine.style.backgroundColor = "white";
            let eight = document.getElementById("three");
            eight.style.backgroundColor = "white";
            break;
        case images[num] = "two.jpg":
            let three = document.getElementById("three");
            three.style.backgroundColor = "black";
            let six = document.getElementById("two");
            six.style.backgroundColor = "white";
            let eleven = document.getElementById("four");
            eleven.style.backgroundColor = "white";
            break;
        case images[num] = "three.jpg":
            let four = document.getElementById("four");
            four.style.backgroundColor = "black";
            let seven = document.getElementById("three");
            seven.style.backgroundColor = "white";
            let twelve = document.getElementById("two");
            twelve.style.backgroundColor = "white";
            break;
    };
};