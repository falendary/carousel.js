window.onload = function ()
{
	document.getElementById("carousel").style.transform = "translateZ(-288px) rotateY(0deg)";
}
document.getElementById("next").onclick = function()
{
	console.log("next");
	
	var rotateY = getTransform();
	rotateY = rotateY + 40;
	console.log(rotateY);
	document.getElementById("carousel").style.transform = "translateZ(-288px) rotateY("+ rotateY +"deg)";
}
document.getElementById("back").onclick = function()
{
	console.log('back');
	var rotateY = getTransform();
	console.log(rotateY);
	rotateY = rotateY - 40;
	document.getElementById("carousel").style.transform = "translateZ(-288px) rotateY("+ rotateY +"deg)";
}
function getTransform()
{
	var getTransform = document.getElementById("carousel").style.transform;
	console.log(getTransform);
	var	re = /[^a-zA-Z\s:-;)(]\d*(deg)/;
	newRotateY = getTransform.match(re);
	return parseInt(newRotateY, 10);
}