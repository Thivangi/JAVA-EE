package appLayer;

import dataLayer.DB_user;

public class User {

    public boolean isValidUserCredentials(String sUserName, String sUserPassword)
    {
        //this goes only for hardcoded data
        /*if(sUserName.equals("nimakos@hotmail.com") && sUserPassword.equals("123"))
        {
            return true;
        }
        else
        {
            return false;
        }*/

        //this goes for connection with mysql DB
        DB_user DB_user_object = new DB_user();

        return DB_user_object.isValidUserLogin(sUserName, sUserPassword);

    }

}
