<?php
    include "conn.php";
?>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="assets/css/style-login.css">
    </head>
    <body>
        <center>
            
            
            <section class="main" style="height: 400px;">
                <article class="sub1">
                    <h1 style="font-family: fangsong; font-size: 29px;">Login Here!</h1>
                    <form action="" id="form">
                        
                        <table>
                            <tr>
                                <td>
                                    <label for="name">Email ID:</label>
                        
                                </td>
                                <td>
                                    <input type="text" name="email" id="email" placeholder="Enter your Email ID here.."><br><br>
    
                                </td>
                            </tr>
                            
    
                            <tr>
                                <td>
                                    <label for="pass">Password:</label>
                                    
                                </td>
                                <td>
                                    <input type="password" name="password"  id="pass"   placeholder="Enter your Password here.." onkeyup="validation(this.value)"><br><br>
                                     
                                    
                                </td>
                                
                            </tr>
                            
                        </table>
                       
                        <input type="submit" value="submit" id="submit">
                        </form>
                </article>
                
            </section>
    
    
    
    
    
    
        </center>
       <script src="assets/js/login.js"></script>
    </body>
    </html>
</html>