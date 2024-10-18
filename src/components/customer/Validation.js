const Validation=(values)=>
   {


    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.firstName === "") {
        error.firstName = "First Name should not be empty"
    } 
    if(values.lastName === "") {
        error.lastName = "Last Name should not be empty"
    } 
    if(values.phoneNumber === "") {
        error.phoneNumber = "Phone Number should not be empty"
    } 
    if(values.email === "") {
        error.email = "Email should not be empty"
    } 
    if(values.username === "") {
        error.username = "User Name should not be empty"
    } 
    if(values.address === "") {
        error.address = "Address should not be empty"
    } 
    else if(!email_pattern.test(values.email)) {
        error.email = "Email Didn't match"
    }
    if(values.password === "") {
        error.password = "Password should not be empty"
    } 
    // else if(!password_pattern.test(values.password)) {
    //     error.password = "Password didn't match"
    // }
    
    if(values.cpassword === "" || String(values.cpassword) !== String(values.password)) {
        console.log(values.cpassword + "___" + values.password)
        error.cpassword = "Password not matched"
    }

    return error;




   }
   export default Validation