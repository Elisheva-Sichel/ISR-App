function isValid(id) {
    var id = String(id).trim();
    if (id.length > 9 || id.length < 5 || isNaN(id)) return false;

    // Pad string with zeros up to 9 digits
    id = id.length < 9 ? ("00000000" + id).slice(-9) : id;
    return Array
        .from(id, Number)
        .reduce((counter, digit, i) => {
            const step = digit * ((i % 2) + 1);
            return counter + (step > 9 ? step - 9 : step);
        }) % 10 === 0;
}
function func(id, name) {
    if (isValid(id)) {
        document.getElementById("details").style.display = "none"
        //document.getElementById("masege").style.display="block"
        document.getElementById("bless").textContent = "welcome " + name + ", Your details have been successfully received!"
        document.getElementById("bless").style.display = "block"

    }
    else {


        alert("The id field is incorrect")
    }
}