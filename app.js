// Form

// function validate() {
//     var exp = /^[a-zA-Z0-9_-]+$/;
//     var fname = document.myform.fname.value;
//     var result = exp.test(fname);


//     if (result) {
//         alert("Validation Successfully");
//     } else {
//         document.getElementById("err").innerHTML = "please enter alpha numeric value only";
//         document.myform.fname.focus();
//         return false;
//     }
// }


// function validate() {
//     var exp = /^[A-Za-z0-9\s]+$/;
//     var address = document.myform.address.value;
//     var result = exp.test(address);

//     if (result) {
//         alert("Validation Successfully");
//     } else {
//         document.getElementById("err6").innerHTML = "Please enter Bank address only";
//         document.myform.address.focus();
//         return false;
//     }
// }


function validate() {
    var exp = /^[a-zA-Z0-9_-]+$/;
    var fname = document.myform.fname.value;
    var result = exp.test(fname);


    if (result) {
        alert("Validation Successfully");
    } else {
        document.getElementById("err").innerHTML = "Please enter alpha numeric value";
        document.myform.fname.focus();
        return false;
    }

    var exp = /^[a-zA-Z ]+$/;
    var holdername = document.myform.holdername.value;
    var result = exp.test(holdername);

    if (result) {
        alert("Validation Successfully");
    } else {
        document.getElementById("err1").innerHTML = "Please enter A/c holder name";
        document.myform.holdername.focus();
        return false;
    }

    var exp = /^[0-9-]+$/;
    var accountnumber = document.myform.accountnumber.value;
    var result = exp.test(accountnumber);

    if (result) {
        alert("Validation Successfully");
    } else {
        document.getElementById("err2").innerHTML = "Please enter A/c number";
        document.myform.accountnumber.focus();
        return false;
    }

    var exp = /^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})+$/;
    var swiftcode = document.myform.swiftcode.value;
    var result = exp.test(swiftcode);

    if (result) {
        alert("Validation Successfully");
    } else {
        document.getElementById("err3").innerHTML = "Please enter Swift Code";
        document.myform.swiftcode.focus();
        return false;
    }

    var exp = /^[a-zA-Z0-9 ]+$/;
    var bankname = document.myform.bankname.value;
    var result = exp.test(bankname);

    if (result) {
        alert("Validation Successfully");
    } else {
        document.getElementById("err4").innerHTML = "Please fill Bank A/C Name";
        document.myform.bankname.focus();
        return false;

    }

    var exp = /^[a-zA-Z]+$/;
    var country = document.myform.country.value;
    var result = exp.test(country);

    if (result) {
        alert("validation Successfully");
    } else {
        document.getElementById("err5").innerHTML = "Please fill the Bank country name";
        document.myform.country.focus();
        return false;
    }


    var exp = /^[A-Za-z0-9\s]+$/;
    var address = document.myform.address.value;
    var result = exp.test(address);

    if (result) {
        alert("Validation Successfully");
    } else {
        document.getElementById("err6").innerHTML = "Please enter Bank address only";
        document.myform.address.focus();
        return false;
    }

    var exp = /^[A-Za-z0-9\s]+$/;
    var address1 = document.myform.address1.value;
    var result = exp.test(address1);

    if (result) {
        alert("Validation Successfully");
    } else {
        document.getElementById("err7").innerHTML = "Please enter Address only";
        document.myform.address1.focus();
        return false;
    }

    var exp = /^[a-zA-Z ]+$/;
    var bankstate = document.myform.bankstate.value;
    var result = exp.test(bankstate);

    if (result) {
        alert("Validation Successfully");
    } else {
        document.getElementById("err8").innerHTML = "Please fill the state name";
        document.myform.bankstate.focus();
        return false;
    }

    var exp = /^[A-Za-z ]+$/;
    var bankcity = document.myform.bankcity.value;
    var result = exp.test(bankcity);

    if (result) {
        alert("Validation Successfully");
    } else {
        document.getElementById("err9").innerHTML = "Please fill the city"
        document.myform.bankcity.focus();
        return false;
    }

    var exp = /^[a-zA-Z ]+$/;
    var bankcountry = document.myform.bankcountry.value;
    var result = exp.test(bankcountry);

    if (result) {
        alert("Validation Successfully");
    } else {
        document.getElementById("err10").innerHTML = "Please fill the Country name";
        document.myform.bankcountry.focus();
        return false;
    }

    var exp = /^[a-z0-9][a-z0-9\\-]{0,10}[a-z0-9]$/;
    var postalcode = document.myform.postalcode.value;
    var result = exp.test(postalcode);

    if (result) {
        alert("Validation Successfully");
    } else {
        document.getElementById("err11").innerHTML = "Please fill the Postal Code";
        document.myform.postalcode.focus();
        return false;
    }



    var exp = /^[a-z0-4-][a-z0-4-\\-]{0,10}[a-z0-4-]+$/;
    var sortcode = document.myform.sortcode.value;
    var result = exp.test(sortcode);

    if (result) {
        alert("Validation Successfully");
    } else {
        document.getElementById("err12").innerHTML = "Please fill the Sort Code";
        document.myform.sortcode.focus();
        return false;
    }


    var exp = /^[a-z0-7][a-z0-7\\-]{0,10}[a-z0-7]+$/;
    var transitcode = document.myform.transitcode.value;
    var result = exp.test(transitcode);

    if (result) {
        alert("Validation Successfully");
    } else {
        document.getElementById("err13").innerHTML = "Please fill the transit Code";
        document.myform.transitcode.focus();
        return false;
    }


    var exp = /^[a-z0-6][a-z0-6\\-]{0,10}[a-z0-6]+$/;
    var bsbnumber = document.myform.bsbnumber.value;
    var result = exp.test(bsbnumber);

    if (result) {
        alert("Validation Successfully");
    } else {
        document.getElementById("err14").innerHTML = "Please fill the Bsb Number";
        document.myform.bsbnumber.focus();
        return false;
    }


    var exp = /^[a-z0-9][a-z0-9\\-]{0,10}[a-z0-9]+$/;
    var routingnumber = document.myform.routingnumber.value;
    var result = exp.test(routingnumber);

    if (result) {
        alert("Validation Successfully");
    } else {
        document.getElementById("err15").innerHTML = "Please fill the Routing Number";
        document.myform.routingnumber.focus();
        return false;
    }
}




