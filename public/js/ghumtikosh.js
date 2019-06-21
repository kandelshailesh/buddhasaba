
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


for (var i = 1; i < 2; i++) {

    $('.ghumtikoshtable').append(`<tr  class=" m-0 row row-${i} text-center">
      <td id="sn" class="col-md-1 p-1  ">${i}</td>
      <td   class="col-md-2 p-0">
      <input class="form-control text-center" pattern="[०-९]*" required name="userid" id="userid-${i}" type="text"/>
      </td>
      <td   class="col-md-4 p-0">
      <input class="form-control text-center" required name="username" id="username-${i}" type="text"/>
      </td>
      <td   class="col-md-3 p-0">
      <input class="form-control text-center" required name="motive" id="motive-${i}" type="text"/>
      </td>
      <td  class="col-md-2 p-0">
      <input onkeydown="createnew(event)" oninput="javascript:checktotaldc(event);" name="givenamount" id="price-${i}"  type="text" pattern="[०-९]*" required class="form-control text-center" />
   
            </td>
       
     
    </tr>`);
}


// function removedisable()
// {
//   alert("REMove disabl");
// var useridtag = $("[id^=useriddummy-]");
// alert(useridtag.length);
// alert(useridtag[0].value);
//  var amounttag = $("[id^=pricedummy]");
//  for(i=0;i<useridtag.length;i++)
//  {

// useridtag[i].removeAttribute('disabled','disabled')
//  useridtag[i].style.display="block";
//  amounttag[i].removeAttribute('disabled','disabled');
//  amounttag[i].style.display="block";

//  // $("[id^=pricedummy-]").find(i).removeAttr('disabled','disabled');
//  // $("[id^=pricedummy-]").find(i).removeClass('d-none');


//   // amounttag[i].removeAttr('disabled','disabled');
 
//  }
//   return true;
// }
$(document).on('keyup','[id^=userid]',function(event)
{
//   if(event.preventDefault) {
//     event.preventDefault();
// }
// event.preventDefault();

console.log("Pir");
var targetid= event.target.id.split('-')[1];
var userid= returnnumber(event.target.value);
console.log("Pressed key is "+ event.keyCode);
// $("#useriddummy-"+targetid).val(calendarFunctions.getNumberByNepaliNumber($("#userid-"+targetid).val()));
// console.log($("#useriddummy-"+targetid).val());
     if(event.keyCode === 46 && $('table.ghumtikoshtable tr').length >2)
    {
        console.log("HEllo");
        console.log($(`table .row-${targetid}`))
        console.log("Targetid is"+targetid);
        $(`table tr.row-${targetid}`).remove();
        $(`table .row-${targetid-1} #price-${targetid-1}`).focus();
        // checktotaldc();
    }
  

});
$(document).on('input','[id^=price]',function(e)
{
  var totalpricelist= $("[id^=price]");
  var totalprice=0;
var targetid= event.target.id.split('-')[1];

  // $("#pricedummy-"+targetid).val(calendarFunctions.getNumberByNepaliNumber($("#price-"+targetid).val()));
// console.log($("#pricedummy-"+targetid).val());
// alert(totalprice);
  for(i=0;i<totalpricelist.length;i++)
  {
    if(Number(returnnumber(totalpricelist.eq(i).val()))>0)
    {
    totalprice=totalprice+Number(returnnumber(totalpricelist.eq(i).val()));
    }
  }
  if($("#total").text()==='NaN')
  {
  $("#total").text('रू'+' '+'०');
  }
else
{
  totalprice=returnnepalinumber(totalprice);
  $("#total").text('रू '+totalprice);
}
})

function createnew(e)
{
  
    var i = parseInt(e.target.id.split('-')[1])+1;
    console.log('Pressed');
   
    // if(e.keyCode===13)
    // {
    if($(`#username-${i}`).length === 0 && e.keyCode===
        13)
  {
    $('.ghumtikoshtable').append(`<tr  class=" m-0 row extradded row-${i} text-center">
    <td id="sn" class="col-md-1 p-1  ">${i}</td>
      <td   class="col-md-2 p-0">
      <input class="form-control text-center"  pattern="[०-९]* required name="userid" id="userid-${i}" type="text"/>
      </td>
      <td   class="col-md-4 p-0">
      <input class="form-control text-center" required name="username" id="username-${i}" type="text"/>
      </td>
      <td   class="col-md-3 p-0">
      <input class="form-control text-center" required name="motive" id="motive-${i}" type="text"/>
      </td>
      <td  class="col-md-2 p-0">
      <input onkeydown="createnew(event)" oninput="javascript:checktotaldc(event);" name="givenamount" id="price-${i}"  type="text" pattern="[०-९]*" required class="form-control text-center" />
   
            </td>
       
   
  </tr>`);
    
}
// }
 

// e.preventDefault();
     // $(`#padhadhikaariname-${i}`).focus();

}


