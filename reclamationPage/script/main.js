function valideReclamation() {
    let erreur = document.getElementById("erreur");
    let input_group = document.getElementsByClassName("input-form");
    console.log(input_group);
    let i = 0;
    for (i = 0; i < input_group.length; i++) {
        if (input_group[i].value == "") {
            input_group[i].style.border = "2px solid red";
            erreur.innerHTML = "please fill all the fields";
            return false;
        }
    }
    return true;
}