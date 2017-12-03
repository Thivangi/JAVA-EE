<%@ page import="java.util.Date" %><%--
  Created by IntelliJ IDEA.
  User: vangelis
  Date: 11/8/17
  Time: 9:31 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>web App Tutorial Page</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  </head>

  <body>

    <div class="jumbotron text-center">
      <h1>Θέρμανση - Ψύξη - Μέλετες </h1>
      <%
        Date date = new Date();
        out.print("<h2>" + date.toString() + "</h2>");
      %>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-sm-4">

          <form action="login.jsp">
            <input type="submit" class="btn btn-primary" value="Go to login page"/>
          </form>
        </div>
        <div class="col-sm-4">

          <form action="register.jsp">
            <input type="submit" class="btn btn-primary" value="Register"/>
          </form>
        </div>
        <div class="col-sm-4">

          <form action="main.jsp">
            <input type="submit" class="btn btn-primary" value="Main Form"/>
          </form>
        </div>
      </div>
    </div>

  </body>
</html>
