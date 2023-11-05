function show(){
    var x=document.getElementById('pass')
    var y=document.getElementById('cpass')
    if(x.type==="password" && y.type==="password")
    {
        x.type="text"
        y.type="text"
    }
    else{
        x.type="password"
        y.type="password"
    }
}
function validation(value) {
    const p1=document.getElementById('pass').value
    const v1=document.getElementById('v1').value
    const v2=document.getElementById('v2').value
    const v3=document.getElementById('v3').value
    const v4=document.getElementById('v4').value
    
    var re=/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    var re2=/[0-9]/
    
    
    
    if(value.charAt(0)!=value.charAt(0).toUpperCase()) {

        document.getElementById('v1').style.color="#d42844ba"
        document.getElementById('v1').style.display=""
    


    }
    else{
        document.getElementById('v1').style.color="#008000ad"


    }
    
    if(value.length<8) {
        document.getElementById('v2').style.color="#d42844ba"
        document.getElementById('v2').style.display=""

    }
    else{
        document.getElementById('v2').style.color="#008000ad"
    
    }
    if((!value.match(re))) {

        document.getElementById('v3').style.color="#d42844ba"
        document.getElementById('v3').style.display=""
    }
    else{
        document.getElementById('v3').style.color="#008000ad"
    
    }
    if(!value.match(re2)) {

        document.getElementById('v4').style.color="#d42844ba"
        document.getElementById('v4').style.display=""
    }
    else{
        document.getElementById('v4').style.color="#008000ad"
    
    }
    // if(value.charAt(0)=value.charAt(0).toUpperCase() && value.length>8 && value.match(re) && value.match(re2)) {

    //     document.getElementById('v1').style.display="none"
    //     document.getElementById('v2').style.display="none"
    //     document.getElementById('v3').style.display="none"
    //     document.getElementById('v4').style.display="none"
    // }


}
var form=document.getElementById('form')
form.addEventListener('submit',e=>{
    e.preventDefault()
    var nam=document.getElementById('name').value
    var m1=document.getElementById('email').value
    var p1=document.getElementById('pass').value
    var p2=document.getElementById('cpass').value

    if(nam=='' && m1=='' && p1=='' && p2=='')
    {
        alert('Fill all the details before click on SIGNUP button')
    }
    else if(nam=='' && m1!=='' && p1!=='' && p2!=='' )
    {
        alert('Name can not be empty')
    }
    else if(nam!=='' && m1=='' && p1!=='' && p2!=='' )
    {
        alert('Mail Id can not be empty')
    }
    else if(nam!=='' && m1!=='' && p1=='' && p2!=='' )
    {
        alert('Password not be empty')
    }
    else if(nam!=='' && m1!=='' && p1!=='' && p2=='' )
    {
        alert('Please enter confirm password')
    }else if(nam!=='' && m1!=='' && p1=='' && p2=='' )
    {
        alert('Paassowrd and confirm password can not be empty')
    }
    else if(nam=='' && m1=='' && p1!=='' && p2!=='' )
    {
        alert('Name and Mail Id can not be empty')
    }
    else if(nam=='' && m1!=='' && p1=='' && p2!=='' )
    {
        alert('Name and Password can not be empty')
    }
    else if(nam=='' && m1!=='' && p1!=='' && p2=='' )
    {
        alert('Name and confirm password can not be empty')
    }
    else if(nam!=='' && m1=='' && p1=='' && p2!=='' )
    {
        alert('Mail Id and confirm password can not be empty')
    }
    else if(nam!=='' && m1=='' && p1!=='' && p2=='' )
    {
        alert('Mail Id and password can not be empty')
    }
    else if(nam!=='' && m1=='' && p1=='' && p2=='' )
    {
        alert('Mail Id, Password, Confirm password can not be empty')
    }
    else if(nam=='' && m1=='' && p1=='' && p2!=='' )
    {
        alert('Name, Mail Id, Password  can not be empty')
    }
    else if(nam=='' && m1!=='' && p1=='' && p2=='' )
    {
        alert('Name, Password, Confrim Password can not be empty')
    }
    
    else{
        if(p1!=p2){
            alert('Password and Cofirm password is not matching!')
        }
        else{
            localStorage.setItem('mail',m1)
            localStorage.setItem('password',p1)
            //session storage
            sessionStorage.setItem('mail',m1)
            sessionStorage.setItem('password',p1)
            confirm('Thanks for connecting with us..!! Please enter your otp')
            open('otp.html','_self')

        }
    }
    
})

function cpasspad() {
    document.getElementById('cpasstd').style.paddingTop="55px"
    document.getElementById('cpasslabel').style.paddingTop="55px"
    document.getElementById('checkboxtd').style.paddingTop="55px"

    

    
}
function cpasspadrev() {
    document.getElementById('v1').style.display="none"
    document.getElementById('v2').style.display="none"
    document.getElementById('v3').style.display="none"
    document.getElementById('v4').style.display="none"
       
}
function cpass1() {
    document.getElementById('cpasstd').style.paddingTop="0"
    document.getElementById('cpasslabel').style.paddingTop="0"
    document.getElementById('checkboxtd').style.paddingTop="0"
    
}

