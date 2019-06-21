// function returnnumber(value) {
// return calendarFunctions.getNumberByNepaliNumber(value)
// }

// // function returnnepalinumber(value) {
// // return calendarFunctions.getNepaliNumber(value)
// // }

// function returnnepalinumber(value)
// {
//     value=value.toString();
//     var count= value.split('.');
//     console.log(count.length);
//     console.log(count[0]);
//     var num1; var num2; var length= count.length;
//     if(length>1)
//     {
//         num1= calendarFunctions.getNepaliNumber(parseInt(count[0]));
//         num2= calendarFunctions.getNepaliNumber(parseInt(count[1]));
//         value=num1+'.'+num2;
//     }
//     else
//         {
//          value=calendarFunctions.getNepaliNumber(parseInt(value))
//      } return value;
//  }

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

$.ajax({
    url: '/ghumtikoshsearchdata1',
    type: 'post',
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
        var amount =data.result[i].totalamount + (data.result[i].totalamount * data.result[i].interestrate)/100;

        var paidamount = amount - data.result[i].remainingamount;
        console.log(paidamount)
        var totalamount = data.result[i].totalamount;
        console.log(totalamount);
        $("table.ghumtikoshsearchtable").append(`<tr class="row m-0">
        <td class="col-md-1">${returnnepalinumber(data.result[i].userid)} </td>        
        <td class="col-md-3">${data.result[i].fname +' '+ data.result[i].lname} </td>
		<td class="col-md-2">${data.result[i].aim} </td>
        
        <td class="col-md-1">${returnnepalinumber(data.result[i].totalamount)}</td>	
		<td class="col-md-1">${returnnepalinumber(amount)}</td>	
		<td class="col-md-1">${returnnepalinumber(paidamount)}</td>	
        <td class="col-md-1">${returnnepalinumber(data.result[i].remainingamount)}</td>
		<td class="col-md-2">${data.result[i].givendate}</td>
        
		</tr>`);
    }
    }




})
