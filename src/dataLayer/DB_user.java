package dataLayer;

import AjaxCall.SetDataToBoxes;
import AjaxCall.ControlerData;
import webapp.login;
import java.io.IOException;
import java.io.InputStream;
import java.sql.*;
import java.util.ArrayList;
import java.util.Properties;


public class DB_user {

    private static Connection connection = null;


    private static Connection getConnection(){   //σύνδεση μονο στη βάση δεδομένων, τα δεδομένα username και password τα διαβάζει από εξωτερικό αρχείο
        if(connection!=null)
        {
            return  connection;
        }
        else
        {
            try {
                Properties prop = new Properties();
                InputStream inputStream = DB_user.class.getClassLoader().getResourceAsStream("/dataLayer/db.properties");
                prop.load(inputStream);
                String driver = prop.getProperty("driver");
                String url = prop.getProperty("url");
                String user = prop.getProperty("user");
                String password = prop.getProperty("password");
                Class.forName(driver);
                connection = DriverManager.getConnection(url, user, password);
            }catch (ClassNotFoundException | SQLException | IOException e) {
                e.printStackTrace();
            }
            return connection;
        }
    }


    public boolean isValidUserLogin(String sUserName, String sUserPassword)  //έλεγχος για τον κάθε χρήστη για σύνδεση στον ιστότοπο (η συνδεση δεν κλείνει)
    {
        boolean isValidUser = false;

        Statement stmt = null;
        ResultSet rs = null;
        String sql;


        try{
            connection = DB_user.getConnection();
            System.out.println("Creating statement...");
            stmt = connection.createStatement();
            sql = "SELECT * FROM users WHERE user_name = \"" + sUserName + "\" AND user_password = \"" + sUserPassword + "\"";
            System.out.println(sql);
            rs = stmt.executeQuery(sql);

            //STEP 5 Extract data from result set
            if(rs.next()){
                isValidUser = true;
            }


        }catch (SQLException se){
            //Handle errors for JDBC
            se.printStackTrace();
        }finally {
            //STEP 6: Clean-up environment
            try {
                if (rs != null) {
                    rs.close();
                }
                if (stmt != null) {
                    stmt.close();
                }
            }catch (SQLException e){
                e.printStackTrace();
            }
        }
        return isValidUser;
    }




