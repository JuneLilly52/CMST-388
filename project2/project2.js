document.querySelector("form").addEventListener("submit", function(event){
//Error String that will collect all the errors and list them collectively after initial submission
    var errors = "";

    //First Name
        //calls id listed in html; .trim takes away any spaces before or after valid characters; first name required; errors takes any existing errors and adds it to a counter of all errors
    var fname=document.getElementById("fname").value;
    if (fname.trim()===""){
        errors = errors + "First name required; ";
    }
        
    //Last Name
        //calls id listed in html; .trim takes away any spaces before or after valid characters; last name required; errors takes any existing errors and adds it to a counter of all errors
    var lname=document.getElementById("lname").value;
    if (lname.trim()===""){
        errors = errors + "Last name required; ";
    }
    //Zip Code
        //calls id listed in html; checks if zipcode entry is 5 digits or if it is numbers; if both fail, sent to error counter
    if (zipcode.length!=5 || isNaN(zipcode)){
        errors = errors + "Zipcode must be 5 digits long; ";
    }
    // Address Field: Alphanumeric characters
         //regular expression used; tests if the input is alphanumeric, allows lowercase, uppercase, numbers, and spaces; if false, error sent to errror counter
    var alphanum_regex = new RegExp('^[A-Za-z0-9 ]+$')
    var address=document.getElementById("address").value;
    if (alphanum_regex.test(address)===false){
        errors = errors + "Invalid Address; ";
  
    }

    // City: Alpha only
        //regular expression used, tests if input is alphabetical, allows lowercase, uppercase, and spaces; if error occurs sent to error counter
    var alpha_regex = new RegExp('^[A-Za-z ]+$')
    var city=document.getElementById("city").value;
    if (alpha_regex.test(city)===false){
        errors = errors + "Invalid City; ";

    }
  
    // State: (Selected from a pull down menu) The user must select a state.
        //if the option is left blank, error sent to error counter
    var state=document.getElementById("state").value;
    if (state===''){
        errors = errors + "No State Selected; ";

    }
   

    //Phone Number - Area Code and Phone Number
        // area code and phone number are split into two separate checks; both check is length requirement is met (3 and 7 respectively) and if it is not a number; if error occurs, sent to error counter
    var area_code=document.getElementById("area_code").value;
    if (area_code.length!=3 || isNaN(area_code)){
        document.getElementById("error").textContent="Area Code must be 3 digits long";
        errors = errors + "Area Code must be 3 digits long; ";
    }
        // area code and phone number are split into two separate checks; both check is length requirement is met (3 and 7 respectively) and if it is not a number; if error occurs, sent to error counter
    var phone_number=document.getElementById("phone_number").value;
    if (phone_number.length!=7 || isNaN(phone_number)){
        errors = errors + "Phone number must be 7 digits long; ";
    }

    //Email Address
        //the first if statement explains that if there are multiple asterisks in the string, it is an invalid response and be sent to the error counter
        //the two else if statements splits the email string into two separate strings, the username part and the domain part (split by the asterisk, @), these strings are labeled as zero and one
        // the boolean logic states that post-split, it checks both strings for their length (64 and 252 characters in length, respectively)
        //if error occurs, sent to the errors counter
    var email=document.getElementById("e_mail").value;
    var split_email=email.split('@');
    if (split_email.length!=2){
        errors = errors + "You have entered an invalid email address; ";
    }
    else if (split_email[0].length===0 || split_email[0].length > 64){
        errors = errors + "You have entered an invalid email address; ";
    }
    else if (split_email[1].length===0 || split_email[1].length > 252){
        errors = errors + "You have entered an invalid email address; ";
    }
    
    //Confirm Email
        //this takes var email and compares it to the input for confirm_email, if they don't match, it gets sent to the error counter
    var confirm_email=document.getElementById("confirm_email").value;
    if (email!=confirm_email){
        errors = errors + "Emails do not match, please re-enter; ";
    }
    //Meal Preference
        // all three variable options are listed - non_veg, veggie, and vegan, if none of the options are checked, it's sent to the error counter
    var non_veg=document.getElementById("non_veg");
    var veggie=document.getElementById("veggie");
    var vegan=document.getElementById("vegan");

    if (non_veg.checked===false && veggie.checked===false && vegan.checked===false){
        errors = errors + "Please select one of the meal options above; ";
    }
    //Contact Method
        //you must check off at least two options and up to four methods of contact
        //all four variable options are listed, phone number, email, snail mail, and linkedin; the fifth variable listed is contact_opts (contact methods)
        //this creates a counter that adds each option that is checked off to a mini-counter
        //if one or no options are checked , an error is sent to the error counter
    var phonenum=document.getElementById("phonenum");
    var email_choice=document.getElementById("email_choice");
    var snailmail=document.getElementById("snailmail");
    var linkedin=document.getElementById("linkedin");
    var contact_opts=0;

    if (phonenum.checked===true){
        contact_opts = contact_opts + 1;
    }
    if (email_choice.checked===true){
        contact_opts = contact_opts + 1;
    }
    if (snailmail.checked===true){
        contact_opts = contact_opts + 1;
    }
    if (linkedin.checked===true){
        contact_opts = contact_opts + 1;
    }
    if (contact_opts<2){
        errors = errors + "Please select two or more contact methods; ";
    }


    //Comments
        //the comment must be no more than 250 characters
        //length is measured and if exceeds length, you guessed it! IT GOES TO THE ERROR COUNTER
    var comment=document.getElementById("comment");
    if (comment.length>250){
        errors = errors + "Comment can be no more than 250 characters long; ";
    }
    //Errors
        //this lists all the errors accumulated and separated by a semicolon and a space    
    if (errors!=""){
        event.preventDefault();
        document.getElementById("error").textContent=errors;
    }
});
//Reset
    //this resets the original options, if the user hits the reset button
document.querySelector("form").addEventListener("reset", function(event){

    //First Name
    var fname=document.getElementById("fname").value;
    fname="Jane";
    //Last Name
    var lname=document.getElementById("lname").value;
    lname="Doe";
    //Zip Code
    var zipcode=document.getElementById("zipcode").value;
    zipcode="";
    // Address Field: Alphanumeric characters
    var address=document.getElementById("address").value;
    address="";
    // City: Alpha only
    var city=document.getElementById("city").value;
    city="";
    // State: (Selected from a pull down menu) The user must select a state.
    var state=document.getElementById("state").value;
    state="";

    //Phone Number - Area Code and Phone Number
    var area_code=document.getElementById("area_code").value;
    area_code="";
    var phone_number=document.getElementById("phone_number").value;
    phone_number="";
    

    //Email Address
    var email=document.getElementById("e_mail").value;
    email="";
    
    //Confirm Email
    var confirm_email=document.getElementById("confirm_email").value;
    confirm_email="";
    //Meal Preference
    var non_veg=document.getElementById("non_veg");
    non_veg.checked=false;
    var veggie=document.getElementById("veggie");
    veggie.checked=false;
    var vegan=document.getElementById("vegan");
    vegan.checked=false;

    //Contact Method
    var phonenum=document.getElementById("phonenum");
    phonenum.checked=false;
    var email_choice=document.getElementById("email_choice");
    email_choice.checked=false;
    var snailmail=document.getElementById("snailmail");
    snailmail.checked=false;
    var linkedin=document.getElementById("linkedin");
    linkedin.checked=false;
    
    //Comments
    var comment=document.getElementById("comment");
    comment="Write Comments Here";
});