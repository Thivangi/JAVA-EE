var box1;
var box2;
var box3;
var box4;
var box5;
var box6;  //ποότητα σε ευρο 1 παραγγελίας
var box7;
var box8;
var box9;
var box10;
var box11;
var box12;
var sum;  //αθροισμα λιτρών extra παραγγελιών
var sum1; //αθροισμα ευρώ extra παραγγελιών
var pro;  //ποσότητα σε ευρώ υπολοίπων παραγγελιών
var div;


function calculateSum() { //υπολογισμος αθροίσματος της στήλης των λιτρων πετρελαίου μόνο
    sum = 0;
    //iterate through each textboxes and add the values
    $(".txt").each(function () {

        //add only if the value is number
        if (!isNaN(this.value) && this.value.length > 0) {
            sum += parseFloat(this.value);
            //array.push(this.value);
        }
    });

    $("#sum").html(sum);
    //$("#array").html(array);
}



function calculatePro() {  //υπολογισμος γινομενου κάθε καινουριας γραμμης 3 στηλης (ΔΗΛΑΔΗ ΠΟΣΌΤΗΤΑ ΣΕ ΕΥΡΟ ΚΑΘΕ ΠΑΡΑΓΓΕΛΙΑΣ)

    $('tr').each(function () { //για καθε table row...
        //the value of pro needs to be reset for each row, so it has to be set inside the row loop
        pro = 1;
        //find the combat elements in the current row and pro it
        $(this).find('.txt, .rmb').each(function () {  //...βρες αυτες που εχουν κλασση .txt .rmb
            var combat = $(this).val();
            if (!isNaN(combat) && combat.length > 0) {
                pro *= parseFloat(combat);

            }
        });

        $('.crt', this).val(pro);
    });

}

function calculateSum1() {  //υπολογισμος αθροίσματος της στήλης μονο των ευρω των παραγγελιών
    sum1 = 0;

    $(".crt").each(function () {

        //add only if the value is number
        if (!isNaN(this.value) && this.value.length > 0) {
            sum1 += parseFloat(this.value);

        }
    });
    $("#array").html(sum1);

}

function calculateDiv() {  //υπολογισμος υπολοίπου καθε καινουριας γραμμης(extra παραγελιων) 1 και 3 στηλης

    $('tr').each(function () {
        div = 1;
        $(this).find('.txt, .crt').each(function () {
            var combat = $(this).val();
            if (!isNaN(combat) && combat.length > 0) {
                div = parseFloat(combat) / div;

            }
        });
        $('.rmb', this).val(div);

    });
}