    public static ArrayList<ControlerData> getAllData() {      //διαβάζει και παίρνει τα δεδομένα από τη βάση και τα στέλνει στο interface (σε μορφή λίστας)
        connection = DB_user.getConnection();
        String user = login.session;
        String month1 = SetDataToBoxes.monthName;
        String year1 = SetDataToBoxes.yearName;
        String sql;
        ResultSet rs = null;

        ArrayList<ControlerData> list = new ArrayList<>();
        try{
            Statement stm = connection.createStatement();
            sql = "SELECT proig_litra, proig_tlitrou, proig_euro, parag_litra, parag_tlitrou, parag_euro, neo_litra, neo_tlitrou, neo_euro, katan_litra, katan_tlitrou, katan_euro " +
                    "FROM orders INNER JOIN has ON has.id_orders=orders.id  INNER JOIN users ON users.id=has.id_users " +
                    "WHERE users.user_name = '" + user +"' AND has.month= '"+ month1 +"'  AND has.year='"+ year1 +"' ";

             rs = stm.executeQuery(sql);

            while(rs.next()) {
                ControlerData data = new ControlerData();
                data.setProig_litra(rs.getString("proig_litra"));
                data.setProig_tlitrou(rs.getString("proig_tlitrou"));
                data.setProig_euro(rs.getString("proig_euro"));
                data.setParag_litra(rs.getString("parag_litra"));
                data.setParag_tlitrou(rs.getString("parag_tlitrou"));
                data.setParag_euro(rs.getString("parag_euro"));
                data.setKatan_litra(rs.getString("katan_litra"));
                data.setKatan_tlitrou(rs.getString("katan_tlitrou"));
                data.setKatan_euro(rs.getString("katan_euro"));
                data.setNeo_litra(rs.getString("neo_litra"));
                data.setNeo_tlitrou(rs.getString("neo_tlitrou"));
                data.setNeo_euro(rs.getString("neo_euro"));

                list.add(data);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
        finally {
            try{
                if(rs!=null){
                    rs.close();
                }
            }catch (SQLException e){
                e.printStackTrace();
            }
        }
        return list;
    }


    //περνάει τα δεδομένα από το interface στη βάση
    public static void setAllData (String proig_litra, String proig_tlitrou, String proig_euro, String parag_litra, String parag_tlitrou, String parag_euro, String neo_litra, String neo_tlitrou, String neo_euro ,String katan_litra, String katan_tlitrou, String katan_euro)
    {
        connection = DB_user.getConnection();

        String user = login.session;
        String month1 = SetDataToBoxes.monthName;
        String year1 = SetDataToBoxes.yearName;
        String sql;
        String sql2;
        Statement stm = null;
        ResultSet rs = null;
        PreparedStatement pst = null;
        PreparedStatement pst2 = null;

        try{
            stm = connection.createStatement();
            sql2 = "SELECT users.id, has.month, has.year, has.id_orders FROM users INNER JOIN has ON users.id=has.id_users  WHERE user_name='"+user +"' AND month='"+month1+"' AND year='"+year1+"'";
            rs = stm.executeQuery(sql2);
            String find_month = null;
            String find_year = null;
            int find_order=0;
            while(rs.next())
            {
                find_month = rs.getString("month");
                find_year = rs.getString("year");
                find_order = rs.getInt("id_orders");
            }


            if((find_month !=null && !find_month.isEmpty()) && (find_year !=null && !find_year.isEmpty()))
            {  //εαν υπαρχει ηδη εγγραφη στον πινακα κανε UPDATE...

                sql = "UPDATE orders SET proig_litra =?, proig_tlitrou=?, proig_euro=?, parag_litra=?, parag_tlitrou=?, parag_euro=?, neo_litra=?, neo_tlitrou=?, neo_euro=?, katan_litra=?, katan_tlitrou=?, katan_euro=? WHERE id = '"+ find_order+"'";
                pst = connection.prepareStatement(sql);
                    pst.setString(1,proig_litra);
                    pst.setString(2,proig_tlitrou);
                    pst.setString(3,proig_euro);
                    pst.setString(4,parag_litra);
                    pst.setString(5,parag_tlitrou);
                    pst.setString(6,parag_euro);
                    pst.setString(7,neo_litra);
                    pst.setString(8,neo_tlitrou);
                    pst.setString(9,neo_euro);
                    pst.setString(10,katan_litra);
                    pst.setString(11,katan_tlitrou);
                    pst.setString(12,katan_euro);
                    pst.executeUpdate();

                    //pst.close();


            }
            else   //...αλλιως κάνε INSERT
            {
                String sql3;

                sql3 = "SELECT id FROM users WHERE user_name='"+user +"'";
                rs = stm.executeQuery(sql3);
                int find_id=0;


                while(rs.next())
                {
                    find_id = rs.getInt("id");

                }


                sql ="INSERT INTO orders (proig_litra, proig_tlitrou, proig_euro, parag_litra, parag_tlitrou, parag_euro, neo_litra, neo_tlitrou, neo_euro, katan_litra, katan_tlitrou, katan_euro) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)" ;
                pst = connection.prepareStatement(sql);

                pst.setString(1,proig_litra);
                pst.setString(2,proig_tlitrou);
                pst.setString(3,proig_euro);
                pst.setString(4,parag_litra);
                pst.setString(5,parag_tlitrou);
                pst.setString(6,parag_euro);
                pst.setString(7,neo_litra);
                pst.setString(8,neo_tlitrou);
                pst.setString(9,neo_euro);
                pst.setString(10,katan_litra);
                pst.setString(11,katan_tlitrou);
                pst.setString(12,katan_euro);
                pst.executeUpdate();


                sql2 = "INSERT INTO has(id_users, month, year) VALUES (?, ?, ?) ";
                pst2 = connection.prepareStatement(sql2);
                pst2.setInt(1, find_id);
                pst2.setString(2,month1);
                pst2.setString(3,year1);
                pst2.executeUpdate();

            }

        }catch (SQLException e) {
            e.printStackTrace();
        }finally {
            try{
                if(stm!=null){
                    stm.close();
                }
                if(rs!=null){
                    rs.close();
                }
                if(pst!=null){
                    pst.close();
                }
                if(pst2!=null){
                    pst2.close();
                }

            }catch (SQLException e){
                e.printStackTrace();
            }
        }


    }

    public static void Register(String name, String email, String username, String password, String confirm){
        connection = DB_user.getConnection();
        String sql;
        PreparedStatement pst = null;

        try{
            sql = "INSERT INTO users(name, mail, user_name, user_password, confirm) VALUES (?, ?, ?, ?, ?)";
             pst = connection.prepareStatement(sql);

            pst.setString(1, name);
            pst.setString(2, email);
            pst.setString(3, username);
            pst.setString(4, password);
            pst.setString(5, confirm);
            pst.executeUpdate();

        }catch (SQLException e) {
            e.printStackTrace();

        }finally {
            try{
                if(pst!=null)
                {
                    pst.close();
                }
            }catch (SQLException e){
                e.printStackTrace();

            }

        }

    }
}