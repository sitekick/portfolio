<!DOCTYPE html>
<html class="no-js">
<head>
	<title>Portfolio Site</title>
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!--bower:css -->
	<link rel="stylesheet" href="assets/lib/bower/normalize-css/normalize.css" />
	<!--endbower-->
	<!--inject:css -->
	<link rel="stylesheet" href="assets/css/style.css">
	<!--endinject-->
	
	<?php $contact = $_GET['contact']; 
		
		if ($contact == 'true') {
			include 'inc/process.php';
		}
		
	?>
	
</head>
<body>
<div id="background"></div>
<div id="container"><?php if($contact == 'true'){include 'inc/contact.php';} ?>
		<div id="profile" tabindex="0">
			<div tabindex="-1" class="wrapper">
				<div class="photo hide">
					<div class="side front">&nbsp;</div>
					<div class="side back"><div class="content"><a class="contact">contact</a></div></div>
				</div>
			</div>
			<a class="me" tabindex="-1" title="view hunter williams profile">hunter</a>
		</div>
</div>
	<!--bower:js -->
	
	<!--endbower-->
	<script>  
   	 var polyfilter_scriptpath = 'assets/lib/css-filters-polyfill/';   
	</script>
	<script src='https://www.google.com/recaptcha/api.js'></script>
	<script src="assets/lib/css-filters-polyfill/cssParser.js"></script>
	<script src="assets/lib/css-filters-polyfill/css-filters-polyfill.js"></script>
	<!--inject:js -->
	<script src="assets/js/scripts.js"></script>
	<!--endinject-->
</body>
</html>