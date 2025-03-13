<?php
?>
<!doctype html>
<html class="no-js" lang="">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>CCAvenue Response</title>
    <meta name="description" content="CCAvenue Response Page">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css">
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-sm-6 col-lg-6 col-6 text-center col-md-offset-3">
                <?php include('Crypto.php')?>
                <?php

                    error_reporting(0);

                    $workingKey='BB1C69A5F3F38E459267E84263B75105';        //Working Key should be provided here.
                    $encResponse=$_POST["encResp"];            //This is the response sent by the CCAvenue Server
                    $rcvdString=decrypt($encResponse,$workingKey);        //Crypto Decryption used as per the specified working key.
                    $order_status="";
                    $decryptValues=explode('&', $rcvdString);
                    $dataSize=sizeof($decryptValues);

                    $responseMap = array(); // Initialize the array

                    for($i = 0; $i < $dataSize; $i++)
                    {
                        $information = explode ( '=', $decryptValues [$i] );
                        $responseMap [$information [0]] = $information [1];  // Assign key-value pairs to the array
                    }

                    $order_status = $responseMap ['order_status'];

                    echo "<center>";

                    if($order_status=="Success")
                    {
                        echo "<br>Your Payment is Successful.";

                    }
                    else if($order_status=="Aborted")
                    {
                        echo "<br>Your Payment has Been Aborted";
                    }
                    else if($order_status==="Failure")
                    {
                        echo "<br>The transaction has been declined.";
                    }
                    else
                    {
                        echo "<br>Thank you for the payment. Your transaction is successful.";
                    }

                    $order_id = $responseMap ['order_id'];
                    $tracking_id = $responseMap ['tracking_id'];
                    $bank_ref_no = $responseMap ['bank_ref_no'];
                    $payment_mode = $responseMap ['payment_mode'];
                    $card_name = $responseMap ['card_name'];
                    $status_code = $responseMap ['status_code'];
                    $status_message = $responseMap ['status_message'];
                    $currency = $responseMap ['currency'];
                    $amount = $responseMap ['amount'];
                    $billing_name = $responseMap ['billing_name'];
                    $billing_address = $responseMap ['billing_address'];
                    $billing_city = $responseMap ['billing_city'];
                    $billing_state = $responseMap ['billing_state'];
                    $billing_zip = $responseMap ['billing_zip'];
                    $billing_country = $responseMap ['billing_country'];
                    $billing_tel = $responseMap ['billing_tel'];
                    $billing_email = $responseMap ['billing_email'];
                    $trans_date = $responseMap ['trans_date'];
                    $token_eligibility = $responseMap ['token_eligibility'];
                    $response_code = $responseMap ['response_code'];

                    echo"<table class='table'>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>".htmlspecialchars($order_id)."</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Tracking ID</th>
                                <td>".htmlspecialchars($tracking_id)."</td>
                            </tr>
                            <tr>
                                <th>Bank Ref No</th>
                                <td>".htmlspecialchars($bank_ref_no)."</td>
                            </tr>
                            <tr>
                                <th>Order Status</th>
                                <td>".htmlspecialchars($order_status)."</td>
                            </tr>
                            <tr>
                                <th>Payment Mode</th>
                                <td>".htmlspecialchars($payment_mode)."</td>
                            </tr>
                            <tr>
                                <th>Card Name</th>
                                <td>".htmlspecialchars($card_name)."</td>
                            </tr>
                            <tr>
                                <th>Status Code</th>
                                <td>".htmlspecialchars($status_code)."</td>
                            </tr>
                            <tr>
                                <th>Status Message</th>
                                <td>".htmlspecialchars($status_message)."</td>
                            </tr>
                            <tr>
                                <th>Total Amount</th>
                                <td>".htmlspecialchars($amount)." / ".htmlspecialchars($currency)."</td>
                            </tr>
                            <tr>
                                <th>Name & Address</th>
                                <td>".htmlspecialchars($billing_name)." | ".htmlspecialchars($billing_address).", ".htmlspecialchars($billing_city).", ".htmlspecialchars($billing_state).", ".htmlspecialchars($billing_zip).", ".htmlspecialchars($billing_country)."</td>
                            </tr>
                            <tr>
                                <th>Contact Details</th>
                                <td>".htmlspecialchars($billing_tel)." / ".htmlspecialchars($billing_email)."</td>
                            </tr>
                            <tr>
                                <th>Transaction Date</th>
                                <td>".htmlspecialchars($trans_date)."</td>
                            </tr>
                            <tr>
                                <th>Token Eligibility</th>
                                <td>".htmlspecialchars($token_eligibility)."</td>
                            </tr>
                            <tr>
                                <th>Response Code</th>
                                <td>".htmlspecialchars($response_code)."</td>
                            </tr>
                        </tbody>
                    </table>";

                    echo "<button class='btn btn-warning' onclick='window.print()'>Print this page</button>";   
                    echo "<br><hr><br><hr>";
                    echo "<a class='btn btn-success' href='https://portfoilo.spwebdevs.com/registration/flatdetails'>Return to Application</a>";  // Redirect back to React
                    echo "</center>";

                ?>
            </div>
        </div>
    </div>
</body>
</html>
<?php
exit;
?>