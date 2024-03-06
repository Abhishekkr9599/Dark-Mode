var i=0;  //Light is off
function light(){
    if(i==0){
        document.getElementById("body").style.backgroundColor="white";
        document.getElementById("btn").style.backgroundColor="black";
        document.getElementById("btn").textContent="Light";
        document.getElementById("btn").style.color="white";
        i++;
    }
    else{
        document.getElementById("body").style.backgroundColor="black";
        document.getElementById("btn").style.backgroundColor="white";
        document.getElementById("btn").textContent="Dark";
        document.getElementById("btn").style.color="black";
        i--;
    }
}