// var exp = /^\\d+$/;
// var routingnumber = document.myform.routingnumber.value;
// var result = exp.test(routingnumber);

// if (result) {
//     alert("Validation Successfully");
// } else {
//     document.getElementById("err15").innerHTML = "Please fill the Routing No.";
//     document.myform.routingnumber.focus();
//     return false;
// }


// a-zA-Z


































// function validateForm() {
//     let exp = /^[a-zA-Z0-9_-]+$/;
//     let fname = document.myForm.fname.value;
//     let result = exp.test(fname);


//     if (result) {
//         alert("Validation Successfully");
//         return true;
//     } else {
//         document.getElementById("err").innerHTML = "please enter alpha numeric value only";
//         document.myForm.focus;
//         return false;
//     }

// function validateForm() {
//     let exp1 = /^[a-zA-Z]+$/;
//     let fname1 = document.myForm.fname1.value;
//     let result1 = exp1.test(fname1);

//     if (result1) {
//         alert("Validation Successfully");
//         return true;
//     } else {
//         document.getElementById("err1").innerHTML = "please enter A/c holder name only";
//         document.myForm.focus;
//         return false;
//     }
//     return true;

// }
// }








































// function validateForm() {
//     var exp = /^[a-zA-Z0-9_-]*$/;
//     var fname = document.myForm.fname.value;
//     var result = exp.test(fname);


//     if (result == "") {
//         alert("Validation Successfully");
//     } else {
//         document.getElementById("err").innerHTML = "please enter alpha numeric value only";
//         document.myForm.focus;
//         return false;
//     }
// }


// function validateForm() {
//     var exp = /^[a-zA-Z ]*$/;
//     var fname1 = document.myForm.fname1.value;
//     var result = exp.test(fname1);

//     if (result) {
//         alert("Validation Successfully");
//     } else {
//         document.getElementById("err1").innerHTML = "please enter A/c holder name only";
//         document.myForm.focus;
//         return false;
//     }
// }

// function validateForm() {
// var exp = /^[0-9-]*$/;
// var fname2 = document.myForm.fname2.value;
// var result = exp.test(fname2);

// if (result) {
//     alert("Validation Successfully");
// } else {
//     document.getElementById("err2").innerHTML = "please enter A/c number only";
//     document.myForm.focus;
//     return false;
// }
// }

// function validateForm() {
//     var exp = /^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})*$/;
//     var fname3 = document.myForm.fname3.value;
//     var result = exp.test(fname3);

//     if (result) {
//         alert("Validation Successfully");
//     } else {
//         document.getElementById("err3").innerHTML = "Please enter Swift Code only";
//         document.myForm.focus;
//         return false;
//     }
// }

