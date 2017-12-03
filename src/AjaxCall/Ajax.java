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


@WebServlet(name = "/Ajax")
public class Ajax extends HttpServlet
{
    public static String monthName;
    private static final long serialVersionUID = 1L;

    public Ajax() {

    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        ArrayList<ControlerData> data;
        data = DB_user.getAllData();

        Gson gson = new Gson();
        JsonElement element = gson.toJsonTree(data, new TypeToken<List<ControlerData>>() {}.getType());
        JsonArray jsonArray = element.getAsJsonArray();
        response.setContentType("application/json");
        response.getWriter().print(jsonArray);

    }

}
