//Navbar 
const menubar=document.getElementById("bar");
// console.log(menubar);
const navbar = document.getElementById("navbar");
// console.log(navbar)

const navclose=document.getElementById("close")
// console.log(navclose)

if(bar){
menubar.addEventListener("click",()=>{
navbar.classList.add('active')
})
}

if(navclose){
    navclose.addEventListener("click",()=>{
    navbar.classList.remove('active');
    })
    }

// shop
// to open details f any product

const prod=document.getElementsByClassName("pro");
prod[0].addEventListener("click",()=>{
this.location.href='sproduct.html';
});


// product details

var MainImg=document.getElementById(".MainImg");
var smallimg=document.getElementsByClassName("small-img");


// smallimg[0].addEventListener("click",()=>{
//     MainImg.src=smallimg[0].src;
// })
// smallimg[1].addEventListener("click",()=>{
//     MainImg.src=smallimg[1].src;
// })

// smallimg[0].onclick=function(){
//     MainImg.src=smallimg[0].src;
// }

// smallimg[1].onclick=function(){
//     MainImg.src=smallimg[1].src;
// }

// smallimg[2].onclick=function(){
//     MainImg.src=smallimg[2].src;
// }

// smallimg[3].onclick=function(){
//     MainImg.src=smallimg[3].src;
// }

