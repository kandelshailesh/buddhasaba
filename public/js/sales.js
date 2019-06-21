// function returnnumber(value) {

//     return calendarFunctions.getNumberByNepaliNumber(value)
// }

// function returnnepalinumber(value) {
//     return calendarFunctions.getNepaliNumber(value)
// }


function IDGenerator() {

  this.length = 8;
  this.timestamp = +new Date;

  var _getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  this.generate = function () {
    var ts = this.timestamp.toString();
    var parts = ts.split("").reverse();
    var id = "";

    for (var i = 0; i < this.length; ++i) {
      var index = _getRandomInt(0, parts.length - 1);
      id += parts[index];
    }

    return id;
  }


}



$(document).on('keyup', '[id^=anyetotal-]', function (e) {
  // alert('He');
  // e.preventDefault();
  console.log(e.keyCode);
  var targetid = Number(e.target.id.split('-')[1]) + 1;
  console.log(targetid);
  if (e.keyCode === 13) {
    // alert("Eh");
    $("div.anyetable").append(`<div class=" anyetable col-md-12">
             <input type="text" class="form-control  rounded-0 text-center d-inline w-25" placeholder="नाम" name="anyename" id="anyename-${targetid}">
            <input type="text" class="form-control  rounded-0 text-center d-inline w-25" placeholder="परिमाण" name="anyequantity" id="anyequantity-${targetid}">
            <input type="text"  style="width:80px;" class="form-control  rounded-0 text-center d-inline " placeholder="मूल्य/चट्टा"  id="per${targetid}-anye" name="anyeper">
            <input type="text" id="anyetotal-${targetid}" class="form-control text-center rounded-0 d-inline w-25"  placeholder="जम्मा
"  value="०" name="anyetotal">
        </div>`)
  }
})
var generator = new IDGenerator();
// alert(generator.generate());
console.log(generator);
$("#billno").val(generator.generate());
// billno.innerHTML = generator.generate();


// document.addEventListener( "DOMContentLoaded", function() {
//  var btn = document.querySelector( "#generate" ),
//    output = document.querySelector( "#output" );

//  btn.addEventListener( "click", function() {
//    var generator = new IDGenerator();
//    output.innerHTML = generator.generate();

//  }, false); 

// });

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

function returnnepalinumber(strNum) {

  var arrNumNe = strNum.toString().split('').map(function (ch) {
    if (ch === '.' || ch === ',') {
      return ch;
    }
    return nums1[Number(ch)];
  });
  return arrNumNe.join('');
};

function returnnumber(strNum) {

  var arrNumNe = strNum.toString().split('').map(function (ch) {
    if (ch === '.' || ch === ',') {
      return ch;
    }
    return nums[ch];
  });
  return arrNumNe.join('');
};


function collectiontype(value) {
  var collectionlist = {
    'ढलापडा': 'dhalapada',
    'पुनर्स्थापना': 'punarsthapan',
    'गत वर्षकाे माैज्दात': 'previousyearmoujdat',
    'उपभाेक्ता भित्र बिक्री': 'upavoktabikri',
    'पाेल चिरान': 'polchiran',
    'जि.ब. आपूर्ति': 'jibika',
    'लिलाम प्रक्रिया': 'lilamprocess'
  };
  return collectionlist[value];
}

