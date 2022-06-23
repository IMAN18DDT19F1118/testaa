function applicationform() {
    var name = document.getElementById("nama").value;
    var phone = document.getElementById("phone").value;
    var idcar = document.getElementById("carid").value;
    var model = document.getElementById("carmodel").value;

   
    var exp = document.getElementById("slider").value;
    
   
    if (name && phone && exp && idcar && model) {
        if (confirm("Are you sure to Send?")) {
            alert("Thank you..");
        }
        else {
            alert("Make sure all information is correct..");
        }
    }
    else {
        alert("Incomplete Form!!");
    }
}    
