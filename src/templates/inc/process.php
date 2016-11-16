<?php

$params = array(
	'name' => trim($_POST['name']),
	'email' => trim($_POST['email']),
	'comment' => strip_tags($_POST['comment']),
	'captcha' => $_POST['g-recaptcha-response']
);

$sitekey = '6LeOvAsUAAAAAAZdqwnqALUgWk_FyAlsPiirxyNy';
$secret = '6LeOvAsUAAAAAKNYJz75fKwbcQzRgm3AklqrIwDR';
$ip = $_SERVER['REMOTE_ADDR'];
$verified = FALSE;
$errors = array();

if ( !empty($_POST) ) {
        $response = urlencode($params['captcha']);
        //print_r('$res:' . $response);
        $url = "https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$response&remoteip=$ip";
		//print_r('$url:' . $url);
        $response = file_get_contents($url);
        if ($response) {
        	$d = json_decode($response);
                if ($d->success) {
                        $verified = TRUE;
                } else {
	                $errors['captcha'] = true;
                }
        } 
}

if ( empty($params['name']) ) $errors['name'] = true;
if (filter_var($params['email'], FILTER_VALIDATE_EMAIL) === FALSE) $errors['email'] = true;
if ( empty($params['comment']) ) $errors['comment'] =  true;

if( empty($errors) ){
/* MAIL */
require_once('assets/lib/phpmailer/class.phpmailer.php');	
  
$body = "<p><strong>Name: </strong>{$params['name']}<br><strong>Email: </strong>{$params['email']}<br><strong>Comment:</strong><br />{$params['comment']}</p>";

$mail = new PHPMailer();
$mail->AddReplyTo($params['email'], $params['name']);
$mail->SetFrom('portfolio@sitekick.com');
$mail->AddAddress('hunter@sitekick.com', 'Hunter Williams');
$mail->Subject = 'Portfolio Contact';
$mail->MsgHTML($body);

$submit = ( $mail->Send() ) ? true :  "Mailer Error: " . $mail->ErrorInfo;
}
