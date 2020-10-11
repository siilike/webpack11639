var cloneElement;

try
{
	var r = require('preact');
	cloneElement = r.cloneElement;
	console.log('works');
}
catch(e)
{
	console.log(e);
}
