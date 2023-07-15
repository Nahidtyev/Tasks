
for(var i=1;i<100;i++){
    if(i%5==0 && i>10) {
            var j=i%7;
            if(j%2==0){
                console.log(i);
            }
            else{
                console.log("qalıq" + " " + j);
            }
    }
}


 function myput(){
    var a = document.getElementById("area");
    var b = document.getElementById("inputField").value;
    a.textContent = b;
}

function hide() {
    let b = document.getElementById("inputField");
    
    if (b.type === "password") {
        b.type = "text";
    }
    else {
        b.type = "password";
    }
}

