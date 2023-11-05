<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="assets/css/style-login.css">
</head>
<body onclick="cpasspadrev(),cpass1()">
    <center>
        
        
        <section class="main" onclick="cpasspadrev(),cpass1()">
            <article class="sub1">
                <h1 style="font-family: fangsong; font-size: 29px;">Signup</h1>
                <form action="" id="form">
                    
                    <table>
                        <tr>
                            <td>
                                <label for="name">Name: </label>
                    
                            </td>
                            <td>
                                <input type="text" name="name" id="name" placeholder="Enter your Name here.." onclick="cpasspadrev(),cpass1()"><br><br>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="email">Email: </label>
                            </td>
                                <td>
                                    <input type="email" name="email" id="email" placeholder="Enter your Email here.." onclick="cpasspadrev(),cpass1()"><br><br>
                                    
                                </td>
                    
                        </tr>

                        <tr>
                            <td>
                                <label for="pass">Password:</label>
                                
                            </td>
                            <td>
                                <input type="password" name="password"  id="pass"   placeholder="Enter your Password here.." onkeyup="validation(this.value),cpasspad()" ><br><br>
                                 
                                <div id="div1" style="font-size: 15px; display: block; position:absolute;" class="validation">
                                    <span id="v1" style="display: none;">first letter should be capital</span>
                                    <br><span id="v2" style="display: none ;">Password length must be greater than 8 character</span>
                                    <br><span id="v3" style="display: none;">Password must contain a special character(@,$,%,..)</span>
                                    <br><span id="v4" style="display: none;">Password must be alphanumeric</span>
                                </div>

                            </td>
                            
                        </tr>
                        <tr>
                            <td id="cpasslabel" >
                                <label for="cpass" >Confirm Password: </label>
                                
                            </td>
                            
                            <td id="cpasstd">
                                <input type="password" name="cpassword" id="cpass" placeholder="Confirm your password.." onclick="cpasspadrev(),cpass1()"><br><br>
                            </td>
                            <td id="chechboxtd">
                                <div class="checkbox">
                                    <input type="checkbox" value="1" id="c1" onclick="show()"> 
                                    <label for="c1"></label>
            
                                </div>
                            </td>
                        </tr>
                    
                    </table>
                    <p style="font-size: 15px; " id="loginhere">Already have account?<a href="login.html">Login</a></p>
                    
                    <input type="submit" value="submit" id="submit">
                    </form>
            </article>
            
        </section>






    </center>
    <script src="assets/js/js.js"></script>
</body>
</html>