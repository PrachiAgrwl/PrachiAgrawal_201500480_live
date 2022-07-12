var namee=document.getElementById("Name");
var rollno=document.getElementById("roll");
var clgname=document.getElementById("ClgName");
var date=document.getElementById("date");

let n="Prachi Agrawal";
let rn=201500480;
let cn="GLA University,Mathura";
let datee="11-07-2022"

setTimeout(
function displayInfo(){
   namee.innerText=n;
   rollno.innerText=rn;
   clgname.innerText=cn;
   date.innerText=datee;
}, 2000);
