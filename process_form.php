<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "theapertures@apertures.ai";
    $subject = "New Form Submission";
    $message = "Form details:\n";
    
    foreach ($_POST as $key => $value) {
        $message .= "$key: $value\n";
    }
    
    $headers = "From: no-reply@yourdomain.com\r\n";
    
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully.";
    } else {
        echo "Failed to send email.";
    }
}
?>
