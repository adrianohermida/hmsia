<?php
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $destinatario = $_POST['destinatario'];
    $nome = $_POST['name'];
    $email = $_POST['email'];
    $mensagem = $_POST['message'];

    $assunto = 'Contato pelo formulário de Hermida Maia Advocacia';

    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: $nome <$email>\r\n";

    $mensagem_completa = "<p><strong>Nome:</strong> $nome</p>";
    $mensagem_completa .= "<p><strong>E-mail:</strong> $email</p>";
    $mensagem_completa .= "<p><strong>Mensagem:</strong> $mensagem</p>";

    $enviado = mail($destinatario, $assunto, $mensagem_completa, $headers);

    if ($enviado) {
      echo '<p>Mensagem enviada com sucesso!</p>';
    } else {
      echo '<p>Erro ao enviar mensagem. Por favor, tente novamente mais tarde.</p>';
    }
  }
?>
