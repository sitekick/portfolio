<div id="contact" class="growpanel expand">
				<div class="secondary loaded">
					<div class="close" tabindex="0"><a href="index.php"><img tabindex="-1" src="assets/img/button.close.png" alt="close button"/></a></div>
					
					<form action="index.php?contact=true" method="post">
						<?php if($errors) : ?>
						<div>
							<p class="<?php isset($errors['name']) ? print 'error' : print 'valid' ?>"><label for="name">Name</label> 
								<input type="text" id="name" name="name" placeholder="Name" value="<?php echo $params['name'] ?>" maxlength="100" >
								<span>Please enter your name</span></p>
							<p class="<?php isset($errors['email']) ? print 'error' : print 'valid' ?>"><label for="email">Email</label> 
								<input  type="email" id="email" name="email" placeholder="Email address" value="<?php echo $params['email'] ?>" maxlength="100" ><span>Please enter a valid email address</span></p>
							<p class="<?php isset($errors['comment']) ? print 'error' : print 'valid' ?>"><label for="comment">Comment</label> 
								<textarea  id="comment" name="comment" rows="8" columns="5" placeholder="Comment" maxlength="300"><?php echo $params['comment'] ?></textarea><span>Please enter a comment</span></p>
						<div id="recaptcha2" class="g-recaptcha" data-sitekey="6LeOvAsUAAAAAAZdqwnqALUgWk_FyAlsPiirxyNy"></div>
						</div>
						<input id="submit" type="submit" value="Send">
					
					 <?php else : ?>
							<?php if($submit === true){
								print  '<h3>Form Submitted</h3><p>Thank you, your email has been sent.</p>';
							} else {
								print '<h3>Error</h3><p>'.$submit.'</p>';
							}?>
					<?php endif; ?>
					</form>
				</div>
				<div class="primary">
						<h1>Hunter Williams</h1><h2>designer • developer</h2>
						<p>With the ability to create both artistically and technically, I am seeking to apply my sixteen years of freelance experience to a permanent web/front-end developer position. Contract work will be considered.</p>
						<a class="linkedin" href="https://www.linkedin.com/in/bhunterwilliams" target="_blank"><img width="125px" src="assets/img/linkedin/logo@1x.png" alt="linked in profile hunter williams" /></a>
				</div>
</div>