function onchange_txb3() {  //υπολογισμος ευρο προηγουμενου
    box1 = $('#proig_litra');
    box2 = $('#proig_tlitrou');
    box3 = $('#proig_euro');
    if(box1.val().length > 0 && box2.val().length > 0)
    {
        parseFloat(box3.val(parseFloat(box1.val()) * parseFloat(box2.val())));
    }
}
function onchange_txb2() {      //υπολογισμος τιμη λιτρου προηγουμενου
    if(box3.val().length > 0 && box1.val().length > 0)
    {
        parseFloat(box2.val(parseFloat(box3.val()) / parseFloat(box1.val())));
    }
}
function onchange_txb6() {  //υπολογισμος ευρο παραγγελιων
    box4 = $('#parag_litra');
    box5 = $('#parag_tlitrou');
    box6 = $('#parag_euro');
    if(box4.val().length > 0 && box5.val().length > 0)
    {
        parseFloat(box6.val(parseFloat(box4.val()) * parseFloat(box5.val())));
    }
}
function onchange_txb5() {  //υπολογισμος τιμη λιτρου παραγγελιων
    if(box4.val().length > 0 && box6.val().length > 0)
    {
        parseFloat(box5.val(parseFloat(box6.val()) / parseFloat(box4.val())));
    }
}
function onchange_txb10() {  //υπολογισμος λίτρων κατανάλωσης
    box4 = $('#parag_litra');
    box7 = $('#neo_litra');
    box10 = $('#katan_litra');
    var check2 = document.getElementById("txt");
    if(box1.val().length > 0 && box4.val().length > 0 && box7.val().length > 0)
    {
        if(check2 !==null) {
            parseFloat(box10.val(parseFloat(box1.val()) + parseFloat(box4.val()) + parseFloat(sum) - parseFloat(box7.val()))); //υπολογισμος λιτρων καταναλωσης
        }
        else{  //εαν δεν υπάρχουν extra παραγγελιες
            parseFloat(box10.val(parseFloat(box1.val()) + parseFloat(box4.val()) - parseFloat(box7.val())));
        }

    }
    else if(box1.val().length > 0 && box7.val().length > 0 && box4.val().length ===0)  //εαν δεν υπαρχουν καθολου παραγγελιες
    {

        parseFloat(box10.val(parseFloat(box1.val()) - parseFloat(box7.val())));

    }
}
function onchange_txb8() {     //υπολογισμός τιμής λίτρου νεου υπολοίπου
    box8 = $('#neo_tlitrou');
    box9 = $('#neo_euro');
    var praksi2;
    var praksi3;
    var check = parseFloat(box1.val()) + parseFloat(box4.val()) + parseFloat(sum);
    var check2 = document.getElementById("txt");
    var check3 = parseFloat(box1.val()) + parseFloat(box4.val());

    if(box1.val().length > 0 && box2.val().length > 0 && box4.val().length > 0 && box5.val().length > 0 && box7.val().length > 0)
    {
        if(check2 !==null) {  //ελεγχος αν το πεδιο των extra παραγγελιων εχει τιμές
            if (check >= parseFloat(box7.val())) {  //εαν το αθροισμα των λιτρων(παραγγελιες +προιγ υπολοιπο) ειναι μεγαλύτερο είναι μεγαλύτερο απο το νεο υπόλοιπο τοτε προχωρα ειναι σωστα τα δεδομενα
                if (parseFloat(box7.val()) <= parseFloat(sum)) {  //εαν εχουν καταναλωθει το προηγουμ υπολοιπο και η 1 παραγγελια, το νεο υπολοιπο που θα μείνει θα έχει την τιμη των extra παραγγελιων
                    praksi2 = parseFloat(sum1) / parseFloat(sum);
                    box9.val(parseFloat(box7.val()) * praksi2);
                    box8.val(parseFloat(box9.val()) / parseFloat(box7.val()));
                }
                else if (parseFloat(box7.val()) > parseFloat(sum) && parseFloat(box7.val()) <= (parseFloat(sum) + parseFloat(box4.val()))) { //εαν η τιμη του νεου υπόλοιπου βρισκεται αναμεσα των extra παραγγελιων και της 1 παραγγελιας
                    praksi3 = parseFloat(box7.val() - parseFloat(sum));
                    praksi2 = parseFloat(sum1) / parseFloat(sum);
                    box9.val((parseFloat(sum) * praksi2) + (praksi3 * parseFloat(box5.val())));
                    box8.val(parseFloat(box9.val()) / parseFloat(box7.val()));
                }
                else if (parseFloat(box7.val()) > (parseFloat(sum) + parseFloat(box4.val())) && parseFloat(box7.val()) <= (parseFloat(sum) + parseFloat(box4.val()) + parseFloat(box1.val()))) {
                    praksi3 = parseFloat(box7.val()) - parseFloat(sum) - parseFloat(box4.val());
                    praksi2 = parseFloat(sum1) / parseFloat(sum);
                    box9.val((parseFloat(sum) * praksi2) + (parseFloat(box4.val()) * parseFloat(box5.val())) + (praksi3 * parseFloat(box2.val())));
                    box8.val(parseFloat(box9.val()) / parseFloat(box7.val()));
                }
            }
            else {
                alert("Παρακαλώ δώσε μου το σωστό ΝΕΟ υπόλοιπο");
            }
        }
        else  //εαν το πεδιο των extra παραγγελιων δεν εχει τιμες
        {
            if(check3 >= parseFloat(box7.val())) {
                if(parseFloat(box7.val()) <= parseFloat(parseFloat(box4.val())))
                {
                    box9.val(parseFloat(box7.val()) * parseFloat(box5.val()));
                    box8.val(parseFloat(box9.val()) / parseFloat(box7.val()));
                }
                else if (parseFloat(box7.val()) > parseFloat(box4.val()) && parseFloat(box7.val()) <= parseFloat(box4.val()) + parseFloat(box1.val()))
                {
                    praksi3 = parseFloat(box7.val() - parseFloat(box4.val()));
                    box9.val((parseFloat(box4.val()) * parseFloat(box5.val())) + (praksi3 * parseFloat(box2.val())));
                    box8.val(parseFloat(box9.val()) / parseFloat(box7.val()));
                }
            }
            else {
                alert("Παρακαλώ δώσε μου το σωστό ΝΕΟ υπόλοιπο");
            }
        }
    }
    else if(box1.val().length > 0 && box2.val().length > 0 && box4.val().length ===0 )  //εαν δεν υπαρχουν καθολου παραγγελιες
    {
        if(parseFloat(box1.val()) >= parseFloat(box7.val()))
        {
            box9.val(parseFloat(box7.val()) * parseFloat(box2.val()));
            box8.val(parseFloat(box9.val()) / parseFloat(box7.val()));
        }
        else {
            alert("Παρακαλώ δώσε μου το σωστό ΝΕΟ υπόλοιπο");
        }

    }
}

