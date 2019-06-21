$('.totaldebitamount').text(calendarFunctions.getNepaliNumber(parseInt($('.totaldebitamount').text())))
$('.totalcreditamount').text(calendarFunctions.getNepaliNumber(parseInt($('.totalcreditamount').text())))

     
function createnewpayment(e)
{
  
    var i = parseInt(e.target.id.split('-')[1])+1;
    console.log('Pressed');
    if(e.altKey && e.key === "d")
    {
        console.log("EJ");
        $('#totalamount').focus();
    }
    // if(e.keyCode===13)
    // {
    if($(`#accounttype-${i}`).length === 0 && e.keyCode===
        13)
  {
      $('.paymenttable').append(`<tr  class=" m-0 row row-${i} text-center">
      <td id="sn" class="col-md-2 p-1  ">${i}</td>
      <td   class="col-md-1 p-0"><input class="form-control" name="dctype" id="dctype-${i}" type="text" maxlength="2" oninput="javascript:oninputdctype(event);" onkeydown="javascript:onkeydowndctype(event);" />

      <td  class="col-md-5 p-0"><input  name="accounttype-${i}" onkeydown="accounttype(event)" list="accounttype" id="accounttype-${i}" type="text" class="form-control" disabled /></td>
      <td  class="col-md-2 p-0"><input onkeypress="createnewpayment(event)" oninput="javascript:checktotaldc(event);" name="debit" id="debit-${i}"  type="text" pattern="[०-९]*" class="form-control text-center" disabled /></td>
      <td   class="col-md-2 p-0"><input onkeypress="createnewpayment(event)" oninput="javascript:checktotaldc(event);" name="credit" id="credit-${i}"  type="text" pattern="[०-९]*" class="form-control text-center" disabled/></td>
    </tr>`)
    
}
// }
 

// e.preventDefault();
     // $(`#padhadhikaariname-${i}`).focus();

}


function checktotaldc() {
    // event.preventDefault();
    var credittag = $("[id^=credit]");
    var debitamount = 0;
    var creditamount = 0;
    var debittag = $("[id^=debit]");
    for (var i = 0; i < credittag.length; i++) {
        if (credittag[i].value !== '') {
            console.log("Check total"+credittag[i].value);
            // debittag[i].value == 0;
            // var subcredit = parseInt(credittag[i].value);
            
            var subcredit = calendarFunctions.getNumberByNepaliNumber(credittag[i].value); 


            creditamount = creditamount + subcredit;

            console.log(creditamount);

        }

    // $("#totalcredit").text('Rs ' +calendarfunctions.getNepaliNumber(creditamount));

    }
      console.log('रू ' +creditamount)
    $("#totalcredit").text('रू ' +calendarFunctions.getNepaliNumber(creditamount));


    for (var i = 0; i < debittag.length; i++) {
        if (debittag[i].value !== '') {
            console.log(debittag[i].value);
            // debittag[i].value == 0;
            // var subdebit = parseInt(debittag[i].value);
            var subdebit = parseInt(calendarFunctions.getNumberByNepaliNumber(debittag[i].value)); 
   
            debitamount = debitamount + subdebit;
            console.log(debitamount);
        }
    // $("#totaldebit").text('Rs ' + calendarfunctions.getNepaliNumber(debitamount));


    }
  
    $("#totaldebit").text('रू ' + calendarFunctions.getNepaliNumber(debitamount));

    // $("#totalcredit").text('Rs ' + creditamount);
    // $("#totaldebit").text('Rs ' + debitamount);

}
function onkeydowndctype(event)
{
    var targetid = event.target.id.split('-')[1];
    console.log("targetid"+targetid);
    console.log("EVEnt key is "+ event.key);
    if(event.altKey && event.key === "c")
    {
        console.log("HEllo");
        console.log($(`table .row-${targetid}`))
        $(`table .row-${targetid}`).remove();
        checktotaldc();
    }

}

