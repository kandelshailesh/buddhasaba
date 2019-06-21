function test()
{
	var {a,b}=[];
	var n= prompt("Enter a number");
	var c;
	
	for(i=0;i<n;i++)
	{
	c=prompt("Enter the element of array");
	a.push(c);
	}
	b=a;
	while(1)
	{
	for(i=0;i<a.length;i++)
	{
		console.log(a[i]);
	}
	for(i=a.length-1;i>=0;i--)
	{

	console.log(a.pop());
}

a=b;
}

}



