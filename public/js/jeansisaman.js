for (var i = 1; i < 2; i++) {

     $('.jeansisamantable').append(`<tr  class=" m-0 row row-${i} text-center">
     
      <td   class="col-md-4 p-0">
      <input class="form-control text-center" name="productnamedisplay" id="productname-${i}" type="text"/>

      </td>
      <td  class="col-md-4 p-0"><input  name="quantitydisplay" id="quantity-${i}"  type="text"  class="form-control text-center" />
            
            <td  class="col-md-4 p-0"><input onkeydown="createnew(event)" list="liststatus" name="status" id="statusid-${i}"  type="text"  class="form-control text-center" />
                   </td>
       
     
    </tr>`);
}


// function removedisable()
// {
//   alert("REMove disabl");
// var productnametag = $("[id^=productnamedummy-]");
// alert(productnametag.length);
// alert(productnametag[0].value);
//  var quantitytag = $("[id^=quantitydummy]");
//  for(i=0;i<productnametag.length;i++)
//  {

// productnametag[i].removeAttribute('disabled','disabled')
//  productnametag[i].style.display="block";
//  quantitytag[i].removeAttribute('disabled','disabled');
//  quantitytag[i].style.display="block";

//  // $("[id^=quantitydummy-]").find(i).removeAttr('disabled','disabled');
//  // $("[id^=quantitydummy-]").find(i).removeClass('d-none');


//   // quantitytag[i].removeAttr('disabled','disabled');
 
//  }
//   return true;
// }
$(document).on('keyup','[id^=productname]',function(e)
{
console.log("Pir");
var targetid= event.target.id.split('-')[1];
$("#productnamedummy-"+targetid).val(calendarFunctions.getNumberByNepaliNumber($("#productname-"+targetid).val()));
console.log($("#productnamedummy-"+targetid).val());
     if(event.altKey && event.key === "c")
    {
        console.log("HEllo");
        console.log($(`table .row-${targetid}`))
        $(`table .row-${targetid}`).remove();
        $(`table .row-${targetid-1} #quantity-${targetid-1}`).focus();
        // checktotaldc();
    }
});
$(document).on('keyup','[id^=quantity]',function(e)
{
  var totalquantitylist= $("[id^=quantity]");
  var totalquantity=0;
var targetid= event.target.id.split('-')[1];

  $("#quantitydummy-"+targetid).val(calendarFunctions.getNumberByNepaliNumber($("#quantity-"+targetid).val()));
console.log($("#quantitydummy-"+targetid).val());

  for(i=0;i<totalquantitylist.length;i++)
  {
    if(totalquantitylist.eq(i).val()>0)
    {
    totalquantity=totalquantity+parseInt(totalquantitylist.eq(i).val());
    }
  }
  if($("#total").text()==='NaN')
  {
  $("#total").text('रू '+0);
  }
else
{
  $("#total").text('रू '+totalquantity);
}
})

function createnew(e)
{
  
    var i = parseInt(e.target.id.split('-')[1])+1;
    console.log('Pressed');
   
    // if(e.keyCode===13)
    // {
    if($(`#accounttype-${i}`).length === 0 && e.keyCode===
        13)
  {
          $('.jeansisamantable').append(`<tr  class=" m-0 row row-${i} text-center">
     
      <td   class="col-md-4 p-0">
      <input class="form-control text-center" name="productnamedisplay" id="productname-${i}" type="text"/>

      </td>
      <td  class="col-md-4 p-0"><input  name="quantitydisplay" id="quantity-${i}"  type="text"  class="form-control text-center" />
            
            <td  class="col-md-4 p-0"><input onkeydown="createnew(event)" list="liststatus" name="status" id="statusid-${i}"  type="text"  class="form-control text-center" />
                   </td>
       
     
    </tr>`);
    
}
// }
 

// e.preventDefault();
     // $(`#padhadhikaariname-${i}`).focus();

}


$('.jeansisamanform').on('keydown', 'input', function(e) {

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

var gc = $.calendars.instance('nepali', 'ne');
var currentdate = gc.newDate();
var currenttime = new Date();
var currenttime = currenttime.toLocaleTimeString();
$('#datechange').calendarsPicker({calendar: $.calendars.instance('nepali'),dateFormat: 'yyyy/mm/dd'})
$('#daybookfinaldate').calendarsPicker({calendar: $.calendars.instance('nepali'),dateFormat: 'yyyy/mm/dd'});