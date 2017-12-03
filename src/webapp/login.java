package webapp;

import appLayer.User;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "login")
public class login extends HttpServlet
{
    public static String session;
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        //χρησιμοποιούμε την μέθοδο για να πάρουμε τις τιμές username και password από τα textboxes

        /*PrintWriter out = response.getWriter();
        out.println("doPost-version:");

        out.print("login-name : " + request.getParameter("loginname") + " Password : " + request.getParameter("password"));*/

        User userObject = new User();



        request.setAttribute("username",request.getParameter("loginname")); //βάζει στη μεταβλητη username (η οποία βρίσκεται στο αρχείο "welcome.jsp") την τιμή της loginname την οποία την παίρνει από το αρχείο login.jsp
        request.setAttribute("password",request.getParameter("password"));

        if(userObject.isValidUserCredentials(request.getParameter("loginname"), request.getParameter("password"))) {

            request.getRequestDispatcher("/welcome.jsp").forward(request, response);
            session = request.getParameter("loginname");
            //System.out.println(session);
        }
        else
        {
            request.setAttribute("errorMessage","Invalid Username or Password. Try again");
            request.getRequestDispatcher("/login.jsp").forward(request, response);
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //χρησιμοποιούμε την μέθοδο για να πάρουμε τις τιμές username και password από το URL στην παρούσα φάση δεν το χρησιμοποιούμε

        /*PrintWriter out = response.getWriter();

        out.print("login-name : " + request.getParameter("loginname") + "Password : " + request.getParameter("password"));*/

    }
}
