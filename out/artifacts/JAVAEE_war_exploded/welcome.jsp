<%--
  Created by IntelliJ IDEA.
  User: vangelis
  Date: 11/8/17
  Time: 1:16 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Welcome</title>
</head>
    <body>
        <h1>Welcome</h1>
        <p>Dear: ${username}</p>
        <!--<p>Your Password is: ${password}</p> -->

        <form action="heat.jsp">
            <input type="submit" value="Calculate oil Consumption">
        </form>
    </body>
</html>
