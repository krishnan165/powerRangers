var canvas = new fabric.Canvas("my_canvas");

 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image,function(Img)
   {block_image_object=Img;
	console.log("Img");
	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
   top:block_y,
   left:block_x
	});
	canvas.add(block_image_object);	
});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') 
	{
		console.log("r");
		new_image("rr1.png");
		block_x=1;
	}
	if(keyPressed == '71')
	{
		console.log("g");
		new_image("gr.png");
		block_x=250;
	}
	
	if(keyPressed == '89')
	{
		console.log("p");
		new_image("yr.png");
		block_x=420;
	}
	if(keyPressed == '80')
	{
		console.log("p");
		new_image("pr.png");
		block_x=650;
                 		
	}
	if(keyPressed == '66')
	{
		console.log("b");
		new_image("br.png");
		block_x=700;
	}
	
}