function printbill(event) {

  // var printdata= document.getElementsByClassName("salespurchaseform");


  let printContents, popupWin;
  var bikritype = $("#bikritypes").val();
  console.log("bikritype" + bikritype);
  var upavoktaid;
  var upavoktaname;
  var title;
  var billno = $("#billno").val();


  if (bikritype === 'उपभाेक्ता भित्र बिक्री') {
    upavoktaid = $("#userid").val();
    upavoktaname = $("#username").val();
  } else {
    upavoktaname = $("#username").val();
  }
  var salesdate = $("#salesdate").val();

  //  <h4  class="mt-3" >झिमझिमियाँ सामुदायिक वन </h4>
  // सैनामैना-१०,रूपन्देही
  // देवदेह(९,१०),भलुही

//   <h4  class="mt-3" >झिमझिमियाँ सामुदायिक वन उपभोक्ता समूह</h4>
// <p style="margin-left:100px !important;">सैनामैना-१०,रूपन्देही</p>
//  <h4  class="mt-3" >जनप्रिय सामुदायिक वन उपभोक्ता समूह</h4>
{/* <h4  class="mt-3" >बुद्द सामुदायिक वन उपभोक्ता समूह</h4>
देवदेह-५, खैरेनी */}

  
  if (bikritype === "उपभाेक्ता भित्र बिक्री") {
    title = `<div class="logo" style="margin-left:240px !important;">
<h4  class="mt-3" >बुद्द सामुदायिक वन उपभोक्ता समूह</h4>
<p style="margin-left:100px !important;">देवदेह-५, खैरेनी</p>
  </div>
  <br/>
  <div class="row">
 <div class="col-12 ml-5 salespurchasebill">
        <label >बिल नं:</label>
        <input  type="text" value='${billno}' class="d-inline">
       <label class='salesdateclass text-dark ml-3 d-inline '>मिति:</label>
         <input id="salesdate" name="salesdate" style="width:100px !important; " type="text" class=" ml-2  form-control mr-3 text-left p-0 d-inline" value="${salesdate}"  />
         <br>
        <label > बिक्री प्रकार:</label>
        <input  type="text" value='${bikritype}' class="d-inline">

        <label >उपभाेक्ता नं:</label>
        <input   type="text" name="userid" id="userid" value='${upavoktaid}' style="width:30px;" class=" d-inline mr-3">         
        <label  >नाम:</label>
        <input   type="text" name="accountname" value='${upavoktaname}' id="username" class="d-inline">`;
  } else {

    title = `<div class="logo" style="margin-left:240px !important;">
    <h4  class="mt-3" >बुद्द सामुदायिक वन उपभोक्ता समूह</h4>
    <p style="margin-left:100px !important;">देवदेह-५, खैरेनी</p>
   </div>
   <br/>
   <div class="row">
  <div class="col-12 ml-5 salespurchasebill">
         <label >बिल नं:</label>
         <input  type="text" value='${billno}' class="d-inline">
        <label class='salesdateclass text-dark ml-3 d-inline '>मिति:</label>
          <input id="salesdate" name="salesdate" style="width:100px !important; " type="text" class=" ml-2  form-control mr-3 text-left p-0 d-inline" value="${salesdate}"  />
          <br>
         <label > बिक्री प्रकार:</label>
         <input  type="text" value='${bikritype}' class="d-inline"> 
         <label  >नाम:</label>
         <input   type="text" name="accountname" value='${upavoktaname}' id="username" class="d-inline ">`;
  }


  var tablerow = $(".salestable tr");

  var tabledatatest = tablerow[1].children[5].innerHTML;
  var tabledatatestvalue = $(tabledatatest).attr("id");
  var tableanye = $(".anyetable");

  var tableanyetestvalue = $(tableanye).eq(0).find('input')[3];
  tableanyetestvalue = $(tableanyetestvalue).attr("id");
  alert(tableanyetestvalue);
  tableanyetestvalue = returnnumber($(`#${tableanyetestvalue}`).val());

  var testvalue = returnnumber($(`#${tabledatatestvalue}`).val());
  // var testanyevalue=returnnumber($(`#${}`))
  var anyetable = '';
  if (tableanye.length > 0 && tableanyetestvalue > 0) {
    anyetable = `<p class="font-weight-bold">अन्य</p><table class="table mt-2 w-75 anyetable text-left">
            <tr>
                <td>नाम</td>
                <td>परिमाण</td>
                <td>मूल्य</td>
                <td>जम्मा</td>
            </tr>`;
    for (i = 0; i < tableanye.length; i++) {
      anyetable += '<tr>';
      for (j = 0; j < 4; j++) {
        tableanyetestvalue = $(tableanye).eq(i).find('input')[j];
        tableanyetestvalue = $(tableanyetestvalue).attr("id");
        tableanyetestvalue = $(`#${tableanyetestvalue}`).val();
        anyetable += `<td>${tableanyetestvalue}</td>`;
      }
      anyetable += `</tr>`;
    }
    anyetable += `</table>`;
  }
  var kaathtable = '';
  if (tablerow.length > 1 && Number(testvalue) > 0) {
    kaathtable =
      `<p  class="font-weight-bold"> काठ बिक्री</p>
   <table  class="table w-75 mt-2 salestable">
            <tr>
                <td>गुल्ली नं</td>
                <td>काठकाे नाम</td>
                <td>परिमाण</td>
                <td>मूल्य/Cft</td>
                <td>जम्मा</td>
            </tr>`;


    console.log(tablerow);
    console.log(tablerow.length);
    for (i = 1; i < tablerow.length; i++) {
      kaathtable += `<tr>`;
      console.log("Children" + tablerow[i].children.length);
      // a=tablerow[1].children[2].innerHTML
      for (j = 0; j < tablerow[i].children.length; j++) {
        var tabledata = tablerow[i].children[j].innerHTML;
        var tabledataid = $(tabledata).attr("id");
        var tabledataidvalue = $(`#${tabledataid}`).val();
        console.log("Table id value is " + tabledataidvalue);
        if (j === 0) {
          console.log("HE");
          // kaathtable+=`<td>${i}</td>`;
        } else {
          kaathtable += `<td>${tabledataidvalue}</td>`;
        }
        console.log(kaathtable);
      }
      kaathtable += '</tr>';
    }
    kaathtable += `</table>`;
  } else

  {
    kaathtable = '';
  }

  var daurarecord = [];


  var dauratable;
  if (Number(returnnumber($("#amount-0").val())) > 0) {
    dauratable = `<p class="font-weight-bold"> दाउरा बिक्री</p>
           <table class="table w-75 mt-2 salestable text-left">
            <tr>
                <td>परिमाण</td>
                <td>मूल्य/के.जी</td>
                <td>जम्मा</td>
            </tr>`;

    daurarecord = [$("#quantity-0").val(), $("#per-0").val(), $("#amount-0").val()];
    dauratable += `<tr><td>${daurarecord[0]}</td><td>${daurarecord[1]}</td><td>${daurarecord[2]}</td></tr>`;
    dauratable += `</table>`;

  } else {
    dauratable = '';
  }

  var ghaastable;
  if (Number(returnnumber($("#ghaastotal").val())) > 0) {
    ghaastable = `<p class="font-weight-bold"> घास बिक्री</p>
   <table class="table w-75 mt-2 salestable text-left">
            <tr>
                <td>परिमाण</td>
                <td>मूल्य/भारी</td>
                <td>जम्मा</td>
            </tr>
            `;

    ghaasrecord = [$("#ghaasquantity").val(), $("#per-ghaas").val(), $("#ghaastotal").val()];
    console.log(ghaasrecord);
    ghaastable += `<tr><td>${ghaasrecord[0]}</td><td>${ghaasrecord[1]}</td><td>${ghaasrecord[2]}</td>`;
    ghaastable += `</tr></table>`;

  } else {
    ghaastable = '';
  }


  var totalamount = $("#totalamount").val();
  var totalamountdiv = `<input class= "form-control font-weight-bold" name="totalamount" id="totalamount" value="कुल रकम रू ${totalamount}"></div></div></div>`;
  printContents = document.getElementsByClassName("salespurchaseform")[0].outerHTML;
  popupWin = window.open("");
  popupWin.document.open();
  popupWin.document.write(`
          <html>
            <head>
            <meta charset='utf-8'>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
            </head>
            <style  >
            body,html
            {
            margin-top:20px;
            margin-left:20px;
             
          }
          div.logo
          {
            background:url("/js/forest.jpg") no-repeat;
            top:10px;
            position:relative;
            background-position:80px -2px !important;
            background-size:50px 50px; 
            height:60px;
            z-index:333;
          
          }
            html,body,table
            {
                     color:black !important;
                     font-size:16px !important;
                     font-weight:bold !important;
            }
             input
            {
              border:0px !important;
              font-weight:bold !important;
            }
            </style>
            <style media="print">
@page {
    size:A4 ;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    margin-bottom: 0px;

}
            
           
           
@media print {
  body {
            
            
    
        color:black !important;}
}
        

            </style>
        <body>
        ${title}${kaathtable}${dauratable}${ghaastable}${anyetable}${totalamountdiv}</div></div>
        </body>

          </html>`);

  setTimeout(function () {
    popupWin.print();
    popupWin.close();
  }, 100);
  // popupWin.document.close();
  // console.log(printdata[0].outerHTML);
  // newWin= window.open("");
  // newWin.document.write(kaathtable);
  // newWin.print();
  // newWin.close();

}
$(document).on('keydown keyup keypress', '#userid', function (e) {

  var userid = returnnumber(e.target.value);
  console.log(userid);
  console.log(e.keyCode);
  $.ajax({
    url: 'returnusername',
    method: 'post',
    data: {
      userid: userid
    },
    success: function (data) {
      console.log(data);
      $('#username').val(data.result[0].fname + ' ' + data.result[0].lname);
    }
  })


})
$('input#bikritypes').on('input', function (e) {
  // alert('S');
  var value = e.target.value;
  // alert(value);
  if (value === 'उपभाेक्ता भित्र बिक्री') {
    $('.salespurchase').html('');
    $('.salespurchase').append(`<label style="font-size:15px;" class="ml-2">उपभाेक्ता नं </label>
        <input type="text" name="userid" id="userid" style="width:50px;" class="form-control d-inline ml-2 mr-2" autofocus>         
        <label style="font-size:15px;">नाम</label>
        <input type="text" name="accountname" id="username" class="form-control w-25 d-inline ml-2" autofocus>`);
  } else if (value === 'पाेल चिरान') {
    $('.salespurchase').html('');

    $('.salespurchase').append(`<label style="font-size:15px;">नाम</label>
        <input type="text" name="accountname" id="username" class="form-control w-25 d-inline ml-2" autofocus>`);
  } else if (value === 'जि.ब. आपूर्ति') {
    $('.salespurchase').html('');

    $('.salespurchase').append(`<label style="font-size:15px;" class="ml-2">उपभाेक्ता नं </label>
        <input type="text" name="userid" id="userid" style="width:50px;" class="form-control d-inline ml-2 mr-2" autofocus>         
        <label style="font-size:15px;">नाम</label>
        <input type="text" name="accountname" id="username" class="form-control w-25 d-inline ml-2" autofocus>`);
  } else if (value === 'लिलाम प्रक्रिया') {
    $('.salespurchase').html('');

    $('.salespurchase').append(`<label style="font-size:15px;">नाम</label>
        <input type="text" name="accountname" id="username" class="form-control w-25 d-inline ml-2" autofocus><label style="font-size:15px;">ठेगाना</label>
        <input type="text" name="address" id="address" class="form-control w-25 d-inline ml-2" autofocus>`);
  }
})


