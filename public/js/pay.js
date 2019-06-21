



function submittitles(e)
{
    e.preventDefault();
     var titlename= $('#titlename').val();
     var type=$('#titletype').val();
     alert(type);
     alert(titlename);
    $.ajax({
        url:'/addtitle',
        type:'post',
        async:false,
        data:{
            titlename:titlename,
            type:type
        },
        success:function(data)
        {
            alert(data.msg);
            window.location.reload();
            $('#closecreatetitle').click();
        },
        error:function(data)
        {
            alert("शीर्षक पहिल्यै छ");
        }
    })

}



   

for (var i = 1; i < 2; i++) {

    $('.paymenttable').append(`<tr  class=" m-0 row row-${i} text-center">
      <td id="sn" style="font-size: 15px;  box-shadow:2px 2px 3px 4px #ccc !important; height:40px !important; border-radius:5px !important;  " class="col-md-2  bg-white p-2  ">${i}</td>
     

      <td  class="col-md-6 p-0"><input autocomplete="off" list="aamdani"  name="subaccount" style="font-size: 15px; height:40px !important; border-radius:5px !important;   box-shadow:2px 2px 3px 4px #ccc !important; onkeydown="accounttype(event)" id="subaccount" type="text" class="form-control font-weight-bold text-center"  /></td>
      <td  class="col-md-4 p-0"><input style="font-size: 15px;  height:40px !important; border-radius:5px !important;  box-shadow:2px 2px 3px 4px #ccc !important;" name="amount" id="amount"  type="text" pattern="^[०-९\.]*$" class="form-control font-weight-bold text-center"  /></td>
      
    </tr>`)
}





function paymentform() {
    $("#transactiontitle").text('भुक्तानी');
    if ($('.paymentreceiptjournalcontraform').hasClass('d-none')) {
        $('.paymentreceiptjournalcontraform').removeClass('d-none');
    }
    $("#accountname").focus();
    if (!$(".salespurchaseform").hasClass('d-none')) {
        $(".salespurchaseform").addClass('d-none');
    }

    var paymentno = Cookies.get('paymentno');
    $(".paymentno").text(paymentno);

}

function aamdaniform()
{
$("#transactiontitle").val('आम्दानी');
$('table tr td input').removeAttr('list','kharcha');

$('table tr td input').attr('list','aamdani');
}

function kharchaform()
{
$("#transactiontitle").val('खर्च');
$('table tr td input').removeAttr('list','aamdani');
$('table tr td input').attr('list','kharcha');


}




    $('form#paymenttranscation').on('submit',function(e)
    {
    e.preventDefault();
    var paymentform = $("#paymenttranscation").serializeArray();
    console.log($("#paymenttranscation").serializeArray());
    var o = [];
    var op = [];
     // $.each(paymentform, function() {
     //       if (o[this.name]) {
     //           if (!o[this.name].push) {
     //               o[this.name] = [o[this.name]];
     //           }
     //           o[this.name].push(this.value || '');
     //       } else {
     //           o[this.name] = this.value || '';
     //       }
     //   }); 
     $.each(paymentform, function() {

        if(this.name==='datemodify')
        {
        this.value=bs2ad(this.value);
        }
        o.push(this.value);
           
       }); 
    console.log("O is"+ o);
    // var count = 0;
    // var paymentlength = $("[id^=accounttype]:enabled").length;
    // console.log(paymentlength);

    
        $.ajax({
            type: 'post',
            url: '/paymentsubmit',
            data: { o:o},
            async:false,
            error: function(data) {
                // var data=JSON.parse(data);
                console.log(data.result);

            },
            success: function(data) {
                console.log(data);
                // For localhost 
                 // window.location.href="http://localhost:3000/pay";

                //  For server
                    window.location.reload();
                 // window.location.href="http://buddha.ansunepal.com/pay";


                // $('button#resetpayment').click();
                // $('.paymenttable').not([id^=dctype]).attr('disabled','disabled');     
            }

        });
});

$(document).on('click','datalist option',function(e)
{
    var targetid = e.target.id.split('-')[1];  
    console.log(e.target.innerText);
    console.log("instance"+e.target.id);

    $(`#accounttype-${targetid}`).val(e.target.innerText);
    // var accountnamedetails= $(".accountnamedetails li");

})






// function selectaccount(event) {
//     console.log("Clicked list");
//     console.log(event.which);
//     console.log($('li.selected').text());
//     $('#accounttype-1').val($('li.selected').text());
//     $("#accountlist-1").text('');

// }

var gc = $.calendars.instance('nepali', 'ne');
var currentdate = gc.newDate();
var currenttime = new Date();
var currenttime = currenttime.toLocaleTimeString();

