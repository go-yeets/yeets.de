<?php
if( isset($_POST['name']) && isset($_POST['mail']) && isset($_POST['message']) ){
    $name = $_POST['name']; // HINT: use preg_replace() to filter the data
    $mail = $_POST['mail'];
    $message = nl2br($_POST['message']);
    $to = "kontakt@yeets.de";
    $from = $mail;
    $subject = 'Yeets.de Kontaktformular';
    $message = '<b>Name:</b> '.$name.' <br><b>Email:</b> '.$mail.' <p>'.$message.'</p>';
    $headers = "From: $from\n";
    $headers .= "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\n";
    if( mail($to, $subject, $message, $headers) ){
        echo "success";
    } else {
        echo "The server failed to send the message. Please try again later.";
    }
}
?>