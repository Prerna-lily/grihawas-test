
<html>
<head>
<title>Transaction Page</title>
</head>
<body>

<?php include('Crypto.php')?>
<?php

	error_reporting(0);

	$merchant_data='';
	$working_key='BB1C69A5F3F38E459267E84263B75105';//Shared by CCAVENUES
	$access_code='ATZO56MB32BY40OZYB';//Shared by CCAVENUES

	foreach ($_POST as $key => $value){
		$merchant_data.=$key.'='.$value.'&';
	}

	$encrypted_data=encrypt($merchant_data,$working_key); // Method for encrypting the data.

?>
<form method="post" name="redirect" action="https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction">
<?php
echo "<input type=hidden name=encRequest value=\"".htmlspecialchars($encrypted_data)."\">";
echo "<input type=hidden name=access_code value=\"".htmlspecialchars($access_code)."\">";
?>
</form>

<script language='javascript'>document.redirect.submit();</script>
</body>
</html>