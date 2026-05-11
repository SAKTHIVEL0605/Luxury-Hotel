// LOADER

window.addEventListener("load",function(){

document.querySelector(".loader-wrapper").style.display="none";

});

// NAVBAR SCROLL

window.addEventListener("scroll",function(){

const navbar=document.querySelector(".custom-navbar");

if(window.scrollY>50){
navbar.classList.add("scrolled");
}else{
navbar.classList.remove("scrolled");
}

});

// SCROLL TOP

const scrollTop=document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){
scrollTop.style.display="block";
}else{
scrollTop.style.display="none";
}

});

scrollTop.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});

// BOOKING FORM

const bookingForm=document.getElementById("bookingForm");

bookingForm.addEventListener("submit",function(e){

e.preventDefault();

alert("Room Booking Successfully Confirmed!");

bookingForm.reset();

});