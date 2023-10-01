document.querySelector("h1").style.color='red';
document.querySelector("h1").style.position='relative';
document.querySelector("h1").style.left='200px'
// document.querySelector("h1").remove();


// add event
document.querySelector("button").addEventListener("click",function(){alert('hello')});

document.getElementById("txt").addEventListener("keyup", function (){
    document.querySelector("h1").innerText=document.getElementById("txt").value
});