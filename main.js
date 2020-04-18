var myCanvas = document.getElementById('canvas');
var context = myCanvas.getContext('2d');
myCanvas.width = myCanvas.scrollWidth;
myCanvas.heigth = myCanvas.scrollHeigth;

function draw() {

	// Gelas tertutup
	context.save(); 
	context.fillStyle = '#0095DD';
	context.fillRect(40, 180, 150, 180);
	context.rotate((Math.PI / 180) * 0);

	context.fillStyle = '#4D4E53';
	context.fillRect(40, 160, 150, 20);
	context.restore();

	context.fillStyle = '#0095DD';
	context.fillRect(100, 140, 25, 20);
	context.restore();

	// Gerakan terbuka dan tertutup
	context.save(); 
	context.fillStyle = '#0095DD';
	context.fillRect(300, 180, 150, 180);
	
	context.translate(319, -36);

	context.rotate((Math.PI / 180) * 50);
	context.translate(-200, -100);

	context.fillStyle = '#4D4E53';
	context.fillRect(300, 120, 150, 20);

	context.fillStyle = '#0095DD';
	context.fillRect(360, 100, 25, 20);
	
    // Gelas tertutup
	context.save(); 
	context.fillStyle = '#0095DD';
	context.rotate((Math.PI / 180) * 40);
	context.fillRect(500, 100, 25, 20);
	context.restore();

	context.translate(327, -400);

	context.rotate((Math.PI / 180) * 40);
	context.translate(-210, -85);

	context.fillStyle = '#4D4E53';
	context.fillRect(500, 120, 150, 20);
	context.restore();

	context.fillStyle = '#0095DD';
	context.fillRect(600, 180, 150, 180);
	context.restore();

	context.fillStyle = '#0095DD';
	context.fillRect(748, 100, 25, 20);
	context.restore();
}
draw();


