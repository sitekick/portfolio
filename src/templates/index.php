<!DOCTYPE html>
<html class="no-js">
<head>
	<title>Hunter Williams Portfolio | Sitekick</title>
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!--bower:css -->
	<!--endbower-->
	<!--inject:css -->
	<!--endinject-->
	<link rel="apple-touch-icon" sizes="180x180" href="assets/img/favicons/apple-touch-icon.png">
	<link rel="icon" type="image/png" href="assets/img/favicons/favicon-32x32.png" sizes="32x32">
	<link rel="icon" type="image/png" href="assets/img/favicons/favicon-16x16.png" sizes="16x16">
	<link rel="manifest" href="assets/img/favicons/manifest.json">
	<link rel="mask-icon" href="assets/img/favicons/safari-pinned-tab.svg" color="#5bd560">
	<link rel="shortcut icon" href="assets/img/favicons/favicon.ico">
	<meta name="msapplication-config" content="assets/img/favicons/browserconfig.xml">
	<meta name="theme-color" content="#ffffff">
	
	
	<?php $contact = $_GET['contact']; 
		
		if ($contact == 'true') {
			include 'inc/process.php';
		}
		
	?>
	
</head>
<body>
<div id="container"><?php if($contact == 'true'){include 'inc/contact.php';} ?>
		<div id="profile" tabindex="0">
			<div tabindex="-1" class="wrapper">
				<div class="photo hide">
					<div class="side front">&nbsp;</div>
					<div class="side back"><div class="content"><a class="contact" tabindex="-1">contact</a></div></div>
				</div>
			</div>
			<a class="me" tabindex="-1" title="view hunter williams profile">hunter</a>
		</div>
</div>
	<!--bower:js -->
	<!--endbower-->
	<script src='https://www.google.com/recaptcha/api.js'></script>
	<!--inject:js -->
	<!--endinject-->
</body>
</html>