<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer autoload.php file
require 'vendor/autoload.php';

// SMTP2GO SMTP server settings
$smtpHost = 'mail.smtp2go.com';
$smtpPort = 2525; // You can also use port 2525
$smtpUsername = 'yeets.de'; // Replace with your SMTP2GO username
$smtpPassword = 'SANbtI8fag!y2Oa25'; // Replace with your SMTP2GO password

// Sender and recipient details
$senderEmail = 'kontakt@yeets.de'; // Your email address
$recipientEmail = 'kontakt@yeets.de'; // Recipient's email address
$recipientName = 'Yeets!'; // Recipient's name
$subject = 'Kontaktformular'; // Email subject
$name = $_POST['name'];
$mail = $_POST['mail'];
$body = '<b>Name:</b> '.$name.'<br><b>E-Mail:</b> '.$mail.'<br>'.nl2br($_POST['message']).''; // Email body

// Create a new PHPMailer instance
$mail = new PHPMailer(true);
if(!$_POST['puzzle']) {
    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = $smtpHost;
        $mail->SMTPAuth = true;
        $mail->Username = $smtpUsername;
        $mail->Password = $smtpPassword;
        $mail->SMTPSecure = 'tls'; // Enable TLS encryption, `ssl` also accepted
        $mail->Port = $smtpPort;

        // Sender and recipient details
        $mail->setFrom($senderEmail, $recipientName); // Sender's name (optional)
        $mail->addAddress($recipientEmail, $recipientName); // Recipient's name (optional)

        // Content
        $mail->isHTML(true); // Set email format to HTML
        $mail->Subject = $subject;
        $mail->Body = $body;

        // Send email
        $mail->send();
        echo 'success';
    } catch (Exception $e) {
        echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
    }
}
?>