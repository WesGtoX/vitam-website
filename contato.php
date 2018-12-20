<?php

    if(isset($_POST['email']) && !empty($_POST['email'])) {

        $first_nome = addslashes($_POST['first-name']);
        $last_nome = addslashes($_POST['last-name']);
        $mail = addslashes($_POST['email']);
        $message = addslashes($_POST['message']);

        $to = "wesley_gto_x@yahoo.com.br";
        $subject = "Contato - Vitam";
        $body = "Nome: ".$nome. "\n".
                "Email: ".$mail. "\n".
                "Mensagem".$message;
        $header = "From:wes_mendes21@yahoo.com"."\r\n".
                    "Reply-to:".$mail."\r\n".
                    "X=Mailer:PHP/".phpversion();

        if(mail($to,$subject,$body,$header)) {
            echo("Email enviado com sucesso!");
        } else {
            echo("O Email não pode ser enviado");
        }
    }

?>