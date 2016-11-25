<html>

	<head>
		<meta http-equiv="content-type" content="text/html;charset=iso-8859-1">
		<title>Susie Hamidi Photography - Seattle Wedding Photographer :: Thank you for contacting me</title>
		<meta name="keywords" content="Seattle,wedding,photographer,portraits,photography,photo,professional,photojournalism, digital, film, medium format, online proofing">
		<meta name="description" content="Susie Hamidi Wedding Photographer">
		<meta name="abstract" content="Susie Hamidi - Seattle Wedding Photographer :: Contact Submission">
		<meta name="revisit-after" content="10 days">
		<meta name="copyright" content="Copyright Susie Hamidi, 2005">
		<meta name="robots" content="FOLLOW,INDEX">
		<link href="../susiehamidi.css" type="text/css" rel="stylesheet">
	</head>

	<body leftmargin="60px" marginheight="0" marginwidth="0" topmargin="30"
		style="color:white; background-color:#000000;">
<?php
// Change this to the email address where the message is to be sent
$your_email = "info@susiehamidi.com";

// This is what is displayed in the email subject line
// Change it if you want
$subject = "Client Inquiry" . trim(stripslashes($_POST['email']));

// You shouldn't need to edit below this line
// ---------------------------------------------
$nospam = trim(stripslashes($_POST['nospam']));
$name = trim(stripslashes($_POST['name']));
$email = trim(stripslashes($_POST['BrideE-mail']));
$phone = trim(stripslashes($_POST['ContactNumber']));
$budget = trim(stripslashes($_POST['Budget']));
$year = date("Y");
$month = date("m");
$day = date("d");
$hour = date("h");
$min = date("i");
$tod = date("a");

  // This section checks the referring URL to make sure it's all coming
    // from our own site
    // Get the referring URL
    $referer = $_SERVER['HTTP_REFERER'];
    $remote_ip = $_SERVER['REMOTE_ADDR'];
    $referer_array = parse_url($referer);
    $referer = strtolower($referer_array['host']);

    // Get the URL of this page
    $this_url = strtolower($_SERVER['HTTP_HOST']);

    // If the referring URL and the URL of this page don't match then
    // display a message and don't do download or send the email.
    if ($referer == "") {
    ?>
		<table width="400" align="left">
			<tr height="200">
				<td>I'm sorry, you cannot access this page directly.<br>
					To send me an email, please use the <a href="../contact">contact form</a>.</td>
			</tr>
		</table>
		<?php
		include("../footer.inc");
		exit;
	}
    
    if ($referer != $this_url) {
        echo "ERROR: You do not have permission to use this script from another URL. \n";
        echo "Referer: " .$referer . "\n";
        echo "This URL: " .$this_url. "\n";
            ?>
		<table width="400" align="left">
			<tr height="200">
				<td>I'm sorry, you do not have permission to use this script from another URL.<br>
					<p>Referer: <?php echo $referer ?><br>
						This URL: <?php echo $this_url ?><br>
					</p>
					To send me an email, please use the <a href="../contact">contact form</a>.</td>
			</tr>
		</table>
		<?php
        include("../footer.inc");
        exit;
    }

if ($nospam == "n0sp@m"){
    // Timestamp this message

    $TimeOfMessage = date('d')."/".date('m')."/".date('y')."(".date('D').") @ ".date('H:i');

    // finally, send e-mail
    $ip=$_SERVER["REMOTE_ADDR"];
    $message = "The following was sent on " .$TimeOfMessage."\n";
    $message .= "---------------------------------------------------------\n";

    // send the complete set of variables as well
    while (@list($var,$val) = @each($_POST)) {
      if($val != "n0sp@m"){
      	$message .= "$var: $val\n";
      }
	}

    // Add remote IP to email
    $message .= "Sent from remote IP: $remote_ip \n";  

    // send the email
    if($email != null && $email != "" && $phone != "" && $budget != null && $budget != ""){
    	$ret = mail($your_email, $subject, $message, "From:".$name." <".$email.">");
    	
    	//make sure we sent email and redirect
		if ($ret) {

    ?>
		<table width="400" align="left">
			<tr height="40">
				<td colspan="2">&nbsp;</td>
			</tr>
			<td width="20">&nbsp;</td>
			<td valign="top">Thank you for your inquiry. Susie Hamidi Photography will be in touch soon.</td>
			</tr>
			<td width="20">&nbsp;</td>
			
			<tr height="200">
				<td colspan="2">&nbsp;</td>
			</tr>
		</table>
		<p><?php
    	} else {
    ?></p>
		<table width="400" align="left">
			<tr height="40">
				<td colspan="2">&nbsp;</td>
			</tr>
			<td width="20px">&nbsp;</td>
			<td valign="top">Whoops! Looks like the Web site can't send an e-mail right now.
				<p>Please send Susie Hamidi an e-mail the <a href="mailto:weddings@susiehamidi.com">old-fashioned way</a>.</p>
			</td>
			</tr>
			<tr>
				<td>&nbsp;-Jeff</td>
			</tr>
			<tr height="200">
				<td>&nbsp;</td>
			</tr>
		</table>
		<p><?php	
		}
	}else{
	?></p>
		<table width="400" align="left">
			<tr height="40">
				<td colspan="2">&nbsp;</td>
			</tr>
			<td width="20px">&nbsp;</td>
			<td valign="top">Please provide your e-mail address, phone number, and your budget so that we have the information we need to contact you.<br>
			<p>
				Please press the back button on your browser and complete the form.</td>
			</tr>
			<tr height="200">
				<td>&nbsp;</td>
			</tr>
		</table>
		<?php	 
	}
}else{
?>
	<h1>Please stop using this email form for your spam bots!</h1>
<?php
}

	?>
	</body>

</html>
