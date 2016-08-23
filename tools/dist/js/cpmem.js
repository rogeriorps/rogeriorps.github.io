
var w0b0hex = "0", w0b1hex = "0", w0b2hex = "0", w0b3hex = "0";
var w0b0hex2bin = "0", w0b1hex2bin = "0", w0b2hex2bin = "0", w0b3hex2bin = "0";
var w1b0hex = "0", w1b1hex = "0", w1b2hex = "0", w1b3hex = "0";
var w1b0hex2bin = "0", w1b1hex2bin = "0", w1b2hex2bin = "0", w1b3hex2bin = "0";
var w0bin = "0", w1bin = "0";
var w0bin2hex = "0", w1bin2hex = "0";


// ni = ["name", "word", "start", "size", "HEX", "BIN", "DEC"]

var ni = [
    ["xv", 0, 0, 10, "0", "0", "0"],["yv", 0, 10, 9, "0", "0", "0"],
    ["xb", 0, 19, 13, "0", "0", "0"],["yb", 0, 32, 12, "0", "0", "0"],
    ["nsbb", 0, 44, 1, "0", "0", "0"],["cf", 0, 45, 1, "0", "0", "0"],
    ["ubo", 0, 46, 22, "0", "0", "0"],["vbo", 0, 68, 22, "0", "0", "0"],
    ["iox", 0, 90, 4, "0", "0", "0"],["rdrw", 0, 94, 1, "0", "0", "0"],
    ["so", 0, 113, 1, "0", "0", "0"],["bndm", 0, 114, 3, "0", "0", "0"],
    ["bm", 0, 117, 2, "0", "0", "0"],["rot", 0, 119, 1, "0", "0", "0"],
    ["hf", 0, 120, 1, "0", "0", "0"],["vf", 0, 121, 1, "0", "0", "0"],
    ["the", 0, 122, 1, "0", "0", "0"],["cap", 0, 123, 1, "0", "0", "0"],
    ["cae", 0, 124, 1, "0", "0", "0"],["fw", 0, 125, 13, "0", "0", "0"],
    ["fh", 0, 138, 12, "0", "0", "0"],["eoli", 0, 150, 1, "0", "0", "0"],
    
    ["eba0", 1, 0, 29, "0", "0", "0"],["eba1", 1, 29, 29, "0", "0", "0"],
    ["ilo", 1, 58, 20, "0", "0", "0"],["npb", 1, 78, 8, "0", "0", "0"],
    ["pfs", 1, 85, 4, "0", "0", "0"],["alu", 1, 89, 1, "0", "0", "0"],
    ["albm", 1, 90, 2, "0", "0", "0"],["id", 1, 93, 2, "0", "0", "0"],
    ["th", 1, 95, 7, "0", "0", "0"],["sly", 1, 102, 14, "0", "0", "0"],
    ["wid3", 1, 125, 3, "0", "0", "0"],["sluv", 1, 128, 14, "0", "0", "0"],
    ["cre", 1, 149, 1, "0", "0", "0"]  
];

var intl = [
    ["xv", 0, 0, 10, "0", "0", "0"],["yv", 0, 10, 9, "0", "0", "0"],
    ["xb", 0, 19, 13, "0", "0", "0"],["yb", 0, 32, 12, "0", "0", "0"],
    ["nsbb", 0, 44, 1, "0", "0", "0"],["cf", 0, 45, 1, "0", "0", "0"],
    ["ubo", 0, 46, 22, "0", "0", "0"],["vbo", 0, 68, 22, "0", "0", "0"],
    ["iox", 0, 90, 4, "0", "0", "0"],["rdrw", 0, 94, 1, "0", "0", "0"],
    ["so", 0, 113, 1, "0", "0", "0"],["bndm", 0, 114, 3, "0", "0", "0"],
    ["bm", 0, 117, 2, "0", "0", "0"],["rot", 0, 119, 1, "0", "0", "0"],
    ["hf", 0, 120, 1, "0", "0", "0"],["vf", 0, 121, 1, "0", "0", "0"],
    ["the", 0, 122, 1, "0", "0", "0"],["cap", 0, 123, 1, "0", "0", "0"],
    ["cae", 0, 124, 1, "0", "0", "0"],["fw", 0, 125, 13, "0", "0", "0"],
    ["fh", 0, 138, 12, "0", "0", "0"],["eoli", 0, 150, 1, "0", "0", "0"],
    
    ["eba0", 1, 0, 29, "0", "0", "0"],["eba1", 1, 29, 29, "0", "0", "0"],
    ["ilo", 1, 58, 20, "0", "0", "0"],["npb", 1, 78, 8, "0", "0", "0"],
    ["pfs", 1, 85, 4, "0", "0", "0"],["alu", 1, 89, 1, "0", "0", "0"],
    ["albm", 1, 90, 2, "0", "0", "0"],["id", 1, 93, 2, "0", "0", "0"],
    ["th", 1, 95, 7, "0", "0", "0"],["sly", 1, 102, 14, "0", "0", "0"],
    ["wid3", 1, 125, 3, "0", "0", "0"],["sluv", 1, 128, 14, "0", "0", "0"],
    ["cre", 1, 149, 1, "0", "0", "0"]  
];

