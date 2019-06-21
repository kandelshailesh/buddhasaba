   i=1;
	
	var samitititlelist=`<select onkeypress="createnew(event)" id="samiti-${i}" onchange="createnew(event)" class="form-control samitititleuniversal " style="text-align-last:center; text-align: center; " name="samiti-${i}" ><option selected='selected' value='0'>-------------------</option>`;

	var samitipostlist=`<select onchange="postchange(event)" name='post-${i}' style="text-align-last:center; text-align:center;" id='post-${i}' class='form-control samitipostuniversal'><option selected='selected' value='0'>-------------------</option>`;
	var samitititleoptionlist;
	var samitipostoptionlist;



	$.ajax({
		url:'/allselectlist',
		type:'post',
		success:function(data)
		{
				console.log(data);
				console.log(data.postlist);

				for(j=0;j<data.postlist.length;j++)
				{
		 samitipostlist+=`<option value='${data.postlist[j].id}'>${data.postlist[j].name}</option>`
		 samitipostoptionlist+=`<option value='${data.postlist[j].id}'>${data.postlist[j].name}</option>`

		}
		samitipostlist+='</select>'
				for(k=0;k<data.titlelist.length;k++)
				{
		 samitititlelist+=`<option value='${data.titlelist[k].id}'>${data.titlelist[k].name}</option>`;
		 samitititleoptionlist+=`<option value='${data.titlelist[k].id}'>${data.titlelist[k].name}</option>`
		}
		samitititlelist+='</select>'
		$('.padhadhikaaritable').append(`<tr  class=" m-0  row text-center">
			<td id="sn" class="col-md-2">${i}</td>
			<td   class="col-md-4 p-0"><input required id="padhadhikaariname-${i}" name="padhadhikaariname-${i}" style="text-align-last:center;" type="text" class="form-control" autocomplete="off" /></td>
			<td  class="col-md-3 p-0">${samitipostlist}</td>
			<td  class="col-md-3 p-0">${samitititlelist}</td>
		</tr>`);

		}



	})

    



// <td class="col-md-1 p-0"><button type="button" id="itemdel-${i}" class="btn btn-sm btn-danger">
//     <i class="fa fa-trash"></i> Del
// </button></td>
// $('[id^=amount]').on('keydown',function(e)
// {
var post={};

function returnpost(value)
{
	// alert("Post");

$.ajax({
		url:'/allselectlist',
		type:'post',
		async:false,
		success:function(data)
		{
				console.log(data);
				console.log(data.postlist);

for(j=0;j<data.postlist.length;j++)
{
	post[data.postlist[j].id]=0;
}
console.log(post);
for(k=0;k<data.postlist.length;k++)
{
 post[data.postlist[k].id]=data.postlist[k].name;
 
}
console.log(post);


console.log("Post value is"+post[value]);




}


	
})
return post[value];
}


// var post = {'1':'अध्यक्ष','2':'उपाध्यक्ष','3':'सचिव','4':'सह सचिव','5':'सदस्य','6':'सल्लाहकार','7':'संयाेजक','8':'कास','9':'वन हेरालु'};
// return post[value];


function returnsamiti(value)
{

// alert("Samiti");
var title={};
$.ajax({
		url:'/allselectlist',
		type:'post',
		async:false,
		success:function(data)
		{
				console.log(data);
				console.log(data.titlelist);

for(j=0;j<data.titlelist.length;j++)
{
	title[data.titlelist[j].id]=0;
}
console.log(title)
for(k=0;k<data.titlelist.length;k++)
{
 title[data.titlelist[k].id]=data.titlelist[k].name;
}

console.log(title);
console.log("title is "+title[value]);

}
})
return title[value];

// var samiti = {'1':'कार्य समिति','2':'लेखा समिति','3':'कर्मचारी विवरण'};
// return samiti[value];
}

