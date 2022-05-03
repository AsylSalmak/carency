let CommentMenu = document.getElementsByClassName("comment-Menu")[0]; 
let OpenCommentMenuBtn = document.getElementsByClassName("buttom-comment")[0]; // button
let CloseBtn = document.getElementsByClassName("CloseBtn")[0];
let mute = document.getElementsByClassName("addMenuBox2")[0]; 
let unmute = document.getElementsByClassName("addMenuBox3")[0]; 
let openAddMenu = document.getElementsByClassName("openMenu")[0]; 
let AddMenu = document.getElementsByClassName("addMenu")[0]; 


console.log(openAddMenu)
console.log(AddMenu)
console.log(CloseBtn)

let count = false;
console.log(count)
setCount = function(a){
    count = (a)
}

openAddMenu.onclick = function(event){
    setCount(!count)
    console.log(count)
    if(count){
        AddMenu.style.display = 'flex'
        }
        else{
        AddMenu.style.display = 'none'
       }
}

OpenCommentMenuBtn.onclick = function(event){
    CommentMenu.style.display = 'flex';
    setCount(false)
    console.log(count)
}

CloseBtn.onclick = function(event){
    CommentMenu.style.display = 'none';

}

mute.onclick = function(event){
    mute.style.display = 'none'
    unmute.style.display = 'flex'
}


unmute.onclick = function(event){
    mute.style.display = 'flex'
    unmute.style.display = 'none'
}