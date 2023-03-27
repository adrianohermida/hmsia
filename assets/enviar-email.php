<?php

if($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Definir informações do e-mail
    $to = "faleconosco@hermidamaia.adv.br";
    $subject = "Mensagem de contato do site";
    $headers = "From: " . $_POST["First_Name"] . " " . $_POST["Last_Name"] . " <" . $_POST["Email_Address"] . ">\r\n";
    $headers .= "Reply-To: " . $_POST["Email_Address"] . "\r\n";
    $headers .= "Cc: " . $_POST["Email_Address"] . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Construir corpo do e-mail
    $message = "<p><strong>Nome:</strong> " . $_POST["First_Name"] . " " . $_POST["Last_Name"] . "</p>";
    $message .= "<p><strong>E-mail:</strong> " . $_POST["Email_Address"] . "</p>";
    $message .= "<p><strong>Telefone:</strong> " . $_POST["Phone_No"] . "</p>";
    $message .= "<p><strong>Mensagem:</strong> " . $_POST["Message"] . "</p>";

    // Enviar e-mail
    $result = mail($to, $subject, $message, $headers);

    // Verificar se o e-mail foi enviado com sucesso
    if($result) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.";
    }

}
