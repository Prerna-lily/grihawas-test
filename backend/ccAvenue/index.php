<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <title>My Payment Gateway</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css">
</head>
<body class="wsmenucontainer">
    <div class="container">
        <!-- Content Row -->
        <?php $merchant_id = "4158970"?>
        <div class="row">
            <div class="">
                <div class="">
                    <div class="col-md-9 col-sm-12 tour-paricular">
                        <div class="particular-box" style="padding:13px;">
                            <h2 class="heading_bottom">Payment Gateway CC Avenue</h2>
                            <form method="post" name="customerData" action="ccavRequestHandler.php">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th colspan="2" class="text-center">Compulsory Information</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>TID:</td>
                                            <td><input type="text" class="form-control" name="tid" id="tid" value="<?php echo(rand(11111,99999)); ?>" readonly /></td>
                                        </tr>
                                        <tr>
                                            <td>Order Id:</td>
                                            <td><input type="text" class="form-control" name="order_id" id="order_id" value="<?php echo(rand(11111,99999)); ?>" readonly/></td>
                                        </tr>
                                        <tr class="hidden">
                                            <td>Merchant Id:</td>
                                            <td><input hidden type="text" class="form-control" name="merchant_id" value="<?php echo $merchant_id ?>"/></td>
                                        </tr>
                                        <tr>
                                            <td>Amount:</td>
                                            <td><input type="text" class="form-control" name="amount" placeholder="Enter Amount" required></td>
                                        </tr>
                                        <tr>
                                            <td>Currency:</td>
                                            <td> 
                                                <select class="form-select" name="currency">
                                                    <option value="INR">Indian Rupees</option>
                                                    <option value="USD">US Dollar</option>
                                                    <option value="AUD">Australian Dollar</option>
                                                    <option value="GBP">Pound Sterling</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr class="hidden">
                                            <td>Redirect URL:</td>
                                            <td><input type="text" class="form-control" name="redirect_url" value="https://portfoilo.spwebdevs.com/ccavenue/ccavResponseHandler.php"/></td>
                                        </tr>
                                        <tr class="hidden">
                                            <td>Cancel URL:</td>
                                            <td><input type="text" class="form-control" name="cancel_url" value="https://portfoilo.spwebdevs.com/ccavenue/ccavResponseHandler.php"/></td>
                                        </tr>
                                        <tr class="hidden">
                                            <td>Language:</td>
                                            <td><input type="text" class="form-control" name="language" value="EN"/></td>
                                        </tr>
                                        <tr>
                                            <th colspan="2" class="text-center">Billing Information</th>
                                        </tr>
                                        <tr>
                                            <td>Billing Name:</td>
                                            <td><input type="text" class="form-control" name="billing_name" placeholder="Mention your name" required></td>
                                        </tr>
                                        <tr>
                                            <td>Billing Address:</td>
                                            <td><input type="text" class="form-control" name="billing_address" placeholder="Mention your address"/></td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" class="text-center">
                                                <INPUT TYPE="submit" class="btn btn-primary" value="PROCEED">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                    <!-- /.col-lg-8 -->
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js"></script>
</body>
</html>