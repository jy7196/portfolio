
document.getElementById("togglebutton").addEventListener("click", function(){
    var button = document.getElementById("togglebutton");
    if(button.innerHTML === "Experience"){
        button.innerHTML = "Education";
        document.getElementById("experience").className = "show";
        document.getElementById("education").className = "hide";

    }
else{        button.innerHTML = "Experience";
        document.getElementById("education").className = "show";
        document.getElementById("experience").className = "hide";

    }
})