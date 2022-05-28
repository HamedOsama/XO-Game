let square = document.querySelectorAll(".s");
let title = document.querySelector(".title");
let turn = 'X';
let counter = 0;
document.querySelectorAll(".s").forEach( (e)=>{
e.addEventListener("click",()=>{console.log(e)
if(e.innerHTML == '' && turn === 'X'){
e.innerHTML = turn;
turn = 'O';
title.innerHTML = `${turn} Turn`;
counter++;
}
else if (e.innerHTML == '' && turn === 'O'){
    e.innerHTML = turn;
    turn = 'X';
    title.innerHTML = `${turn} Turn`;
    counter++;
}
 if(square[0].innerHTML == square[1].innerHTML && square[0].innerHTML == square[2].innerHTML && square[0].innerHTML != ''){
    coloring(0,1,2);
}
else if(square[0].innerHTML == square[3].innerHTML && square[0].innerHTML == square[6].innerHTML && square[0].innerHTML != ''){
    coloring(0,3,6);
}
else if(square[3].innerHTML == square[4].innerHTML && square[3].innerHTML == square[5].innerHTML && square[3].innerHTML != ''){
    coloring(3,4,5);
}
else if(square[6].innerHTML == square[7].innerHTML && square[6].innerHTML == square[8].innerHTML && square[6].innerHTML != ''){
    coloring(6,7,8);
}
else if(square[1].innerHTML == square[4].innerHTML && square[1].innerHTML == square[7].innerHTML && square[1].innerHTML != ''){
    coloring(1,4,7);
}
else if(square[2].innerHTML == square[5].innerHTML && square[2].innerHTML == square[8].innerHTML && square[2].innerHTML != ''){
    coloring(2,5,8);
}
else if(square[0].innerHTML == square[4].innerHTML && square[0].innerHTML == square[8].innerHTML && square[0].innerHTML != ''){
    coloring(0,4,8);
}
else if(square[2].innerHTML == square[4].innerHTML && square[2].innerHTML == square[6].innerHTML && square[2].innerHTML != ''){
    coloring(2,4,6);
}
if(counter === 9){
title.innerHTML = "Draw";
square.forEach((e)=>{
e.style.backgroundColor = "black";})
setInterval(()=>{
    title.innerHTML += ".";
},1000)
setTimeout(()=>{
    location.reload();
},4000)

}
})
})
function coloring(x,y,z){
    title.innerHTML = `${square[x].innerHTML} WINS`;
    square[x].style.backgroundColor = "black";
    square[y].style.backgroundColor = "black";
    square[z].style.backgroundColor = "black";
        setInterval(()=>{
            title.innerHTML += ".";
        },1000)
        setTimeout(()=>{
            location.reload();
        },4000)
}