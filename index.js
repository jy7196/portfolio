
document.getElementById("toggleeducation").addEventListener("click", function(){
    var button = document.getElementById("toggleeducation");
    if(button.innerHTML === "Experience"){
        //button.innerHTML = "Education";
        document.getElementById("experience").className = "show";
        document.getElementById("education").className = "hide";
        button.style.backgroundColor="rgb(26, 24, 44)"
        document.getElementById("toggleexperience").style.backgroundColor="rgb(51, 48, 73)";

    }
else{        //button.innerHTML = "Experience";
        document.getElementById("education").className = "show";
        document.getElementById("experience").className = "hide";
        button.style.backgroundColor="rgb(26, 24, 44)"
        document.getElementById("toggleexperience").style.backgroundColor="rgb(51, 48, 73)";
    }
})
document.getElementById("toggleexperience").addEventListener("click", function(){
    var button = document.getElementById("toggleexperience");
    if(button.innerHTML === "Experience"){
        //button.innerHTML = "Education";
        button.style.backgroundColor="rgb(26, 24, 44)"
        document.getElementById("toggleeducation").style.backgroundColor="rgb(51, 48, 73)";

        document.getElementById("experience").className = "show";
        document.getElementById("education").className = "hide";

    }
else{       // button.innerHTML = "Experience";
        document.getElementById("education").className = "show";
        document.getElementById("experience").className = "hide";

    }
})