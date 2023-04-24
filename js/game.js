// alert("This is js");
// console.log("Hello js");
// document.write("Hello world");
function insertImage()
{
	document.querySelectorAll(".box").forEach(image => {
		if (image.innerText.length !== 0) {
			if (image.innerText == "Wpawn" || image.innerText == "Bpawn") {
				image.innerHTML = `${image.innerText} <img class='allimg allpawn' src="image/${image.innerText}.png" alt="${image.innerText}">`
				image.style.cursor = "pointer";
			}
			else
			{
				image.innerHTML = `${image.innerText} <img class='allimg' src="image/${image.innerText}.png" alt="${image.innerText}">`
				image.style.cursor = "pointer";
			}
		}

	})
}

insertImage();

function coloring()
{
	const colors = document.querySelectorAll(".box");
	colors.forEach(color => {
		var getId = color.id;
		var arr = Array.from(getId);
		// delete the first item of the arr
		arr.shift();
		// Get the number
		var aside = eval(arr.pop());
		var aup = eval(arr.shift());
		var a = aside + aup;
		if (a % 2 == 0) 
		{
			color.style.backgroundColor = "rgb(240, 201, 150)";
		}
		if (a % 2 != 0)
		{
			color.style.backgroundColor = "rgb(100, 75, 43)";
		}
	})

}
coloring();