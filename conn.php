<?php
    $host='localhost';
    $user='root';
    $pass='';
    $db='task';

    $conn=mysqli_connect($host,$user,$pass,$db);
    if(!$conn)
    {
        die('could not connect to mysql'.mysqli_connect_error());
    
    }
    echo "<script>alert('connection successfully...');</script>"."<br>"."<br>"
?>