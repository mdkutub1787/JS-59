

function submitForm(event) {

    event.preventDefault();

    let rName = document.getElementById('name').value;
    if (rName == "") {
        alert("plz inter ur full name");
        return;
    }
    else if (rName.length <= 4) {
        alert("plz inter the 4 charactare");
        return;

    }

    let email = document.getElementById('email').value;
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regEx.test(email)) {
    }
    else {
        alert("Enter  the valide email address")
        return;
    };

    let password = document.getElementById('password').value;

    if (password.length < 6 || password.length >= 20) {
        alert("plz inter the minimum 6 charactare");
        return;

    }

    let gender = document.querySelector('input[name="gender"]:checked');
    if (gender == null) {
        alert("plz inter ur sex");
        return;

    }




    let education = document.querySelectorAll('input[name="education"]:checked');
    if (education.length == 0) {
        alert("plz inter ur education");
        return;

    }

    let educationValue = [];
    for (let index = 0; index < education.length; index++) {
        educationValue.push(education[index].value);
    }

    // let hoobyValue = [];

    // hobby.forEach(
    //     function (hobby) {

    //         hoobyValue.push(hobby.value);
    //     }
    // );

    let round = document.getElementById('round').value;

    if (round == 'Select One') {
        alert("plz inter ur round");
        return;

    }


    let dob = document.getElementById("dob").value;
    if (dob == "") {
        alert("plz inter ur dob");
        return;
    }


    let address = document.getElementById("address").value;
    if (address == "") {
        alert("plz inter ur address");
        return;
    }



    let output = "Name: " + rName + "\n";
    output += "Email: " + email + "\n";
    output += "Password: " + password + "\n";
    output += "Gender: " + gender.value + "\n";
    output += "Education: " + educationValue + "\n";
    output += "Round: " + round + "\n";
    output += "DoB: " + dob + "\n";
    output += "Address: " + address + "\n";
   


    let newWindow = window.open("", '_blank');
    newWindow.document.write("<pre>" + output + "</pre>");
}

let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', submitForm);





