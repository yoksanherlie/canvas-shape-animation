let $ = document.querySelector.bind(document);
canvas = $("canvas")
ctx = canvas.getContext('2d');
cw = ch = 0;

shapes = []

function init() {
	scaleCanvas();
	handleResize();

	addShape();
	setInterval(() => {
		addShape();
	}, 250);

	update();
}

function update() {
	ctx.clearRect(0, 0, cw, ch);

	for(let key in shapes) {
		shapes[key].update();
		shapes[key].draw();

		if(checkOutOfBounds(shapes[key])) {
			shapes.splice(key, 1);
		}
		
	}

	requestAnimationFrame(update);
}

function addShape() {
	let rand = random(3) + 1;

	let location = new Vector(random(cw), ch),
		color = getColor();
	
	let randX = random(5),
		randY = random(5) + 5;

	randX = (Math.random() > .5 ? -randX : randX);
	let velocity = new Vector(randX, randY);

	let shape;
	if(rand == 1) {
		shape = new Circle(location, velocity, color);
	}else if(rand == 2) {
		shape = new Square(location, velocity, color);
	}else if(rand == 3) {
		shape = new Triangle(location, velocity, color);
	}

	shapes.push(shape);
}

function checkOutOfBounds(shape) {
	if((shape.location.x < 0 || shape.location.x > cw) || (shape.location.y < 0)) {
		return true;
	}
}

// helpers function
function getColor() {
	colors = [
		'#8328FF', '#3498db', '#f1c40f', '#1abc9c', '#e74c3c'
	];

	return colors[random(colors.length)]
}

function random(val) {
	return Math.floor(Math.random() * val);
}

// main function
function scaleCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	cw = canvas.width;
	ch = canvas.height;
}

function handleResize() {
	window.addEventListener("resize", () => {
		scaleCanvas();
	})
}

window.onload = init();