for (var i = 1; i < 2; i++) {

  $('.salestable').append(`<tr  class=" m-0 row text-center">
      <td id="sn" class="col-md-1">${i}</td>
      <td class="col-md-1 p-0"><input class="form-control text-center" name="gullino" id="gullino-${i}" type="text" /></td>
      <td   class="col-md-4 p-0"><input class="form-control text-center" name="kaathname" id="kaathname-${i}" type="text" /></td>
      
      <td  class="col-md-2 p-0"><input  name="quantity" pattern="^[०-९\.]*$" id="quantity-${i}" type="text" class="form-control text-center"  /></td>
      <td   class="col-md-2 p-0"><input name="per" pattern="^[०-९\.]*$" id="per-${i}"  type="text" class="form-control text-center"  value='०' /></td>
      <td   class="col-md-2 p-0"><input  name="amount" onkeydown="createnewitem(event)" id="amount-${i}"  value='०' class="form-control text-center"   /></td>
    </tr>`)

}


$(document).on('keyup', '[id^=per]', function (e) {
  var targetid = event.target.id.split('-')[1];
  var value = returnnumber(event.target.value);
  console.log(value);
  var ghaastotal = 0;
  // var totalamount=0;
  var tableanye = $(".anyetable");
  var dataanye = [];
  var totalamount = 0;
  for (i = 0; i < tableanye.length; i++) {

    tableanyetestvalue = $(tableanye).eq(i).find('input')[1];
    tableanyetestvalue = $(tableanyetestvalue).attr("id");
    tableanyetestvalue = $(`#${tableanyetestvalue}`).val();
    tableanyetestvalue1 = $(tableanye).eq(i).find('input')[2];
    tableanyetestvalue1 = $(tableanyetestvalue1).attr("id");
    tableanyetestvalue1 = $(`#${tableanyetestvalue1}`).val();
    console.log("quantity is" + tableanyetestvalue);
    console.log("per is" + tableanyetestvalue1);

    if (Number(returnnumber(tableanyetestvalue)) > 0 && Number(returnnumber(tableanyetestvalue1)) > 0) {
      console.log("entered");

      $(`#anyetotal-${i+1}`).val(returnnepalinumber((returnnumber(tableanyetestvalue) * returnnumber(tableanyetestvalue1)).toFixed(2)));
      totalamount = totalamount + Number(returnnumber($(`#anyetotal-${i+1}`).val()));
      console.log("FROM anye total" + totalamount);
    }

  }




  if (targetid === 'ghaas') {
    // var testtotal=Number(returnnumber($("#totalamount").val().split(' ')[1])); 
    ghaastotal = (returnnumber($(`#ghaasquantity`).val()) * returnnumber($(`#per-ghaas`).val())).toFixed(2);
    $("#ghaastotal").val(returnnepalinumber(ghaastotal));
    // testtotal=testtotal+ghaastotal;
    // $("#totalamount").val(`${returnnepalinumber(ghaastotal)}`);
  }
  if (value > 0 && targetid !== 'ghaas' && targetid !== 'anye') {

    var amountinnepali = (returnnumber($(`#quantity-${targetid}`).val()) * returnnumber($(`#per-${targetid}`).val())).toFixed(2);
    console.log(amountinnepali);
    amountinnepali = returnnepalinumber(amountinnepali);
    console.log(amountinnepali);

    $(`#amount-${targetid}`).val(amountinnepali);
  }
  var amountlist = $("[id^=amount");
  // var totalamount=0;
  console.log(amountlist.length);
  var i;
  if (Number(returnnumber($("#ghaastotal").val())) > 0) {
    totalamount = totalamount + Number(returnnumber($("#ghaastotal").val()));
  }
  for (i = 0; i < amountlist.length; i++) {
    if (Number(returnnumber($(`#amount-${i}`).val())) > 0) {
      totalamount = totalamount + Number(returnnumber($(`#amount-${i}`).val()));
    }
    console.log(totalamount);
    // console.log("AMout is "+Number(returnnumber($(`#amount-${i}`).val() )));
  }
  totalamount = totalamount.toFixed(2)

  console.log("Total amount is " + totalamount);

  // }
  // totalamount=totalamount+ghaastotal;
  totalamount = returnnepalinumber(totalamount);
  console.log("totalamount is " + totalamount);
  $("#totalamount").val(`${totalamount}`);
})