// function validateForm() {
//     var exp = /^[a-zA-Z0-9]*$/;
//     var fname4 = document.myForm.fname4.value;
//     var result = exp.test(fname4);

//     if (result) {
//         alert("Validation Successfully");
//     } else {
//         document.getElementById("err4").innerHTML = "Please enter Bank name only";
//         document.myForm.focus;
//         return false;
//     }
// }


// function validateForm() {
//     var exp = /^[a-zA-Z]*$/;
//     var fname5 = document.myForm.fname5.value;
//     var result = exp.test(fname5);

//     if (result) {
//         alert("Validation Successfully");
//     } else {
//         document.getElementById("err5").innerHTML = "Please enter Bank country only";
//         document.myForm.focus;
//         return false;
//     }
// }

// function validateForm() {
//     var exp = /^[A-Za-z0-9.,-]*$/;
//     var fname6 = document.myForm.fname6.value;
//     var result = exp.test(fname6);

//     if (result) {
//         alert("Validation Successfully");
//     } else {
//         document.getElementById("err6").innerHTML = "Please enter Bank address only";
//         document.myForm.focus;
//         return false;
//     }
// }

// function validateForm() {
//     var exp = /^[A-Za-z0-9.,-]*$/;
//     var fname7 = document.myForm.fname7.value;
//     var result = exp.test(fname7);

//     if (result) {
//         alert("Validation Successfully");
//     } else {
//         document.getElementById("err7").innerHTML = "Please enter Address only";
//         document.myForm.focus;
//         return false;
//     }
// }


// function validateForm() {
//     var exp = /^[A-Za-z]*$/;
//     var fname8 = document.myForm.fname8.value;
//     var result = exp.test(fname8);

//     if (result) {
//         alert("Validation Successfully");
//     } else {
//         document.getElementById("err8").innerHTML = "Please enter State only";
//         document.myForm.focus;
//         return false;
//     }
// }

// function validateForm() {
//     var exp = /^[A-Za-z]*$/;
//     var fname9 = document.myForm.fname9.value;
//     var result = exp.test(fname9);

//     if (result) {
//         alert("Validation Successfully");
//     } else {
//         document.getElementById("err9").innerHTML = "Please enter City only";
//         document.myForm.focus;
//         return false;
//     }
// }


// function validateForm() {
//     var exp = /^[a-zA-Z]*$/;
//     var fname10 = document.myForm.fname10.value;
//     var result = exp.test(fname10);

//     if (result) {
//         alert("Validation Successfully");
//     } else {
//         document.getElementById("err10").innerHTML = "Please enter Country only";
//         document.myForm.focus;
//         return false;
//     }
// }

// function validateForm() {
//     var exp = /^[a-z0-9][a-z0-9\\-]{0,10}[a-z0-9]*$/;
//     var fname11 = document.myForm.fname11.value;
//     var result = exp.test(fname11);

//     if (result) {
//         alert("Validation Successfully");
//     } else {
//         document.getElementById("err11").innerHTML = "Please enter Postal Code only";
//         document.myForm.focus;
//         return false;
//     }
// }

// function validateForm() {
//     var exp = /^\\d{2}([-\\s])\\d{2}\\1\\d{2}$/;
//     var fname12 = document.myForm.fname12.value;
//     var result = exp.test(fname12);

//     if (result) {
//         alert("Validation Successfully");
//     } else {
//         document.getElementById("err12").innerHTML = "Please enter Sort Code only";
//         document.myForm.focus;
//         return false;
//     }
// }


// function validateForm() {
//     var exp = /^\\d*$/;
//     var fname13 = document.myForm.fname13.value;
//     var result = exp.test(fname13);

//     if (result) {
//         alert("Validation Successfully");
//     } else {
//         document.getElementById("err13").innerHTML = "Please enter Transit Code only";
//         document.myForm.focus;
//         return false;
//     }
// }

// function validateForm() {
//     var exp = /^\\d{6}$/;
//     var fname14 = document.myForm.fname14.value;
//     var result = exp.test(fname14);


//     if (result) {
//         alert("Validation Successfully");
//     } else {
//         document.getElementById("err14").innerHTML = "Please enter Bsb Number only";
//         document.myForm.focus;
//         return false;
//     }
// }

// function validateForm() {
//     var exp = /^[d]*$/;
//     var fname15 = document.myForm.fname15.value;
//     var result = exp.test(fname15);

//     if (result) {
//         alert("Validation Successfully");
//     } else {
//         document.getElementById("err15").innerHTML = "Please enter Routing Number only";
//         document.myForm.focus;
//         return false;
//     }
// }