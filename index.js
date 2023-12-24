function fun(){

let user=document.getElementById("text").value;
let ema=document.getElementById('email').value;
let pass=document.getElementById('password').value;
if(user=="Pratik Aryal" && ema=="aryalpratik057@gmail.com" && pass==123456){
alert('success')
window.location.assign("https://fontawesome.com/icons/lock?f=classic&s=solid")
}else{
    alert('wrong entry')
}
}
