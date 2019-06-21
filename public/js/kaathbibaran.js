for (var i = 1; i < 2; i++) {

    $('.kaathformtable').append(`<tr  class=" m-0 row text-center">
      <td id="sn" class="col-md-1">${i}</td>
      <td   class="col-md-1 p-0"><input  class="form-control" name="gullino" id="gullino-${i}" type="text"  oninput="javascript:oninputdctype(event);" />

      <td  class="col-md-3 p-0"><input autocomplete="off" list="kaathnamelist" name="kaathname" onkeypress="accounttype(event)" id="kaathname-${i}" type="text" class="form-control text-center"  /></td>

       <td   class="col-md-3 p-0"><input  list="type" autocomplete="off" name="collectiontype" id="collectiontype-${i}"  class="form-control" /></td>

      <td  class="col-md-2 p-0"><input list="unit" autocomplete="off" name="unit"  id="unit-${i}"  class="form-control"  /></td>
      <td   class="col-md-2 p-0"><input onkeypress="createnew(event)" name="quantity" id="quantity-${i}"  class="form-control" /></td>

    </tr>`)
}

// <td  class="col-md-2 p-0"><input  name="grade" id="grade-${i}" type="text" class="form-control"  /></td>
function createnew(e)
{
  
    var i = parseInt(e.target.id.split('-')[1])+1;
    console.log('Pressed');
    if(e.altKey && e.key === "c")
    {
        console.log("EJ");
        $('#totalamount').focus();
    }
    // if(e.keyCode===13)
    // {
    if($(`#accounttype-${i}`).length === 0 && e.keyCode===
        13)
  {
      
     $('.kaathformtable').append(`<tr  class=" m-0 row text-center">
      <td id="sn" class="col-md-1">${i}</td>
      <td   class="col-md-1 p-0"><input  class="form-control" name="gullino" id="gullino-${i}" type="text"  oninput="javascript:oninputdctype(event);" />

      <td  class="col-md-3 p-0"><input autocomplete="off" list="kaathnamelist" name="kaathname" onkeypress="accounttype(event)" id="kaathname-${i}" type="text" class="form-control text-center"  /></td>

       <td   class="col-md-3 p-0"><input autocomplete="off"  list="type" name="collectiontype" id="collectiontype-${i}"  class="form-control" /></td>

      <td  class="col-md-2 p-0"><input list="unit" autocomplete="off" name="unit"  id="unit-${i}"  class="form-control"  /></td>
      <td   class="col-md-2 p-0"><input onkeypress="createnew(event)" name="quantity" id="quantity-${i}"  class="form-control" /></td>

    </tr>`)
    
}
// }


// e.preventDefault();
     // $(`#padhadhikaariname-${i}`).focus();

}

$('.kaathbibaranform').on('keyup', 'input', function(zEvent) {

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


var loop=0;
function kaathformclicked()
{

var b= $('#errortext').text().length;

if(b>2 && loop===0)
{
$("#kaathformclick").click();
loop=1;
}
}


setInterval(kaathformclicked,5);
// $("document").on('input','#errortext',function(e)
// {
//   console.log("Entered");
// var textlength=$('#errortext').text().length;
// if(length>0)
// {
// $("#kaathformclick").click();
// }

// })