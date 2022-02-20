function checkButton() {    
    var percent = document.querySelector(   
        'input[name="goalpercent"]:checked');  
    var name = document.querySelector(   
        'input[name="goal"]:checked');    
        
    if(getSelectedValue != null) {   
        document.getElementById("name").innerHTML   
            = name.value   
            + " season is selected";   
    }  
    
    if(getSelectedValue != null) {   
        document.getElementById("prog").innerHTML   
            = percent.value   
            + " season is selected";   
    }   
} 