package AjaxCall;

import dataLayer.DB_user;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "GetDataFromBoxes")
public class GetDataFromBoxes extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        response.setContentType("text/html");
        String proiglitra = request.getParameter("proig_litra");
        String proigtlit = request.getParameter("proig_tlitrou");
        String proigeuro = request.getParameter("proig_euro");
        String paraglitra = request.getParameter("parag_litra");
        String paragtlitrou = request.getParameter("parag_tlitrou");
        String parageuro = request.getParameter("parag_euro");
        String neoltra = request.getParameter("neo_litra");
        String neotlitr = request.getParameter("neo_tlitrou");
        String neoeuro = request.getParameter("neo_euro");
        String katanlitr = request.getParameter("katan_litra");
        String katantlitr = request.getParameter("katan_tlitrou");
        String kataneuro = request.getParameter("katan_euro");


        DB_user.setAllData(proiglitra, proigtlit, proigeuro, paraglitra, paragtlitrou, parageuro, neoltra, neotlitr, neoeuro, katanlitr, katantlitr, kataneuro);
        response.getWriter().print("You successfully saved your order ");


    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