$('.ghumtikoshinitialform').on('keydown', 'input', function(e) {

    var self = $(this),
        form = self.parents('form:eq(0)'),
        focusable, next, prev;

    if (e.shiftKey) {
        if (e.keyCode == 13) {

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
        // e.preventDefault();
        // $('[id^=accountlist]').html('');



        focusable = form.find('input,a,select,button,textarea').filter(':enabled');

        console.log("Focusablle is "+$(focusable).attr("id"));
        next = focusable.eq(focusable.index(this) + 1);
        console.log(next);
        // alert($(next).attr("id"));
        var useridtest= $(next).attr("id");
        // alert(useridtest);
        // alert("Useridtest is "+ useridtest);
        var useridname= useridtest.split('-')[0];
        // alert("Useridtest is "+ useridname);
     if(useridname==="username")
     {   
      var useridvalue= useridtest.split('-')[1];

        var userid=returnnumber($(`#userid-${useridvalue}`).val());
        // alert(useridvalue);
        // alert("Userid is"+ userid);
     
      // event.preventDefault();
      // alert("HHH");
    $.ajax({
    url: '/upavoktaforghumtikosh',
    type: 'post',
    data:{userid:userid},
    success: function(data) {
        // var data= JSON.parse(data);
        console.log(data);
        console.table(data.result);
        // 			flname
        // totalamount
        // paidamount
        // remainingamount
        // paymentdate
    $(`#username-${useridvalue}`).val(data.result[0].fname+' '+ data.result[0].lname);
    },
    error:function(data)
    {
      console.log(data);
      alert(data.responseJSON.errormsg);
    $(`#username-${useridvalue}`).val('');
    $(`#username-${useridvalue}`).focus();

    }
  });
    
}

        if (next.length) {
            next.focus();
            next.select();
        } else {
            form.submit();
        }
        return false;
    }
});

var gc = $.calendars.instance('nepali', 'ne');
var currentdate = gc.newDate();
var currenttime = new Date();
var currenttime = currenttime.toLocaleTimeString();
$('#datechange').calendarsPicker({calendar: $.calendars.instance('nepali'),dateFormat: 'yyyy/mm/dd'});
$('#datechange1').calendarsPicker({calendar: $.calendars.instance('nepali'),dateFormat: 'yyyy/mm/dd'})
$('#daybookfinaldate').calendarsPicker({calendar: $.calendars.instance('nepali'),dateFormat: 'yyyy/mm/dd'});


$('form.ghumtikoshinitialform').on('submit',function(e)
{
    e.preventDefault();

    var ghumtikoshform = $("form.ghumtikoshinitialform").serializeArray();
    var o = {};
    var op = [];
    $.each(ghumtikoshform, function(i,input) {
    if(!o[input.name])
    {
        o[input.name]=[];
    }
        }
       );

     $.each(ghumtikoshform, function(i,input) {
 
        if(o[input.name])
        {
           o[input.name].push(input.value);
        }
        else
        { 
           o[input.name]=input.value;
         }
        });

        console.log(o['userid']);
        o['userid'].returnnumberarray();
        o['givenamount'].returnnumberarray();
        o['interestrate'].returnnumberarray();
        console.table(o);
        $.ajax({
          url:'/ghumtikoshsubmit',
          type:'post',
          data:{o:o},
          success:function(data)
          {
            $("button.ghumtikoshreset").click();
            $('table tr.extradded').remove();
            alert(data.msg);
          },
          error:function(data)
          {
            alert("डाटा राम्रोसँग हान्नुहोस");
          }
        })
})



Array.prototype.returnnumberarray = function() {
  for (i = 0; i < this.length; i++) {
    this[i] = returnnumber(this[i])
  }
};
