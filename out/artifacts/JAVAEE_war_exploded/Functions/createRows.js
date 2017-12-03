$(document).ready(function() {
    $("#check").click(function(){
        if($('#parag_litra').val() && $('#parag_tlitrou').val() && $('#parag_euro').val()){
            var myTable = document.getElementById("myTable");
            var currentRow = myTable.insertRow(3);

            var parag_litra = document.createElement("input");
            parag_litra.setAttribute("name", "parag_litra");
            parag_litra.setAttribute("class", "txt");  //η δημιουργημενη στήλη με τα λίτρα
            parag_litra.setAttribute("id", "txt");
            parag_litra.setAttribute("type", "text");

            var parag_tlitrou = document.createElement("input");
            parag_tlitrou.setAttribute("name", "parag_tlitrou");
            parag_tlitrou.setAttribute("class", "rmb");   //η δημιουργημενη στηλη με την τιμη λιτρου
            parag_tlitrou.setAttribute("type", "text");

            var parag_euro = document.createElement("input");
            parag_euro.setAttribute("name", "parag_euro");
            parag_euro.setAttribute("class", "crt");  //η δημιουργημενη στηλη με το euro
            parag_euro.setAttribute("type", "text");

            var paragelies = document.createElement("label");
            paragelies.setAttribute("name", "Παραγγελίες");  //τυπικο δεν το χρησιμοποιούμε

            var addRowBox = document.createElement("input");
            addRowBox.setAttribute("type", "button");
            addRowBox.setAttribute("value", "Πρόσθεσε νέα Παραγγελία");
            addRowBox.setAttribute("onclick", "addField();");
            addRowBox.setAttribute("class", "button");

            var currentCell = currentRow.insertCell(-1);  //δεν φαίνεται πουθενα απλα για να υπάρχει σαν πρωτο στοιχειο(1 στηλη)
            currentCell.appendChild(paragelies);

            currentCell = currentRow.insertCell(-1);
            currentCell.appendChild(parag_litra);

            currentCell = currentRow.insertCell(-1);
            currentCell.appendChild(parag_tlitrou);

            currentCell = currentRow.insertCell(-1);
            currentCell.appendChild(parag_euro);
        }
        else
        {
            alert("Παρακαλώ συμπλήρωσε πρώτα την 1 παραγγελία");
        }
    });
});

$(function(){
    $("#clear").click(function(){
        $('#myTable').find('input[type="text"]').val('');
    });
});