function returnsex(value)
{
	
var sex = {'0':'पुरुष','1':'महिला'};
return sex[value];
}
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
	if($(`#padhadhikaariname-${i}`).length === 0 && e.keyCode===
		13)
  {
    var samitititlelist=`<select onkeypress="createnew(event)" id="samiti-${i}" onchange="createnew(event)" class="form-control samitititleuniversal " style="text-align-last:center; text-align: center; " name="samiti-${i}" ><option selected='selected' value='0'>-------------------</option>`;

	var samitipostlist=`<select onchange="postchange(event)" name='post-${i}' style="text-align-last:center; text-align:center;" id='post-${i}' class='form-control samitipostuniversal'><option selected='selected' value='0'>-------------------</option>`;

	$.ajax({
		url:'/allselectlist',
		type:'post',
		success:function(data)
		{
				console.log(data);
				console.log(data.postlist);

				for(j=0;j<data.postlist.length;j++)
				{
		 samitipostlist+=`<option value='${data.postlist[j].id}'>${data.postlist[j].name}</option>`
		}
		samitipostlist+='</select>'
				for(k=0;k<data.titlelist.length;k++)
				{
		 samitititlelist+=`<option value='${data.titlelist[k].id}'>${data.titlelist[k].name}</option>`
		}
		samitititlelist+='</select>'
		$('.padhadhikaaritable').append(`<tr  class=" m-0  row text-center">
			<td id="sn" class="col-md-2">${i}</td>
			<td   class="col-md-4 p-0"><input id="padhadhikaariname-${i}" name="padhadhikaariname-${i}" style="text-align-last:center;" type="text" class="form-control" autocomplete="off" /><ul style="list-style-type:none;  left:-1px;  max-height:150px; position:absolute; outline:1px solid black;z-index:99; overflow:auto; padding:0px; margin:0px;" id="itemlist-${i}"  name="itemlist-${i}"  class="d-none list-group"></ul>
			<td  class="col-md-3 p-0">${samitipostlist}</td>
			<td  class="col-md-3 p-0">
			${samitititlelist}</td>
		
		
		</tr>`);

		}
	})

	
}
// }


// e.preventDefault();
	 $(`#padhadhikaariname-${i}`).focus();

	}



function typechange(event)
{
	$("#rthno").focus();
}
function postchange(event)
{
	event.preventDefault();
	var id= event.target.id.split('-')[1];
	if(event.keyCode==='13')
	{
	$(`#samiti-${id}`).focus();
}
$(`#samiti-${id}`).focus();
}

var gc = $.calendars.instance('nepali','ne'); 
var currentdate=gc.newDate();
      var currenttime=new Date();
      var currenttime=currenttime.toLocaleTimeString();
      var random =parseInt(Math.floor((Math.random()*1000000000) +1));

    //   $('.dates').append("<label class='ml-1 d-inline'>"+currentdate+"</label>");
        // $('.times').append("<label class='timeupdate ml-1 d-inline'>"+currenttime+"</label>");
        $('.billno').append("<label class='ml-1 d-inline'>"+random+"</label>");

    
	



