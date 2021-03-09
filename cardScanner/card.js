var Environment = "06EC06000020335928B11987032600000000000479EFF8C00000000000"
var Travel_Dump = "11338AA8176601FB72910302CD22053142F800000000000000000000B3"
const BITS_OF_HEX = 4

function partOfBin(num, begin, len) {
    return num.substr(begin, len)
}


function hexTobin_digit(hex) {
    var base2 = parseInt(hex.toString(), 16).toString(2)
    var begin_zeros = ("0".repeat(BITS_OF_HEX - base2.length))
    return begin_zeros + base2
}
function hexTobin(hex) {
    var result = ""
    console.log(hex.length)
    for (var i = 0; i < hex.length; i++) {
        result = result + hexTobin_digit(hex[i])
    }
    return result
}
function binTohex_digit(bin) {
    var base16 = parseInt(bin, 2).toString(16).toUpperCase();
    console.log(base16)
    return base16
}
function binTohex(bin) {
    var result = ""
    bin="0".repeat(BITS_OF_HEX-(bin.length%BITS_OF_HEX))+bin
    for (var i = 0; i <bin.length; i += BITS_OF_HEX) {
        result = result + binTohex_digit(bin.substr(i, BITS_OF_HEX))
    }
    return result
}
function appendTable(keys, values) {
    for (j = 0; j < keys.length; j++) {
        var table = document.getElementById("t");
        var row = table.insertRow(document.getElementById("t").length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = keys[j];
        cell2.innerHTML = values[j];

    }
}
function get_info() {
    var values = []
    var start = 0
    var envDataStructure = ['EnvCountryId', 'EnvIssuerId', 'EnvApplicationNumber', 'EnvIssuingDate', 'EnvEndDate', 'EnvPayMethod', 'HolderBirthDate',
        'HolderCompany', 'HolderCompanyID', 'HolderIdNumber', 'HolderProf1Code', 'HolderProf1Date', 'HolderProf2Code', 'HolderProf2Date',
        'HolderLanguage', 'HolderRFU']
    var arr = [3, 12, 8, 26, 14, 14, 3, 32, 14, 30, 30, 6, 14, 6, 14, 6]
    var binary_prof = hexTobin(Environment);
    for (var i = 0; i < arr.length; i++) {
        values.push(binTohex(binary_prof.substr(start, arr[i]))+"'h")
        start += arr[i]
    }
    appendTable(envDataStructure, values)
}