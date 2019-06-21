var trcount= $("tr");
var a='';

var gc = $.calendars.instance('nepali', 'ne');
var currentdate = gc.newDate();
var currenttime = new Date();
var currenttime = currenttime.toLocaleTimeString();
$('#daybookinitialdate').calendarsPicker({calendar: $.calendars.instance('nepali'),dateFormat: 'yyyy/mm/dd'})
$('#daybookfinaldate').calendarsPicker({calendar: $.calendars.instance('nepali'),dateFormat: 'yyyy/mm/dd'});
// console.log(trcount.textContent);
// for(i=0;i<trcount.length;i++)
// {
// a+= '<button class="btn btn-danger bg-danger"><i class="fa text-white fa-del"></i>H<button><button class="btn btn-info"><i class="fa text-white fa-edit"></i>H<button>';

// }
console.log(a);

$("#daybookkhoj").on('click',function(e)
{
	var initialdate = $("#daybookinitialdate").val();
	console.log(initialdate);
	var finaldate = $("#daybookfinaldate").val();
	console.log(finaldate);
	if(initialdate !== '' && finaldate !== '')
	{
		$.ajax({
			url:'/daybookreturn',
		    type:'post',
		    data:{
		    	'initialdate':initialdate,
		    	'finaldate':finaldate
		    },
		    success:function(data)
		    {
		    console.log(data);
		    var results= data.newdata;
// 		    $('.daybooktable').append(`<table class="table table-bordered">
// <tr class="row">
//     <th class="col-md-auto"> मिति</th>
//     <th class="col-md-auto"> भाैचर प्रकार</th>
//     <th class="col-md-auto"> भाैचर नं</th>
//     <th class="col-md-auto"> सारांश </th>   
// `);
if(results.length>0)
{
	$('.daybookdiv').html('');
	 $('.daybookdiv').append(`<table class="table table-bordered table-hover daybooktable">
                        <tr>
                            <th> मिति</th>
                            <th> भाैचर प्रकार</th>
                            <th> भाैचर नं</th>
                            <th> सारांश </th>
                        </tr>
                    </table>`);
results.forEach(function(result)
{ 
	// console.log(result);

	
    $('.daybooktable').append(`<tr id="rows-${result.transactionno}" class="row-${result.transactionno}">
    <td >  ${result.paymentdate} </td>    
    <td > ${result.vouchertype} </td>
    <td> ${result.voucherno} </td>
    <td> ${result.narration} </td>
   </tr> `)
});
}
else
{
	$('.daybookdiv').html('');
	$('.daybookdiv').append('<p> डाटा उपलब्ध भयन </p>');
}
}
// $('.daybooktable').append('</tr></table>');
		    
		})
	}
})


$(document).on('click','[id^=rows-]',function(e)
{
	console.log(e);
alert("Clicked"+ e.currentTarget.className);
var id = e.currentTarget.className.split('-')[1];
window.open(`/edit/pay/${id}`);
})
$("[id^=modifybutton]").on('click',function(e)
{    
	console.log("clicked");
	var targetid=e.target.id;
	console.log(targetid);
	var id= e.target.id.split('-')[1];
	$(`.transactionid-${id}`).attr("contenteditable","true");
	$(`#modifybutton-${id}`).hide();
	$(`#deletebutton-${id}`).hide();
	var accountname= $(`input#accountname-${id}`);
	console.log(accountname.length);
	for(i=0;i<accountname.length;i++)
	{
		console.log($(`input#accountname-${id}`).eq(i).val());
		$(`input#accountname-${id}`).eq(i).hide();
		$(`input#editaccountname-${id}`).eq(i).show();
		$(`input#editaccountname-${id}`).eq(i).val($(`input#accountname-${id}`).eq(i).val());
	}
	// $(`#accountname-${id}`).hide();
	// $(`#editaccountname-${id}`).show();


	$(`#submitbutton-${id}`).show();
	$(`#cancelbutton-${id}`).show();	

});

$("[id^=submitbutton]").on('click',function(e)
{
	console.log("clicked");
	var id= event.target.id.split('-')[1];
	$(`.transactionid-${id}`).removeAttr("contenteditable","true");
	var accountname= $(`#editaccountname-${id}`);
	$(`#modifybutton-${id}`).show();
	$(`#deletebutton-${id}`).show();
	$(`#submitbutton-${id}`).hide();
	$(`#cancelbutton-${id}`).hide();
	var accountname= $(`input#accountname-${id}`);
	console.log(accountname.length);
	for(i=0;i<accountname.length;i++)
	{
	$(`input#editaccountname-${id}`).eq(i).hide();
	$(`input#accountname-${id}`).eq(i).show();
	$(`input#accountname-${id}`).eq(i).val($(`input#editaccountname-${id}`).eq(i).val());
		// console.log($(`input#accountname-${id}`).eq(i).val());
	}



    $.each(accountname, function(index, value) {
    	console.log(value.value);
  // do your stuff here
});
});

$("[id^=deletebutton]").on('click',function(e)
{
	console.log("clicked");
	var id= event.target.id.split('-')[1];
		$(`.transactionid-${id}`).remove();
	$(`#modifybutton-${id}`).hide();
	$(`#deletebutton-${id}`).hide();
	$(`#submitbutton-${id}`).show();
	$(`#cancelbutton-${id}`).show();
	
});
$("[id^=cancelbutton]").on('click',function(e)
{
	console.log("clicked");
	var id= event.target.id.split('-')[1];
	$(`.transactionid-${id}`).attr("contenteditable","true");
	$(`#modifybutton-${id}`).show();
	$(`#deletebutton-${id}`).show();
	$(`#submitbutton-${id}`).hide();
	$(`#cancelbutton-${id}`).hide();	
});

$('.addbutton').append(a);
$("[id^=month]").on('click',function(e)
{
var month =event.target.id.split('-')[1];
console.log(month);
var monthdata=$('.month');
// if(monthdata=month)
// {
// 	$('month')
// }

var monthlength=0;
for(i=0;i<monthdata.length;i++)
{
if($('.month').eq(i).attr('data-month')==month)
{
	monthlength=monthlength+1;
}
}

console.log(monthlength);
console.log(monthdata.length);
if(monthlength==0)
{
	// $('.table-header').hide();
	$('table').hide();
	$('.nodata').show();
}
else
{
		$('table').show();
		$('.nodata').hide();
}
for(i=0;i<monthdata.length;i++)
{


if($('.month').eq(i).attr('data-month')==month)
{
	$('.table-header').show();

	$('.month').eq(i).show();
	$('.month-total').eq(i).show();
	$('.month-row').eq(i).show();
	$('.nodata').hide();



}
else
{
	$('.month').eq(i).hide();
	$('.month-total').eq(i).hide();
	$('.month-row').eq(i).hide();



}


}


})


// var currentDate = new Date();
// var currentNepaliDate = calendarFunctions.getBsDateByAdDate(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate());
// var formatedNepaliDate = calendarFunctions.bsDateFormat("%y-%m-%d", currentNepaliDate.bsYear, currentNepaliDate.bsMonth, currentNepaliDate.bsDate);

// $("#daybookinitialdate").nepaliDatePicker({
//     dateFormat: "%y-%m-%d",
//     closeOnDateSelect: true,
//     minDate: "२०७०-१-२०",
//     maxDate: formatedNepaliDate
// });

// $("#daybookfinaldate").nepaliDatePicker({
//     dateFormat: "%y-%m-%d",
//     closeOnDateSelect: true,
//     minDate: "२०७०-१-२०",
//     maxDate: formatedNepaliDate
// });