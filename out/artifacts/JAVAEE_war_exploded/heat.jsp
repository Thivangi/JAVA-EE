<%--
  Created by IntelliJ IDEA.
  User: vangelis
  Date: 11/8/17
  Time: 9:55 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Υπολογισμός πετρελαίου Θέρμανσης</title>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src = "Functions/calculate_oil.js"></script>
    <script type="text/javascript" src = "Functions/FromToDB.js"></script>
    <script type="text/javascript" src = "Functions/createRows.js"></script>

    <link rel="stylesheet" href="Style/heatCss.css" type="text/css">



</head>
<body class="container">

<table id="myTable" style="height: 471px;" width="820">
    <tbody>
    <tr>
        <td style="width: 154px;">&nbsp;</td>
        <td style="width: 155px; text-align: center;"><strong>Λίτρα</strong></td>
        <td style="width: 157px; text-align: center;"><strong>Τιμή Λίτρου</strong></td>
        <td style="width: 158px; text-align: center;"><strong>Ποσότητα σε Ευρώ</strong></td>
        <td>
            <select id="months" >    <!--<select id="months" onclick="showHint(this.value)"> -->
                <option value="" selected>Διάλεξε Μήνα</option>
                <option value="1" id="1">Ιανουάριος
                <option value="2" id="2">Φεβρουάριος
                <option value="3" id="3">Μάρτιος
                <option value="4" id="4">Απρίλιος
                <option value="5" id="5">Μαϊος
                <option value="6" id="6">Ιούνιος
                <option value="7" id="7">Ιούλιος
                <option value="8" id="8">Άυγουστος
                <option value="9" id="9">Σεπτέμβριος
                <option value="10" id="10">Οκτώβριος
                <option value="11" id="11">Νοέμβριος
                <option value="12" id="12">Δεκέμβριος
            </select>
        </td>
        <td>
            <select id="years" >
                <option value="" selected>Διάλεξε Σεζόν</option>
                <option value="2018" id="2018">2018
                <option value="2017" id="2017">2017
                <option value="2016" id="2016">2016
                <option value="2015" id="2015">2015
                <option value="2014" id="2014">2014
            </select>
        </td>
        <td><input type="button" id="clear" value="Καθαρισμός Πεδίων"></td>
    </tr>
    <tr>
        <td style="width: 154px; text-align: center;"><strong>Προυγούμενο Υπόλοιπο</strong></td>
        <td style="width: 155px;"><input type="text" name="proig_litra" id="proig_litra"/></td>
        <td style="width: 157px;"><input type="text" name="proig_tlitou" id="proig_tlitrou"/></td>
        <td style="width: 158px;"><input type="text" name="proig_euro" id="proig_euro"/></td>
    </tr>
    <tr name="myRow">

        <td style="width: 154px; text-align: center;"><strong>Παραγγελίες</strong>&nbsp;</td>
        <td style="width: 155px;"><input type="text" name="parag_litra" id="parag_litra"/></td>
        <td style="width: 157px;"><input type="text" name="parag_tlitrou" id="parag_tlitrou"/></td>
        <td style="width: 158px;"><input type="text" name="parag_euro" id="parag_euro"/></td>
        <td><input type="button" class="button" id="check" value="Πρόσθεσε νέα Παραγγελία" ></td>

    </tr>
    <tr>
        <td style="width: 154px; text-align: center;"><strong>Νέο Υπόλοιπο</strong></td>
        <td style="width: 155px;"><input type="text" name="neo_litra" id="neo_litra"/></td>
        <td style="width: 157px;"><input type="text" name="neo_tlitrou" id="neo_tlitrou"/></td>
        <td style="width: 158px;"><input type="text" name="neo_euro" id="neo_euro"/></td>
    </tr>
    <tr>
        <td style="width: 154px; text-align: center;"><strong>Κατανάλωση</strong>&nbsp;</td>
        <td style="width: 155px;"><input type="text" name="katan_litra" id="katan_litra"/></td>
        <td style="width: 157px;"><input type="text" name="katan_tlitrou" id="katan_tlitrou"/></td>
        <td style="width: 158px;"><input type="text" name="katan_euro" id="katan_euro"/></td>
    </tr>
    </tbody>
</table>

<br/>
<br/>

<input type="submit" value="Save" id="save">

</body>
</html>
