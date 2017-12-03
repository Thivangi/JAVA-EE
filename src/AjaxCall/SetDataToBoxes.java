package AjaxCall;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.reflect.TypeToken;
import dataLayer.DB_user;
import webapp.login;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet(name = "SetDataToBoxes")
public class SetDataToBoxes extends HttpServlet {

    public static String monthName;
    public static String yearName;
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        //Παίρνει τα δεδομένα από τη βάση και τα αποδίδει στο interface

        response.setContentType("text/html");
        monthName = request.getParameter("month");
        yearName = request.getParameter("year");

        ArrayList<ControlerData> data;
        data = DB_user.getAllData(); //περνάει όλα τα δεδομένα σε μια καινούρια λίστα την data...

        Gson gson = new Gson();
        JsonElement element = gson.toJsonTree(data, new TypeToken<List<ControlerData>>() {}.getType()); //...και τα μετατρέπει σε JSON format
        JsonArray jsonArray = element.getAsJsonArray();
        response.setContentType("application/json");
        response.getWriter().print(jsonArray);


    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {


    }
}