function onchange_txb11() {     //υπολογισμος τιμης λιτρου καταναλωσης
    box11 = $('#katan_tlitrou');
    box12 = $('#katan_euro');
    box6 = $('#parag_euro');
    var check2 = document.getElementById("txt");
    if(box3.val().length > 0 && box6.val().length > 0 && box9.val().length > 0)
    {
        if( box6.val().length > 0) {
            if (check2 !== null) {
                box12.val(parseFloat(box3.val()) + parseFloat(box6.val()) + parseFloat(sum1) - parseFloat(box9.val()));
                box11.val(parseFloat(box12.val()) / parseFloat(box10.val()));
            }
            else    //εαν δεν υπάρχουν extra παραγγελιες
            {
                box12.val(parseFloat(box3.val()) + parseFloat(box6.val()) - parseFloat(box9.val()));
                box11.val(parseFloat(box12.val()) / parseFloat(box10.val()));
            }
        }

    }
    else if(box3.val().length > 0 && box6.val().length === 0 && box9.val().length > 0)  //εαν δεν υπαρχουν παραγγελιες
    {
        box12.val(parseFloat(box3.val())  - parseFloat(box9.val()));
        box11.val(parseFloat(box12.val()) / parseFloat(box10.val()));
    }
}



$(document).ready(function () {
    if($('#proig_litra').length > 0 && $('#proig_tlitrou').length > 0)
    {
        $('#proig_litra, #proig_tlitrou').on('input', onchange_txb3);
    }
    if($('#proig_litra').length > 0 && $('#proig_euro').length > 0)
    {
        $('#proig_litra, #proig_euro').on('input', onchange_txb2);
    }
    if($('#parag_litra').length > 0 && $('#parag_tlitrou').length > 0)
    {
        $('#parag_litra, #parag_tlitrou').on('input', onchange_txb6);
        $("table").on("input", ".rmb, .txt", calculatePro);  //υπολογισμος γινομενου καθε καινουριας γραμμης(παραγγελιας) της πρώτης και 2 στηλης
    }
    if($('#parag_litra').length > 0 && $('#parag_euro').length > 0)
    {
        $('#parag_litra, #parag_euro').on('input', onchange_txb5);
        $("table").on("input", ".crt, .txt", calculateDiv);  //υπολογισμος διαίρεσης καθε καινουριας γραμμης της πρώτης και 3 στηλης
    }
    if($('#proig_litra').length > 0 && $('#parag_litra').length > 0 && $('#neo_litra').length > 0)
    {
        $('#neo_litra, #proig_litra, #parag_litra').on('input', onchange_txb10);
    }
    if($('#proig_litra').length > 0 && $('#proig_tlitrou').length > 0 && $('#parag_litra').length > 0 && $('#parag_tlitrou').length > 0 && $('#neo_litra').length > 0)
    {
        $('#neo_litra').on('input', onchange_txb8);
    }
    if($('#proig_euro').length > 0 && $('#parag_euro').length > 0 && $('#neo_euro').length > 0)
    {
        $('#neo_euro, #neo_litra').on('input', onchange_txb11);
        $("table").on("input", ".txt", calculateSum);  //υπολογισμος αθροίσματος της πρώτης στηλης καθε καινουριας γραμμης
        $("table").on("input", ".txt, .rmb", calculateSum1);
    }
});


