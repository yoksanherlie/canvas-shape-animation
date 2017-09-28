class Circle extends Shape {

	constructor(location, velocity, color) {
		super(location, velocity, color);
		
		this.radius = 10;
	}

	draw() {
		ctx.save();

		ctx.beginPath();

		ctx.arc(this.location.x, this.location.y, this.radius, 0, 2 * Math.PI)
		ctx.strokeStyle = this.color;
		ctx.lineWidth = this.lineWidth;
		ctx.stroke();

		ctx.closePath();

		ctx.restore();
	}
}