$(document).on('keyup', '[id^=gullino]', function (e) {
  // e.preventDefault();
  console.log(e.keyCode);
  // if(e.keyCode === 13)
  // {


  var gullino = returnnumber(e.target.value);
  var targetid = e.target.id.split('-')[1];
  console.log(gullino);
  $(`#kaathname-${targetid}`).val('');
  // $(`#kaathgrade-${targetid}`).val('');
  $(`#quantity-${targetid}`).val('');
  $(`#per-${targetid}`).val('');
  $(`#amount-${targetid}`).val('');
  $.ajax({
    url: '/kaathdata',
    method: 'post',
    data: {
      gullino: gullino
    },
    success: function (data) {
      console.log(data);
      console.log(data.result);
      if (data.result.length > 0) {
        $(`#kaathname-${targetid}`).val('');
        // $(`#kaathgrade-${targetid}`).val('');
        $(`#quantity-${targetid}`).val('');
        $(`#kaathname-${targetid}`).val(data.result[0].kaathname);
        // $(`#kaathgrade-${targetid}`).val(data.result[0].grade);
        $(`#quantity-${targetid}`).val(returnnepalinumber(data.result[0].quantity));
      }

    }
  })


})

function createnewitem(e) {

  var i = Number(e.target.id.split('-')[1]) + 1;
  console.log('I is ' + i);
  console.log('Pressed' + i);
  if (e.altKey && e.key === "c") {
    console.log("EJ");
    $('#totalamount').focus();
  }

  if ($(`#kaathname-${i}`).length === 0 && e.keyCode ===
    13) {
    $('.salestable').append(`<tr  class=" m-0 row text-center">
      <td id="sn" class="col-md-1">${i}</td>
      <td class="col-md-1 p-0"><input class="form-control text-center" name="gullino" id="gullino-${i}" type="text" /></td>
      <td   class="col-md-4 p-0"><input class="form-control text-center" name="kaathname" id="kaathname-${i}" type="text" /></td>
      
      <td  class="col-md-2 p-0"><input pattern="^[०-९\.]*$" name="quantity" id="quantity-${i}" type="text" class="form-control text-center"  /></td>
      <td   class="col-md-2 p-0"><input pattern="^[०-९\.]*$" name="per" id="per-${i}" class="form-control text-center" /></td>
      <td   class="col-md-2 p-0"><input readonly name="amount" onkeydown="createnewitem(event)" id="amount-${i}"  class="form-control text-center"   /></td>
    </tr>`)

    $("#totallist").val(`${i}`);

  }
  // }


  // e.preventDefault();
  // $(`#padhadhikaariname-${i}`).focus();

}
$('#salespurchasetransaction').on('keydown', 'input', function (zEvent) {

  var self = $(this),
    form = self.parents('form:eq(0)'),
    focusable, next, prev;

  if (zEvent.shiftKey) {
    if (zEvent.keyCode == 13) {

      focusable = form.find('input,a,select,button,textarea').filter(':enabled');
      prev = focusable.eq(focusable.index(this) - 1);

      if (prev.length) {
        prev.focus();
      } else {
        form.submit();
      }
    }
  } else
  if (zEvent.keyCode == 13) {
    // e.preventDefault();
    // $('[id^=accountlist]').html('');



    focusable = form.find('input,a,select,button,textarea').filter(':enabled');
    next = focusable.eq(focusable.index(this) + 1);
    console.log(next);

    if (next.length) {
      next.focus();
      next.select();
    } else {
      form.submit();
    }
    return false;
  }
});


$('#salesdate').calendarsPicker({
  calendar: $.calendars.instance('nepali'),
  dateFormat: 'yyyy/mm/dd'
})