var reghex8char = new RegExp(/^[A-Fa-f0-9]{8}$/i);


//Hex fields blur
$("#w0b0hex").blur(function(){
    w0b0hex = $("#w0b0hex").val();

    if (!reghex8char.test(w0b0hex))
        alert('Please, fill with a 8-digit hex value. E.g. 1234abcd');
    
    ret = hexToBinary(w0b0hex);
    w0b0hex2bin = ret['result'];
    update_word0_bin();
    update_ni();
});

$("#w0b1hex").blur(function(){
    w0b1hex = $("#w0b1hex").val();
    
    if (!reghex8char.test(w0b1hex))
        alert('Please, fill with a 8-digit hex value. E.g. 1234abcd');    
    
    ret = hexToBinary(w0b1hex);
    w0b1hex2bin = ret['result'];
    update_word0_bin();
    update_ni();
});

$("#w0b2hex").blur(function(){
    w0b2hex = $("#w0b2hex").val();
    
    if (!reghex8char.test(w0b2hex))
        alert('Please, fill with a 8-digit hex value. E.g. 1234abcd');    
    
    ret = hexToBinary(w0b2hex);
    w0b2hex2bin = ret['result'];
    update_word0_bin();
    update_ni();
});

$("#w0b3hex").blur(function(){
    w0b3hex = $("#w0b3hex").val();
    
    if (!reghex8char.test(w0b3hex))
        alert('Please, fill with a 8-digit hex value. E.g. 1234abcd');    
    
    ret = hexToBinary(w0b3hex);
    w0b3hex2bin = ret['result'];
    update_word0_bin();
    update_ni();
});

$("#w1b0hex").blur(function(){
    w1b0hex = $("#w1b0hex").val();

    if (!reghex8char.test(w1b0hex))
        alert('Please, fill with a 8-digit hex value. E.g. 1234abcd');
    
    ret = hexToBinary(w1b0hex);
    w1b0hex2bin = ret['result'];
    update_word1_bin();
    update_ni();
});

$("#w1b1hex").blur(function(){
    w1b1hex = $("#w1b1hex").val();
    
    if (!reghex8char.test(w1b1hex))
        alert('Please, fill with a 8-digit hex value. E.g. 1234abcd');    
    
    ret = hexToBinary(w1b1hex);
    w1b1hex2bin = ret['result'];
    update_word1_bin();
    update_ni();
});

$("#w1b2hex").blur(function(){
    w1b2hex = $("#w1b2hex").val();
    
    if (!reghex8char.test(w1b2hex))
        alert('Please, fill with a 8-digit hex value. E.g. 1234abcd');    
    
    ret = hexToBinary(w1b2hex);
    w1b2hex2bin = ret['result'];
    update_word1_bin();
    update_ni();
});

$("#w1b3hex").blur(function(){
    w1b3hex = $("#w1b3hex").val();
    
    if (!reghex8char.test(w1b3hex))
        alert('Please, fill with a 8-digit hex value. E.g. 1234abcd');    
    
    ret = hexToBinary(w1b3hex);
    w1b3hex2bin = ret['result'];
    update_word1_bin();
    update_ni();
});

//Bin fields blur
$("#w0bin").blur(function(){

    w0bin = $("#w0bin").val();
    ret = binaryToHex(w0bin);
    w0bin2hex = ret['result'];
    update_word0_hex();
    update_ni();
 
});

function update_word0_bin(){

    value = w0b0hex2bin.concat(w0b1hex2bin);
    value = value.concat(w0b2hex2bin);
    value = value.concat(w0b3hex2bin); 
    w0bin = value;
    $("#w0bin").val(value);
}

function update_word1_bin(){

    value = w1b0hex2bin.concat(w1b1hex2bin);
    value = value.concat(w1b2hex2bin);
    value = value.concat(w1b3hex2bin); 
    w1bin = value;
    $("#w1bin").val(value);
}

