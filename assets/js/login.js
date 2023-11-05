var form=document.getElementById('form')
form.addEventListener('submit',e=>{
    e.preventDefault()
    
    var m1=document.getElementById('email').value
    var p1=document.getElementById('pass').value
    

    if(m1=='' && p1=='')
    {
        alert('Fill all the details before click on LOGIN button')
    }
    else if(m1!=='' && p1=='')
    {
        alert('Password can not be empty')
    }
    else if(m1=='' && p1!=='' )
    {
        alert('Mail Id can not be empty')
    }
    
    
    else{
       
            var a = localStorage.getItem('mail')
            var b = localStorage.getItem('password')
           


           if(a==m1 && b==p1)
           {
            confirm('Welcome to our main page..!')
            open('main.html','_self')
           }
           else{
            if(a!==m1){
               
                alert('Mail ID is not matched!')
                open('login.html','_self')
               }
               if(!b==p1){
                alert('Password is not matched!')
                open('login.html','_self')
               }
           }
            // localStorage.setItem('mail',m1)
            // localStorage.setItem('password',p1)
            //session storage
            // sessionStorage.setItem('mail',m1)
            // sessionStorage.setItem('password',p1)
            

        
    }
    
})
