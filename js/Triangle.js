class Triangle extends Shape {

	constructor(location, velocity, color) {
		super(location, velocity, color);

		this.width = 20;
	}

	draw() {
		ctx.save();

		ctx.translate(this.location.x, this.location.y);
		ctx.rotate(this.rotation * Math.PI / 180);
		ctx.translate(-this.location.x, -this.location.y);

		ctx.beginPath();
		ctx.moveTo(this.location.x, this.location.y);
		ctx.lineTo(this.location.x, this.location.y + this.width);
		ctx.lineTo(this.location.x + this.width, this.location.y + this.width);
		ctx.closePath();

		ctx.lineWidth = this.lineWidth;
		ctx.strokeStyle = this.color;
		ctx.stroke();

		ctx.restore();
	}
}