function update_word0_hex(){
    
    w0b0hex = w0bin2hex.substr(0,4);
    w0b1hex = w0bin2hex.substr(4,4);
    w0b2hex = w0bin2hex.substr(8,4);
    w0b3hex = w0bin2hex.substr(12,4);
    
    $("#w0b0hex").val(w0b0hex);
    $("#w0b1hex").val(w0b1hex);
    $("#w0b2hex").val(w0b2hex);
    $("#w0b3hex").val(w0b3hex);
}

function update_ni(){
    
    for (i = 0; i < ni.length; i++) { 
        
        if (ni[i][1])
            binaryword = w1bin.substr(ni[i][2],ni[i][3]);
        else
            binaryword = w0bin.substr(ni[i][2],ni[i][3]);
        //update hex
        ret = binaryToHex(binaryword);
        ni[i][4] = ret["result"];
        var fieldname = "#ni_";
        fieldname = fieldname.concat(ni[i][0]);
        fieldname = fieldname.concat("_hex");
        $(fieldname).val(ni[i][4]);
        
        //update bin
        ni[i][5] = binaryword;
        var fieldname = "#ni_";
        fieldname = fieldname.concat(ni[i][0]);
        fieldname = fieldname.concat("_bin");
        $(fieldname).val(ni[i][5]);

        //update dec
        ret = parseInt(binaryword, 2);
        ni[i][6] = ret;
        var fieldname = "#ni_";
        fieldname = fieldname.concat(ni[i][0]);
        fieldname = fieldname.concat("_dec");
        $(fieldname).val(ni[i][6]);        
        
    }
    
}

function update_ni_hex(){
    
    ret = w0b0bin.substr(0,10);
    ret = binaryToHex(ret);
    ni_xv[0] = ret['result'];
    $("#ni_xv_hex").val(ni_xv[0]);
    
}

function update_ni_bin(){
    
    ret = w0b0bin.substr(0,10);
    ni_xv[1] = ret;
    $("#ni_xv_bin").val(ni_xv[1]);
    
}

function update_ni_dec(){
    
    ret = w0b0bin.substr(0,10);
    ret = parseInt(ret, 2);
    ni_xv[2] = ret;
    $("#ni_xv_dec").val(ni_xv[2]);
}

// converts binary string to a hexadecimal string
// returns an object with key 'valid' to a boolean value, indicating
// if the string is a valid binary string.
// If 'valid' is true, the converted hex string can be obtained by
// the 'result' key of the returned object
function binaryToHex(s) {
    var i, k, part, accum, ret = '';
    for (i = s.length-1; i >= 3; i -= 4) {
        // extract out in substrings of 4 and convert to hex
        part = s.substr(i+1-4, 4);
        accum = 0;
        for (k = 0; k < 4; k += 1) {
            if (part[k] !== '0' && part[k] !== '1') {
                // invalid character
                return { valid: false };
            }
            // compute the length 4 substring
            accum = accum * 2 + parseInt(part[k], 10);
        }
        if (accum >= 10) {
            // 'A' to 'F'
            ret = String.fromCharCode(accum - 10 + 'A'.charCodeAt(0)) + ret;
        } else {
            // '0' to '9'
            ret = String(accum) + ret;
        }
    }
    // remaining characters, i = 0, 1, or 2
    if (i >= 0) {
        accum = 0;
        // convert from front
        for (k = 0; k <= i; k += 1) {
            if (s[k] !== '0' && s[k] !== '1') {
                return { valid: false };
            }
            accum = accum * 2 + parseInt(s[k], 10);
        }
        // 3 bits, value cannot exceed 2^3 - 1 = 7, just convert
        ret = String(accum) + ret;
    }
    return { valid: true, result: ret };
}

// converts hexadecimal string to a binary string
// returns an object with key 'valid' to a boolean value, indicating
// if the string is a valid hexadecimal string.
// If 'valid' is true, the converted binary string can be obtained by
// the 'result' key of the returned object
function hexToBinary(s) {
    var i, k, part, ret = '';
    // lookup table for easier conversion. '0' characters are padded for '1' to '7'
    var lookupTable = {
        '0': '0000', '1': '0001', '2': '0010', '3': '0011', '4': '0100',
        '5': '0101', '6': '0110', '7': '0111', '8': '1000', '9': '1001',
        'a': '1010', 'b': '1011', 'c': '1100', 'd': '1101',
        'e': '1110', 'f': '1111',
        'A': '1010', 'B': '1011', 'C': '1100', 'D': '1101',
        'E': '1110', 'F': '1111'
    };
    for (i = 0; i < s.length; i += 1) {
        if (lookupTable.hasOwnProperty(s[i])) {
            ret += lookupTable[s[i]];
        } else {
            return { valid: false };
        }
    }
    return { valid: true, result: ret };
}
