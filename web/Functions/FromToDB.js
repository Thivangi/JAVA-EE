$(document).ready(function() {  //για να πάρω τα πεδία από τη βάση

    var years;
    var months;
    $('#years').click(function () { //με το που κλικαρεις καποιο πεδιο, πάρε την τιμή του (years)
        years = $(this).val();
    });

    $('#months').click(function () { //με το που κλικαρεις καποιο πεδιο, πάρε την τιμή του (months)
        months = $(this).val();
    });

    $('#months, #years').click(function () {  //ειτε πατησεις το selection months ειτε το years να σου βγαλει τα αποτελεσματα

        $.post('SetDataToBoxes', {month : months, year : years}, function (responseJson) {  //πάρε τις μεταβλητες (months, years) πέρνα τις στον server κανε τους υπολογισμούς και επεστρεψέ μου το αποτέλεσμα στη responseJason

            $.each(responseJson, function (key, value) {
                $('#proig_litra').val(value['proig_litra']);
                $('#proig_tlitrou').val(value['proig_tlitrou']);
                $('#proig_euro').val(value['proig_euro']);
                $('#parag_litra').val(value['parag_litra']);
                $('#parag_tlitrou').val(value['parag_tlitrou']);
                $('#parag_euro').val(value['parag_euro']);
                $('#neo_litra').val(value['neo_litra']);
                $('#neo_tlitrou').val(value['neo_tlitrou']);
                $('#neo_euro').val(value['neo_euro']);
                $('#katan_litra').val(value['katan_litra']);
                $('#katan_tlitrou').val(value['katan_tlitrou']);
                $('#katan_euro').val(value['katan_euro']);

            });
        });
    });
});

$(document).ready(function() {  //για να αποθηκευσω τα πεδία στη βάση

    $('#save').click(function () {
        var holesum;
        var holesum1;
        var holediv;
        if(sum)  //εαν οι extra παραγγελιες και συγκεκριμενα το αθροισμα των λίτρων έχει κάποια τιμη μέσα...
        {
            holesum = parseFloat(sum) + parseFloat($('#parag_litra').val());
            holesum1 = parseFloat(sum1) + parseFloat($('#parag_euro').val());
            holediv = holesum1 / holesum;
        }
        else //...αλλιως...
        {
            holesum = $('#parag_litra').val();
            holesum1 = $('#parag_euro').val();
            holediv = $('#parag_tlitrou').val();
        }
        if($("#months").val() !== "" && $("#years").val() !== "") {

            $.post('GetDataFromBoxes', {
                proig_litra: $('#proig_litra').val(),
                proig_tlitrou: $('#proig_tlitrou').val(),
                proig_euro: $('#proig_euro').val(),
                parag_litra: holesum,
                parag_tlitrou: holediv,
                parag_euro: holesum1,
                neo_litra: $('#neo_litra').val(),
                neo_tlitrou: $('#neo_tlitrou').val(),
                neo_euro: $('#neo_euro').val(),
                katan_litra: $('#katan_litra').val(),
                katan_tlitrou: $('#katan_tlitrou').val(),
                katan_euro: $('#katan_euro').val()
            }, function (response) {
                alert(response);
                $('#myTable').find('input[type="text"]').val('');

            });

        }
        else
        {
            alert("Παρακαλώ επέλεξε μήνα και έτος");
        }
    });

});