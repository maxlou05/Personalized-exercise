function checkButton() {  
    var getSelectedValue = document.querySelector( 
        'input[name="intensity"]:checked'); 
      
    if(getSelectedValue != null) { 
        document.getElementById("disp").innerHTML 
            = getSelectedValue.value 
            + " intensity is selected"; 
    } 
    else { 
        document.getElementById("error").innerHTML 
            = "*You have not selected any season"; 
    } 
}  