// $('.dates').append(`<input  id='datemodify' class='ml-1 border-0 d-inline' value=${currentdate}>`);
// $('.times').append("<h6 class='timeupdate ml-1 d-inline'>" + currenttime + "</h6>");
$('#datemodify').calendarsPicker({ calendar: $.calendars.instance('nepali'),dateFormat: 'yyyy/mm/dd'});



function submitaccount(event) {
    // event.preventDefault();
    alert(event);
    var accountdata = $(".accountinformations").serializeArray();
    var accountdataarray=[];
    console.log(accountdata);
    $.each(accountdata, function() {
        accountdataarray.push(this.value);
           
       }); 
    // console.log(accountdata);
    // var accountdataarray = [];
    // var previousyeardate = $("#previousyear").val().split('-');
    // var converteddate = '';
    // for (var i = 0; i < 3; i++) {
    //     if (i < 2) {
    //         // console.log(calendarFunctions.getNumberByNepaliNumber("१२५"));
    //         converteddate = converteddate + calendarFunctions.getNumberByNepaliNumber(previousyeardate[i]) + '-';
    //     } else {
    //         converteddate = converteddate + calendarFunctions.getNumberByNepaliNumber(previousyeardate[i]);
    //     }
    //     console.log(converteddate);

    // }
    // for (i = 0; i < accountdata.length; i++) {
    //     if (accountdata[i]['value'] === "") {
    //         accountdata[i]['value'] = 0;
    //         console.log(accountdata[i]);
    //     }
    //     if (accountdata[i]['name'] == 'previousyear') {
    //         accountdata[i]['value'] = converteddate;
    //         console.log(accountdata[i]);
    //     }
    //     accountdataarray.push(accountdata[i].value);
    // }

    console.log(accountdata);
    console.log(accountdataarray);
    $.ajax({
        type: 'post',
        url: '/accountsubmit',
        data: { accountdataarray },
        async:false,
        success: function(data) {
            console.log(data.result);
            alert("उपशीर्षक जोडियो");
                window.location.reload();

            // $("#closecreateaccount").click();
        },
        error:function(data)
        {
            alert("उपशीर्षक पहिल्यै छ ");

        }
    });


}

function submitaccounts(event) {
    // event.preventDefault();
    alert(event);
    var accountdata = $(".accountinformationss").serializeArray();
    var accountdataarray=[];
    console.log(accountdata);
    $.each(accountdata, function() {
        accountdataarray.push(this.value);
           
       }); 

    console.log(accountdata);
    console.log(accountdataarray);
    $.ajax({
        type: 'post',
        url: '/accountsubmit',
        data: { accountdataarray },
        success: function(data) {
            console.log(data.result);
            // $("#closecreateaccount").click();
        }
    });


}



function accountselect(event)
{
// $("[id^=accounttype]").on('input',function(e) {
   var li = $('li#accounttype');
   var text=event.target.value;
 for (var i = 0; i < li.length; i++) {
        console.log(li[i]);
        var litext = li[i].textContent;
        console.log(litext);
        if (litext.indexOf(text) !== -1) {
          console.log("Inserted");
           
            if (!$(`li:eq(${i})`).hasClass('selected')) {
                $(`li#accounttype:eq(${i})`).addClass('selected');
                 $(`li#accounttype:eq(${i})`).css('background-color', 'blue');
            }


        } else {
           if ($(`li:eq(${i})`).hasClass('selected')) {
            $(`li#accounttype:eq(${i})`).removeClass('selected');

            $(`li#accounttype:eq(${i})`).css('background-color', 'white');
}
        }

    }

    handle($('li#accountype.selected'));
    if ($('li#accounttype.selected').length < 1) {
        alert("Spelling error");

    }
  // });
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

$('.accountinformations').on('keydown', 'input', function(e) {
    var self = $(this),
        form = self.parents('form:eq(0)'),
        focusable, next, prev;

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
    } else
    if (e.keyCode == 13) {
        e.preventDefault();
        // $('[id^=accountlist]').html('');

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

$('#newaccount').on('click', function(e) {
    e.preventDefault();

});



$('#myModal').on('shown.bs.modal', function() {
    console.log("Entered");
    $(this).find('[autofocus]').focus();
});
$('#itemModal').on('shown.bs.modal', function() {
    console.log("Entered");
    $(this).find('[autofocus]').focus();
});
$('#itemgroupModal').on('shown.bs.modal', function() {
    console.log("Entered");
    $(this).find('[autofocus]').focus();
});

// Form control on enter

var currentDate = new Date();
var currentNepaliDate = calendarFunctions.getBsDateByAdDate(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate());
var formatedNepaliDate = calendarFunctions.bsDateFormat("%y-%m-%d", currentNepaliDate.bsYear, currentNepaliDate.bsMonth, currentNepaliDate.bsDate);







