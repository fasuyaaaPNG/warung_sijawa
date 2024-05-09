<?php
    $hostname = "localhost";
    $username = "root"; 
    $password = "";
    $database_name = "warung_sijawa"; 

    $db = mysqli_connect($hostname, $username, $password, $database_name);
    if($db -> connect_error) {
        echo "error koneksi database";
        die("error");
    };
?>