function oninputdctype(event) {
    
    
    var targetid = event.target.id.split('-')[1];
    // console.log("targetid"+targetid);
    // console.log("EVEnt key is "+ event.key);
 //    if(event.altKey && event.key === "c")
    // {
    //  console.log("HEllo");
    //  $(`.row-${targetid}`).remove();
    // }
    if (event.target.value != 'के' || event.target.value != 'डे') {
        $("#debit-" + targetid).attr('disabled', 'disabled');
        $("#accounttype-" + targetid).attr('disabled', 'disabled');
        $("#credit-" + targetid).attr('disabled', 'disabled');
        $("#debit-" + targetid).attr('disabled', 'disabled');
        $("#narration-" + targetid).attr('disabled', 'disabled');
    }
    // event.target.value = event.target.value.replace(/[^cd]/, '');
    // targetid=event.target.id.split('-')[1];


    console.log(targetid);
    if (targetid !== 1 && (event.target.value === 'के' || event.target.value === 'डे')) {
        var checkprevious = $(`#dctype-${targetid-1}`).val();
        console.log(checkprevious);
        if (checkprevious === 'के') {

            if ($(`#accounttype-${targetid-1}`).val() === '') {
                console.log('error');
                $(`#accounttype-${targetid-1}`).addClass('border-danger');
            } else {
                if ($(`#accounttype-${targetid-1}`).hasClass('border-danger')) {
                    $(`#accounttype-${targetid-1}`).removeClass('border-danger');
                }

            }
            if ($(`#credit-${targetid-1}`).val() === '') {
                $(`#credit-${targetid-1}`).addClass('border-danger');
                // checktotaldc();

            } else {
                if ($(`#credit-${targetid-1}`).hasClass('border-danger')) {
                    $(`#credit-${targetid-1}`).removeClass('border-danger');
                    // checktotaldc();

                }
            }
        }
        // if (checkprevious === 'd') {


        //     if ($(`#accounttype-${targetid-1}`).val() === '') {
        //         console.log('error');
        //         $(`#accounttype-${targetid-1}`).addClass('border-danger');
        //     } else {
        //         if ($(`#accounttype-${targetid-1}`).hasClass('border-danger')) {
        //             $(`#accounttype-${targetid-1}`).removeClass('border-danger');
        //         }

        //     }
        //     if ($(`#debit-${targetid-1}`).val() === '') {
        //         $(`#debit-${targetid-1}`).addClass('border-danger');
        //         checktotaldc('event');

        //     } else {
        //         if ($(`#debit-${targetid-1}`).hasClass('border-danger')) {
        //             $(`#debit-${targetid-1}`).removeClass('border-danger');
        //             checktotaldc('event');

        //         }
        //     }
        // }
    }


    if (event.target.value === 'के') {

if (targetid!== 1)
{
                $("#credit-"+targetid).removeAttr('disabled', 'disabled');
        $("#debit-" + targetid).attr('disabled', 'disabled');
        $("#accounttype-" + targetid).removeAttr('disabled', 'disabled');

        console.log("Credit entered")

        $("#narration-"+targetid).removeAttr('disabled', 'disabled');
        $("#credit-"+targetid).val($("#debit-" + targetid).val());
        $("#debit-"+targetid).val('');
        checktotaldc();
}
        
        // $("#debit-"+targetid).addClass('bg-white');
    }


    if (event.target.value === 'डे') {
        if (targetid !== 1) {
            $("#accounttype-" + targetid).removeAttr('disabled', 'disabled');
            $("#narration-" + targetid).removeAttr('disabled', 'disabled');
             $("#debit-" + targetid).removeAttr('disabled', 'disabled');
            $("#credit-" + targetid).attr('disabled', 'disabled');
            $("#debit-" + targetid).val($("#credit-" + targetid).val());
            $("#credit-" + targetid).val('');
            checktotaldc();

           

            // $("#credit-"+targetid).addClass('bg-white');
        }
    }
}


$('#paymenttranscation').on('keyup', 'input', function(e) {
      e.preventDefault();
    var self = $(this),
        form = self.parents('form:eq(0)'),
        focusable, next, prev;
    console.log("PRessed n");
    if (e.shiftKey) {
        if (e.keyCode == 13) {
            e.preventDefault();
            focusable = form.find('input,a,select,button,textarea').filter(':enabled');
            prev = focusable.eq(focusable.index(this) - 1);

            if (prev.length) {
                prev.focus();
            } else {
                form.submit();
            }
        }
        return false;
    } else if(e.altKey && e.keyCode ===13)
     {
        $("#narrationbox").focus();
        return false;
     }
else
    if (e.keyCode == 13) {
        e.preventDefault();
        $('[id^=accountlist]').html('');

        focusable = form.find('input,a,select,button,textarea').filter(':enabled');
        next = focusable.eq(focusable.index(this) + 1);
        if (next.length) {
            next.focus();
        } else {
            form.submit();
        }
        return false;
    }
});



$("[id^=credit]").on('keyup', function(event) {
    var value = event.target.value;
    var targetid = event.target.id.split('-')[1];
    // length= value.length;
    if (value > 0) {
        if ($(`#credit-${targetid}`).hasClass('border-danger')) {
            $(`#credit-${targetid}`).removeClass('border-danger')
            // checktotaldc('event');

        }
        checktotaldc();
    } else {
        if (!$(`#credit-${targetid}`).hasClass('border-danger')) {
            $(`#credit-${targetid}`).addClass('border-danger');
            checktotaldc();

        }
    }
});

