function checkButton() {    
    var getSelectedValue = document.querySelector(   
        'input[name="season"]:checked');   
        
    if(getSelectedValue != null) {   
        document.getElementById("disp").innerHTML   
            = getSelectedValue.value   
            + " season is selected";   
    }   
    else {   
        document.getElementById("error").innerHTML   
            = "*You have not selected any season";   
    }   
} 