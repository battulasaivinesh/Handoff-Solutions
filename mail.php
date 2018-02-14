<?php
	if(isset($_POST['submit'])){
		$name=$_POST['field1'];
		$org=$_POST['field2'];
		$email=$_POST['field3'];
		$msg=$_POST['field4'];
        $to='vineet@handsoffsolutions.com'; // Receiver Email ID, Replace with your email ID
		$subject= 'Website Message';
		//$subject1='Reply for your complaint';
		$message="Name : ".$name."\n"."Organisation : ".$org."\n"."Email-ID : ".$email."\n"."Message : ".$msg;
		$headers="From: ".$email;
		if(mail($to, $subject, $message, $headers)){
		    echo "<script>
							window.location.href='index.html';
							alert('Thank you for submission');
				</script>";
		    		}
		else{
		    echo "<script>
							window.location.href='index.html';
							alert('OOPS...! something went wrong please refill the form');
</script>"; 
		    		}
	}
?>