$("[id^=debit]").on('keyup', function(event) {
    var value = event.target.value;
    var targetid = event.target.id.split('-')[1];
    // length= value.length;
    if (value > 0) {
        if ($(`#debit-${targetid}`).hasClass('border-danger')) {
            $(`#debit-${targetid}`).removeClass('border-danger')
        }
        checktotaldc('event');

    } else {
        if (!$(`#debit-${targetid}`).hasClass('border-danger')) {
            $(`#debit-${targetid}`).addClass('border-danger');
            checktotaldc('event');

        }
    }

})


$('form#paymenttranscation').on('submit',function(e)
    {
    e.preventDefault();
    var paymentform = $("#paymenttranscation").serializeArray();
    console.log($("#paymenttranscation").serializeArray());
    var o = [];
    var op = [];
    //  $.each(paymentform, function() {
    //        if (o[this.name]) {
    //            if (!o[this.name].push) {
    //                o[this.name] = [o[this.name]];
    //            }
    //            o[this.name].push(this.value || '');
    //        } else {
    //            o[this.name] = this.value || '';
    //        }
    //    }); 
    // console.log(o);
    var count = 0;
    var paymentlength = $("[id^=accounttype]:enabled").length;
    console.log(paymentlength);

    for (i = 0; i < paymentlength * 3; i = i + 3) {
        console.log("Paymentform" + paymentform[i]);
        if ((paymentform[i]['value'] == 'के' && paymentform[i + 2]['value'] !== '') && paymentform[i + 1]['value'] !== "") {
            console.log([paymentform[i]['value'], paymentform[i + 1]['value'], calendarFunctions.getNumberByNepaliNumber(paymentform[i + 2]['value']), $("#transactiontitle").text(), parseInt($("#transactionid").text()) + 1]);
            // op.push([paymentform[i]['value'], paymentform[i + 1]['value'], calendarFunctions.getNumberByNepaliNumber(paymentform[i + 2]['value']), $("#transactiontitle").text(), parseInt(Cookies.get('transactionno'))]);
             op.push([paymentform[i]['value'], paymentform[i + 1]['value'], calendarFunctions.getNumberByNepaliNumber(paymentform[i + 2]['value']), $("#transactiontitle").text(),3]);
            // op[count]={"dctype":paymentform[i]['value'],"accounttype":paymentform[i+1]['value'],"dcamount":paymentform[i+3]['value'],"narration":paymentform[i+4]['value']};
            count++;
        }
        if ((paymentform[i]['value'] == 'डे' && paymentform[i + 2]['value'] !== '') && paymentform[i + 1]['value'] !== "") {
            console.log([paymentform[i]['value'], paymentform[i + 1]['value'], calendarFunctions.getNumberByNepaliNumber(paymentform[i + 2]['value']), parseInt($("#transactionid").text()) + 1]);
            // op.push([paymentform[i]['value'], paymentform[i + 1]['value'], calendarFunctions.getNumberByNepaliNumber(paymentform[i + 2]['value']), $("#transactiontitle").text(), parseInt(Cookies.get('transactionno'))]);
               op.push([paymentform[i]['value'], paymentform[i + 1]['value'], calendarFunctions.getNumberByNepaliNumber(paymentform[i + 2]['value']), $("#transactiontitle").text(), 3]);
            // op[count]={"dctype":paymentform[i]['value'],"accounttype":paymentform[i+1]['value'],"dcamount":paymentform[i+2]['value'],"narration":paymentform[i+4]['value']};
            count++;
        }

    }
    // op.push($("#transactiontitle").text());
    console.log(op);
     var transactiontitle = $("#transactiontitle").text();
    if (($("#totalcredit").text() === $("#totaldebit").text()) && ($("[id^=accounttype]:enabled").length > 1)) {
        if(transactiontitle === 'भुक्तानी')
        {
        var paymentdetails= [parseInt(Cookies.get('transactionno')),$("#narrationbox").val(),$("#datechange").val(),$("#transactiontitle").text(),3];
    }
            
     if(transactiontitle === 'कन्ट्रा')
        {
        var paymentdetails= [parseInt(Cookies.get('transactionno')),$("#narrationbox").val(),$("#datemodify").val(),$("#transactiontitle").text(),parseInt(Cookies.get('contrano')) + 1];
    }
     if(transactiontitle === 'बिक्री')
        {
        var paymentdetails= [parseInt(Cookies.get('transactionno')),$("#narrationbox").val(),$("#datemodify").val(),$("#transactiontitle").text(),parseInt(Cookies.get('salesno')) + 1];
    }
     if(transactiontitle === 'खरीद')
        {
        var paymentdetails= [parseInt(Cookies.get('transactionno')),$("#narrationbox").val(),$("#datemodify").val(),$("#transactiontitle").text(),parseInt(Cookies.get('purchaseno')) + 1];
    }
     if(transactiontitle === 'प्राप्ति')
        {
        var paymentdetails= [parseInt(Cookies.get('transactionno')),$("#narrationbox").val(),$("#datemodify").val(),$("#transactiontitle").text(),parseInt(Cookies.get('receiptno')) + 1];
    }
    var transactionnocookies= Cookies.get('transactionno');
console.log("transactionnocookies"+transactionnocookies);
        $.ajax({
            type: 'post',
            url: `/edit/paymentsubmit/3`,
            data: { op:op,paymentdetails:paymentdetails },
            error: function(data) {
                // var data=JSON.parse(data);
                console.log(data.result);
            },
            success: function(data) {
                console.log(data);
               
               window.location.href="localhost:3000/daybookreturn/"
                // if (transactiontitle === 'बिक्री') {
                //     if (Cookies.get('salesno') == undefined) {
                //         Cookies.set('salesno', 0, { expires: 1 });
                //     } else {
                //         var paymentnovalue = parseInt(Cookies.get('salesno')) + 1;
                //         Cookies.set('salesno', paymentnovalue, { expires: 1 });
                //     }
                // } else if (transactiontitle === 'भुक्तानी') {
                //     if (Cookies.get('paymentno') == undefined) {
                //         Cookies.set('paymentno', 0, { expires: 1 });
                //     } else {
                //         var paymentnovalue = parseInt(Cookies.get('paymentno')) + 1;
                //         Cookies.set('paymentno', paymentnovalue, { expires: 1 });
                //     }
                // } else if (transactiontitle === 'प्राप्ति ') {
                //     if (Cookies.get('receipt') == undefined) {
                //         Cookies.set('receipt', 0, { expires: 1 });
                //     } else {
                //         var paymentnovalue = parseInt(Cookies.get('receiptno')) + 1;
                //         Cookies.set('receipt', paymentnovalue, { expires: 1 });
                //     }

                // }
                // else if ( transactiontitle ==='कन्ट्रा')
                // {
                //      if (Cookies.get('contra') == undefined) {
                //         Cookies.set('contra', 0, { expires: 1 });
                //     } else {
                //         var paymentnovalue = parseInt(Cookies.get('contra')) + 1;
                //         Cookies.set('contra', paymentnovalue, { expires: 1 });
                //     }
                // }

                // // console.log(Cookies.get('paymentno'));
                // console.log(data);
                // console.log(data.transactionno);
                // $("#transactionid").text(data.transactionno);
                // $('.resetpayment').click();
                // // $('.paymenttable').not([id^=dctype]).attr('disabled','disabled');
                // $('.paymenttable td input').attr('disabled', 'disabled');
                // $("[id^=dctype]").removeAttr('disabled', 'disabled');

                // var paymentno = Cookies.get('paymentno');
                // $(".paymentno").text(paymentno);
                // $("#totalcredit").text('Rs. 0')
                // $("#totaldebit").text('Rs. 0')
            }

        });
    }


    // var a= JSON.stringify(paymentform);
    // console.log(a);
});