$('.padhadhikaariaddform').on('keydown', 'input', function(e) {

    var self = $(this),
        form = self.parents('form:eq(0)'),
        focusable, next, prev;

    if (e.shiftKey) {
        if (e.keyCode == 13) {

            focusable = form.find('input,a,select,button,textarea').filter(':enabled');
            prev = focusable.eq(focusable.index(this) - 1);

            if (prev.length) {
                prev.focus();
            } 
            else
            {
            	$('#billsubmit').click();
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
        } 
       
        return false;
    }
});

$('.padhadhikaariaddform').on('submit',function(e)
{
	// alert("INserted");
	e.preventDefault();
	var padhadhikaariformObj=[];
	var padhadhikaariname= $("[id^=padhadhikaariname");
	var post= $("[id^=post");
	var samiti= $("[id^=samiti-");
    var startdate= bs2ad($("#startdate").val());
    var samitino = $("#samitino").val();
	for(i=0;i<padhadhikaariname.length;i++)
	{

	if($(padhadhikaariname).eq(i).val()!=='' && $(post).eq(i).val()!=='' && $(samiti).eq(i).val()!==''&& startdate!=='')
	{
	console.log("NOt");
}
else
{
	alert("डाटा राम्रो सँग हान्नुहोस");

	return false;
}
}
for(i=0;i<padhadhikaariname.length;i++)
	{
	padhadhikaariformObj.push([$(padhadhikaariname).eq(i).val(), $(post).eq(i).val(),$(samiti).eq(i).val(),startdate,samitino]);
		console.log(padhadhikaariformObj);
		console.log($(samiti).eq(i).val());
	}
$.ajax({
	type:'post',
	url:'/padhadhikaarisubmit',
	data:{padhadhikaariformObj:padhadhikaariformObj},
	async:false,
	success:function(data){
		console.log(data.result);
		console.log("Submitted");

		$('#resetpadhadhikaariaddform').click();
			$('.extraadded').remove();
		// $(".billprint").printArea({ mode: 'popup', popClose: true });

	}

});
	
	



console.log(padhadhikaariformObj);
	
})



// $('[id$=amount]').on('change',function(e))
// {}


$("[id^=padhadhikaariform]").on('click',function(e)
{
	console.log("Eh");
	var id=event.target.id.split('-')[1];
	console.log(id);
	for(var i=1;i<4;i++)
	{
				if(id==i)
				{
					if($(`.padhadhikaariformshow-${i}`).hasClass('d-none'))
					{
					$(`.padhadhikaariformshow-${i}`).removeClass('d-none');
				}
				}
				else
				{ 
					if(!$(`.padhadhikaariformshow-${i}`).hasClass('d-none'))
					{
						$(`.padhadhikaariformshow-${i}`).addClass('d-none');
				}
	}
}
})



$('.padhadhikaarikhojbutton').on('click',function(e)
{
	var samitino= $("#samitino1").val();
	// alert(samitino);
    if(samitino!==null)
    {
   $.ajax({
   	type:'post',
    url:'/padhadhikaarikhoj',
    data:{samitino:samitino},
    success:function(data)
    {
    	console.log(data.result);
    	var result=data.result;

    	if(result.length>0)
    	{

			
		var startdate=new Date(ad2bs(`${result[0]['startdate']}`));
		var enddate=data.enddate;
		// if(data.enddate!=='-------')
		// {
    	// enddate= new Date(ad2bs(`${data.enddate}`));
    	// enddate.setDate(enddate.getDate()-1)
		// enddate=`${enddate.getFullYear()}-${enddate.getMonth()}-${enddate.getDate()}`;

		// }
		// else
		// {
		// 	enddate=data.enddate;
		// }
        console.table(result);
    	$('.appendsearch').html('');
    	$('.appendsearch').append(`
			<div class="text-center col-12 mt-2 ">
			<label  class="ml-4 samitinokhoj"> समिति नं</label> <input type="text" style="height:25px !important; width:30px !important;" id="samitino" value='${result[0]['samitino']}' autofocus class="d-inline ml-2 border-0 bg-white" disabled><label class="ml-1 " style="font-size:15px;"> सुरु मिति:</label> <input type="text" style="height:25px !important; width:100px !important;" id="startdate" value='${ad2bs(result[0]['startdate'])}' class="d-inline ml-1 startdatekhoj border-0 bg-white" disabled><label style="font-size:15px;"> अन्तिम मिति:</label> <input type="text" style="height:25px !important;" id="startdate" value='${enddate}' class="d-inline ml-2 startdatekhoj border-0 bg-white" disabled></div>`);

    	$('.appendsearch').append(`<table class=" table mr-1 padhadhikaaritablekhoj  table-md">
                        <tr class=" m-0  row text-center">
                            <th style="font-size:18px !important;" class="col-md-4">नाम</th>
                            <th  style="font-size:18px !important;" class="col-md-3">पद</th>
                            <th style="font-size:18px !important;" class="col-md-3">समिति</th> 
                            <th style="font-size:18px !important;" class="col-md-2"></th> 
                            </tr>`);
               var postname;
               var samitiname;   
    		for(var i=0;i<result.length;i++)
    		{

    			postname=returnpost(result[i].post);
    			console.log("POST NAME is"+postname);
    			samitiname=returnsamiti(result[i].samiti);
    			$('.padhadhikaaritablekhoj').append(`<tr id="user-${result[i].id}" class=" m-0 extraadded  row text-center">
			<td   class="col-md-4 p-1 m-0" style="font-size:15px !important;" id='namekhoj-${result[i].id}'>${result[i].upavoktaname}</td>
			<td style="font-size:15px !important;" class="col-md-3 p-1" id='postkhoj-${result[i].id}'><label class="postwrite-${result[i].id}   m-0">${postname}</label>
			<select name='post-${result[i].id}' style="text-align-last:center; display:none; text-align:center;" id='postkhoj-${result[i].id}'>
			${samitipostoptionlist}
			</td>
			<td class="col-md-3 p-1 " style="font-size:15px !important;" id='samitikhoj-${result[i].id}'>
			<label class="samitiwrite-${result[i].id} m-0">${samitiname}</label>

			<select id="samitikhoj-${result[i].id}" class="form-control" style="text-align-last:center; text-align: center; display:none;" >
			
			${samitititleoptionlist}
			
        </select></td>

			<td  class="col-md-2 m-0 p-0"><button  onclick="deluser(event)" class="deletebutton-${result[i].id} btn btn-danger" id="${result[i].id}"><i class="fa fa-trash text-white"></i></button><a class="modifybutton-${result[i].id} border-0 ml-1 btn btn-info"  href="#" onclick="javascript:modifyuser(event)" id="${result[i].id}"><i class="fa fa-edit text-white"></i></a><a href="#" class="modifysubmitbutton-${result[i].id} btn border-0 btn-success" style="display:none;" onclick="javascript:modifyusersubmit(event)" id="${result[i].id}"><i class="fa fa-paper-plane text-white"></i></a><a href="#" style="display:none;" onclick="cancel(event)" class="cancel-${result[i].id} ml-2 border-0 btn btn-danger " id="${result[i].id}"><i class="text-white fa fa-times"></i></a></td>
			</tr>`);
    				$('.appendsearch').find($(`select#postkhoj-${result[i].id} option`)).eq(`${result[i].post}`).attr('selected','selected');
    				$('.appendsearch').find($(`select#samitikhoj-${result[i].id} option`)).eq(`${result[i].samiti}`).attr('selected','selected');

    		// console.log(selected);

    		}
    	
    		$('.appendsearch').append('<table>');
    	}
    	else
    	{ 
    		$('.appendsearch').html('');

    		$('.appendsearch').append(`<p class="text-center">डाटा उपलब्ध भएन</p>`);
    	}
    }
   })
}

});

function deluser(event)
{
	event.preventDefault();
	var id = event.target.id;

	$.ajax({
		type:'post',
		url:'/padhadhikaaridel',
		data:{ids:id},
		success:function(data){
			$('.appendsearch').find($(`#user-${id}`)).remove();

			console.log("Deleted");
		}

	})

	
}
function modifyuser(event)
{
	event.preventDefault();
	var id = event.target.id;
	console.log(id);
	$(`select#postkhoj-${id}`).show();
	$(`select#samitikhoj-${id}`).show();


	$(`.postwrite-${id}`).hide();
	$(`.samitiwrite-${id}`).hide();


	$(`#namekhoj-${id}`).attr('contenteditable','true');
	$(`#postkhoj-${id}`).attr('contenteditable','true');
	$(`#samitikhoj-${id}`).attr('contenteditable','true');
	$(`.deletebutton-${id}`).hide();
	$(`.modifybutton-${id}`).hide();
	$(`.modifysubmitbutton-${id}`).show();	
	// $(`#user-${id}`).attr('contenteditable','true');
	$(`.cancel-${id}`).show();

}

function modifyusersubmit(event)
{
    event.preventDefault();
	var id = event.target.id;
    console.log(id);
  
	$(`.postwrite-${id}`).text(returnpost($(`select#postkhoj-${id}`).val()));
	$(`.postwrite-${id}`).show();	
	$(`.samitiwrite-${id}`).show();
	console.log($(`select#postkhoj-${id}`).val());
	$(`.postwrite-${id}`).text(returnpost($(`select#postkhoj-${id}`).val()));
	$(`.samitiwrite-${id}`).text(returnsamiti($(`select#samitikhoj-${id}`).val()));
	  $(`select#postkhoj-${id}`).hide();
	$(`select#samitikhoj-${id}`).hide();
		var data1=[[$(`#namekhoj-${id}`).text()],[$(`select#postkhoj-${id}`).val()],[$(`select#samitikhoj-${id}`).val()],[$('.startdatekhoj').val()],[id]];
console.log(data1);
    // console.log($(`#namekhoj-${id}`));
    // console.log(id);
    // console.log(data1);

    // console.log(data1);
	$.ajax({
		type:'post',
		url:'/modifypadhadhikaarisubmit',
		data:{data1:data1},
		success:function(data){
			$(`.deletebutton-${id}`).show();
			$(`.modifybutton-${id}`).show();
			$(`.modifysubmitbutton-${id}`).hide();
			$(`.cancel-${id}`).hide();
				$(`#namekhoj-${id}`).attr('contenteditable','false');
	$(`#postkhoj-${id}`).attr('contenteditable','false');
	$(`#samitikhoj-${id}`).attr('contenteditable','false');
			console.log("Modified");
	


		}

	});

}

function cancel(event)
{
	event.preventDefault();
	var id = event.target.id;
    console.log("Clicked");
    console.log(id);
	$(`.deletebutton-${id}`).show();
	$(`.modifybutton-${id}`).show();
	$(`.modifysubmitbutton-${id}`).hide();
	$(`.cancel-${id}`).hide();

$(`select#postkhoj-${id}`).hide();
	$(`select#samitikhoj-${id}`).hide();


	$(`.postwrite-${id}`).show();
	$(`.samitiwrite-${id}`).show();
}


var gc = $.calendars.instance('nepali', 'ne');
var currentdate = gc.newDate();
var currenttime = new Date();
var currenttime = currenttime.toLocaleTimeString();

// $('.dates').append(`<input  id='datemodify' class='ml-1 border-0 d-inline' value=${currentdate}>`);
// $('.times').append("<h6 class='timeupdate ml-1 d-inline'>" + currenttime + "</h6>");
$('#startdate').calendarsPicker({ calendar: $.calendars.instance('nepali'),dateFormat: 'yyyy/mm/dd'});
$('#startdate').attr('class','text-center ml-2');
// $('#startdate').val(currentdate);


$('#titleModal').on('shown.bs.modal', function (e) {
  // do something...
  $('#titleModal').find('[autofocus]').focus();
})

$('#postModal').on('shown.bs.modal', function (e) {
  // do something...
  $('#postModal').find('[autofocus]').focus();
})

$('.samitiposts').on('submit',function(e)
{
	e.preventDefault();
	var formdata= $('.samitiposts').serializeArray();
	var formobj=[];
	$.each(formdata,function(i,input)
	{
		formobj.push(input.value);
	})

console.log(formobj);
$.ajax({
	url:'/samitipostcreate',
	type:'post',
	data:{formobj:formobj},
	success:function(data)
	{
	alert("पद जोडियो");
		$('.samitiposts').trigger('reset');
	$('#postModal').find('button').get(0).click();
	  window.location.reload();


	// $('#postModal').modal('toggle');
		
	},
	error:function(data)
	{
		alert(data.responseText);


		// alert("समितिको नाम पहिल्यै छ");
	}

})


})




$('.samitititles').on('submit',function(e)
{
	// alert("Entered");
	// e.preventDefault();
	e.preventDefault();
	var formdata= $('.samitititles').serializeArray();

	var formobj=[];
	$.each(formdata,function(i,input)
	{
		formobj.push(input.value);
	})
	console.log(formobj);
$.ajax({
	url:'/samitititlecreate',
	type:'post',
	data:{formobj:formobj},
	success:function(data)
	{
	alert("समिति जोडियो");
	$('.samitititles').trigger('reset');

	$('#titleModal').find('button').get(0).click();
  window.location.reload();


	// $('#titleModal').find('button.close').click();
	// $('#titleModal').modal("hide");
	// $('#titleModal').hide();
	// $('body').removeClass('modal-open')
	// $('div.modal-backdrop').removeClass('show');
	// $('.samitititles').trigger('reset');

	},
	error:function(data)
	{
	console.log(data.responseText);
	alert(data.responseText);

	// $('#titleModal').modal('show');
	// alert("यो पद पहिल्यै छ");
	}

})

	// e.preventDefault();

})
