for (var i = 0; i < 100; i++)
{
	var result = i % 3
	if (result  === 0)
	{
		console.log ("Fizz");
	}
	result = i % 5
	else if (result  === 0)
	{
		console.log ("Fizz");
	}
	result = i % 3
	else if (i % 3  && i % 5)
	{
		console.log ("Fizz");
	}
	else
	{
	console.log(i)
	}


}