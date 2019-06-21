function returnnumber(value) {
    return calendarFunctions.getNumberByNepaliNumber(value)
}

function returnnepalinumber(value) {
    return calendarFunctions.getNepaliNumber(value)
}

// $('#userid').on('keypress', function(e) {
//             // alert("Clicked");
//             console.log(e.keyCode);
//             if (e.keyCode === 13) {
//                 var userid = $("#userid").val();
//                 var userid = calendarFunctions.getNumberByNepaliNumber(userid);

// function()
// {
                $.ajax({
                    url: '/jeansisamansearchdata',
                    type: 'post',
                    data: { userid: 1 },
                    success: function(data) {
                        // var data= JSON.parse(data);
                        console.log(data.result.length);
                        console.table(data.result[0]);
                        // 			flname
                        // totalamount
                        // paidamount
                        // remainingamount
                        // paymentdate
                    for(i=0;i<data.result.length;i++)
                    {
                       
                        $("table.jeansisamantable").append(`<tr class="row m-0">
						<td class="col-md-1 font-weight-bold">${i+1}</td>
						<td class="col-md-4 font-weight-bold">${data.result[i].productname} </td>
                        <td class="col-md-3 font-weight-bold">${returnnepalinumber(data.result[i].quantity)} </td>
						<td class="col-md-4 font-weight-bold">${data.result[i].status}</td>	
						
						</tr>`);
                    }
                    }

                

            
        })
            // }
        //     }
        // })

        // $('button#ghumtikoshadd').on('click',function(e)
        // 	{
        // 	e.preventDefault();
        // 	alert("Clicked");
        // 	var userid= returnnumber($("#userid").val());
        // 	var paidamount=returnnumber($("#paidamount").val());
        // 	var paymentdate=$("#paymentdate").val();
        // 	console.log(paymentdate);
        // 	$.ajax({
        // 		url:'/ghumtikoshadddata',
        // 		type:'post',
        // 		data:{
        // 			userid:userid,
        // 			paidamount:paidamount,
        // 			paymentdate:paymentdate
        // 		},
        // 		success:function(data)
        // 		{
        //          // var data= JSON.parse(data);
        // 			$('button#ghumtikoshreset').click();
        // 		}
        // 	});
        // })



        // 	$('#userid').on('keypress',function(e)
        // 	{
        // 		// alert("Clicked");
        // 		console.log(e.keyCode);
        // 		if(e.keyCode===13)
        // 		{
        // 	var userid= $("#userid").val();
        // 	var userid= calendarFunctions.getNumberByNepaliNumber(userid);
        // 	$.ajax({
        // 		url:'/ghumtikoshsearchdata',
        // 		type:'post',
        // 		data:{userid:userid},
        // 		success:function(data)
        // 		{
        //          // var data= JSON.parse(data);

        // 			console.table(data.result[0]);
        // // 			flname
        // // totalamount
        // // paidamount
        // // remainingamount
        // // paymentdate
        // 			$('#flname').val(`${data.result[0].fname +' '+ data.result[0].lname}`)
        // 			$('#totalamount').val(`${returnnepalinumber(data.result[0].remainingamount)}`)

        // 			$('#paidamount').val(`${returnnepalinumber(0)}`)

        // 			$('#remainingamount').val(`${returnnepalinumber(data.result[0].remainingamount)}`);
        // 			$('#paymentdate').calendarsPicker({calendar: $.calendars.instance('nepali'),dateFormat: 'yyyy/mm/dd'})
        // 			var gc = $.calendars.instance('nepali', 'ne');
        // var currentdate = gc.newDate();
        // $('#paymentdate').val(currentdate);

        // 		// $(".khumtikoshsearchtable").remove();
        // 		// var element= document.createElement("table");
        // 		// element.className='khumtikoshsearchtable';
        // 		// element.append("<tr><th>उपभाेक्ता नं</th><th>उपभाेक्ता नाम</th><th>Amount</th><th>Remaining</th></tr>")
        // 		// element.append(`<tr><td>${data.result[0].userid}</td><td>${data.result[0].fname +' '+ data.result[0].lname}</td><td>${data.result[0].totalamount}</td><th>${data.result[0].remaining}</td></tr>`);
        // 		// $('.appendresult').append(element);
        // 		}
        // 	});
        // }
        // })



        // $("#paidamount").on('keyup',function(e)
        // {
        // var paidamount= returnnumber($("#paidamount").val());
        // console.log(paidamount)
        // var totalamount= returnnumber($("#totalamount").val());
        // console.log(totalamount);
        // var remainingamount= returnnepalinumber(totalamount-paidamount);
        // $("#remainingamount").val(remainingamount);

        // })