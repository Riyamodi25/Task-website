var num="0123456789"
var otp=''
for(let i=1;i<5;i++)
{
    otp=otp+Math.floor(Math.random()*num.length)

}
alert('your otp is:'+otp)
function otp_varify() {
    var user_number=document.getElementById('otp1').value
    if(document.getElementById('otp1').value!==otp)
    {
        open('otp.html')
    }
    else{
       
        confirm('Thanks for giving us valuable time please select OK to login..!')
        open('login.html')
    }
}
