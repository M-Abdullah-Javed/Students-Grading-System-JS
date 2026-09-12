function calculate(){
    let math = Number(document.getElementById("Math").value);
    let physics = Number(document.getElementById("Physics").value);
    let English = Number(document.getElementById("English").value);
    let Urdu = Number(document.getElementById("urdu").value);
    let computer = Number(document.getElementById("Computer").value);
    let islamiat = Number(document.getElementById("Islamiat").value);

    let total= math + physics + English + Urdu + computer + islamiat;
    let average = total/6;
    let percentage = (total/600)*100
    let grade = "";

    if(percentage>=80){
        grade = "A";
    }else if(percentage>=75){
        grade = "B+";
    }else if(percentage>=70){
        grade = "B";
    }else if(percentage>=65){
        grade = "C+";
    }else if(percentage>=60){
        grade = "C";
    }else if(percentage>=50){
        grade = "D";
    }else{
        grade = "F";
    }

    document.getElementById("total-marks").innerHTML = `${total}/600`;
    document.getElementById("Percentage").innerHTML = `${percentage.toFixed(2)}%`;
    document.getElementById("Average").innerHTML = `${average.toFixed(2)}`;
    document.getElementById("Grade").innerHTML = grade   
};

function resetform(){
    let input = document.querySelectorAll("input");

    input.forEach(input =>{
        input.value="";
    });

    document.getElementById("total-marks").innerHTML = "0/600";
    document.getElementById("Percentage").innerHTML = "0%";
    document.getElementById("Average").innerHTML = "0";
    document.getElementById("Grade").innerHTML = "N/A";
}