$(document).on('click','datalist option',function(e)
{
    var targetid = e.target.id.split('-')[1];  
    console.log(e.target.innerText);
    console.log("instance"+e.target.id);

    $(`#accounttype-${targetid}`).val(e.target.innerText);
    var accountnamedetails= $(".accountnamedetails li");
    for(i=0;i<accountnamedetails.length;i++)
    {
        $(".accountnamedetails a").removeClass(`selected bg-info accountlist-${targetid}`);
        $(".accountnamedetails a").removeAttr('id',`accountlist-${targetid}`);
    }
        $('.accountnamedetails').css('margin-left','-30px');

if($(`#dctype-${targetid}`).val()==='के')
{
     $(`#credit-${targetid}`).focus();
}
else
{
     $(`#debit-${targetid}`).focus();

}
})


$('#datechange').calendarsPicker({calendar: $.calendars.instance('nepali'),dateFormat: 'yyyy/mm/dd'})
// $('#daybookfinaldate').calendarsPicker({calendar: $.calendars.instance('nepali'),dateFormat: 'yyyy/mm/dd'});
// var currentDate = new Date();
// var currentNepaliDate = calendarFunctions.getBsDateByAdDate(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate());
// var formatedNepaliDate = calendarFunctions.bsDateFormat("%y-%m-%d", currentNepaliDate.bsYear, currentNepaliDate.bsMonth, currentNepaliDate.bsDate);
// $("#datechange").nepaliDatePicker({
//     dateFormat: "%y-%m-%d",
//     closeOnDateSelect: true,
//     minDate: "२०७०-१-२०",
//     maxDate: formatedNepaliDate
// });






