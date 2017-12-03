<%--
  Created by IntelliJ IDEA.
  User: vangelis
  Date: 11/8/17
  Time: 11:23 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Login</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

</head>
<body>

        <div class="container">
            <h1>Welcome, please login:</h1>

            <form action="login" method="post"> <!--καλεί το αρχείο login.java με τη μεθοδο POST -->
                <div class="input-group">

                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                    <input type="text" name="loginname" class="form-control" placeholder="Email" id="email" width="30">

                </div>
                <div class="input-group">

                    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                    <input type="password" name="password" class="form-control" placeholder="Password" id="password" width="10">

                </div>
                <button type="submit" class="btn btn-default">Submit</button>
            </form>
        </div>

    <p style="color:red;">${errorMessage}</p>



</body>
</html>
