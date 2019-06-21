
// 	$('button').on('click',function(e)
// 	{
// 		alert("Clicked");
// 	var userid= $("#userid").val();
// 	$.ajax({
// 		url:'/ghumtikoshsearchdata',
// 		type:'post',
// 		data:{userid:userid},
// 		success:function(data)
// 		{
//          // var data= JSON.parse(data);
// 			console.table(data.result[0]);
// 		$(".khumtikoshsearchtable").remove();
// 		var element= document.createElement("table");
// 		element.className='khumtikoshsearchtable';
// 		element.append("<tr><th>उपभाेक्ता नं</th><th>उपभाेक्ता नाम</th><th>Amount</th><th>Remaining</th></tr>")
// 		element.append(`<tr><td>${data.result[0].userid}</td><td>${data.result[0].fname +' '+ data.result[0].lname}</td><td>${data.result[0].totalamount}</td><th>${data.result[0].remaining}</td></tr>`);
// 		$('.appendresult').append(element);
// 		}
// 	});
// })
$('button#ghumtikoshadd').on('click',function(e)
	{
	e.preventDefault();
	alert("Clicked");
	var userid= returnnumber($("#userid").val());
	var paidamount=returnnumber($("#paidamount").val());
	var paymentdate=$("#paymentdate").val();
	console.log(paymentdate);
	if(paidamount>0)
	{
	$.ajax({
		url:'/ghumtikoshadddata',
		type:'post',
		data:{
			userid:userid,
			paidamount:paidamount,
			paymentdate:paymentdate
		},
		success:function(data)
		{
         // var data= JSON.parse(data);
         console.log("Clicked");
		}
	});
         console.log("Clicked");

			$('.ghumtikoshreset').click();
		}

})

var nums = {
    '०': 0,
    '१': 1,
    '२': 2,
    '३': 3,
    '४': 4,
    '५': 5,
    '६': 6,
    '७': 7,
    '८': 8,
    '९': 9
};

var nums1 = {
    0: '०',
    1: '१',
    2: '२',
    3: '३',
    4: '४',
    5: '५',
    6: '६',
    7: '७',
    8: '८',
    9: '९'
};


//  function getenglish(strNum) {
//   var arrNumNe = strNum.toString().split('').map(function (ch) {
//     if (ch === '.' || ch === ',') {
//       return ch;
//     }
//     return nums[ch];
//   });
//   return arrNumNe.join('');
// };
function returnnepalinumber(strNum) {
    var arrNumNe = strNum.toString().split('').map(function(ch) {
        if (ch === '.' || ch === ',') {
            return ch;
        }
        return nums1[Number(ch)];
    });
    return arrNumNe.join('');
};

function returnnumber(strNum) {
    var arrNumNe = strNum.toString().split('').map(function(ch) {
        if (ch === '.' || ch === ',') {
            return ch;
        }
        return nums[ch];
    });
    return arrNumNe.join('');
};
// function returnnumber(value)
// {
// 	return calendarFunctions.getNumberByNepaliNumber(value)
// }
// function returnnepalinumber(value)
// {
// 	return calendarFunctions.getNepaliNumber(value)
// }

	$('#userid').on('keypress',function(e)
	{
		// alert("Clicked");
		console.log(e.keyCode);
		if(e.keyCode===13)
		{
	var userid= $("#userid").val();
	userid= returnnumber(userid);
	$.ajax({
		url:'/ghumtikoshsearchdata',
		type:'post',
		data:{userid:userid},
		success:function(data)
		{
		 // var data= JSON.parse(data);
		 console.log(data.result);

			console.table(data.result[0]);
// 			flname
// totalamount
// paidamount
// remainingamount
// paymentdate
			if(data.result.length>0)
			{
			$('#flname').val(`${data.result[0].fname +' '+ data.result[0].lname}`)
			$('#totalamount').val(`${returnnepalinumber(data.result[0].remainingamount)}`)
			$('#paidamount').val(`${returnnepalinumber(0)}`)

			$('#remainingamount').val(`${returnnepalinumber(data.result[0].remainingamount)}`);
			$('#paymentdate').calendarsPicker({calendar: $.calendars.instance('nepali'),dateFormat: 'yyyy/mm/dd'})
			var gc = $.calendars.instance('nepali', 'ne');
var currentdate = gc.newDate();
$('#paymentdate').val(currentdate);

		// $(".khumtikoshsearchtable").remove();
		// var element= document.createElement("table");
		// element.className='khumtikoshsearchtable';
		// element.append("<tr><th>उपभाेक्ता नं</th><th>उपभाेक्ता नाम</th><th>Amount</th><th>Remaining</th></tr>")
		// element.append(`<tr><td>${data.result[0].userid}</td><td>${data.result[0].fname +' '+ data.result[0].lname}</td><td>${data.result[0].totalamount}</td><th>${data.result[0].remaining}</td></tr>`);
		// $('.appendresult').append(element);
		}
		else
		{
			$('.ghumtikoshreset').click();
		}
	}
	});
}
})



$("#paidamount").on('keyup',function(e)
{
var paidamount= returnnumber($("#paidamount").val());
console.log(paidamount)
var totalamount= returnnumber($("#totalamount").val());
console.log(totalamount);
var remainingamount= returnnepalinumber(totalamount-paidamount);
$("#remainingamount").val(remainingamount);

})