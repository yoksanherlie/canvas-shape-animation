class Square extends Shape {

	constructor(location, velocity, color) {
		super(location, velocity, color);

		this.width = 20;
		this.height = 20;
	}

	draw() {
		ctx.save();

		ctx.beginPath();

		ctx.translate(this.location.x + this.width / 2, this.location.y + this.height / 2);
		ctx.rotate(this.rotation * Math.PI / 180);
		ctx.translate(-this.width / 2, -this.height / 2);

		ctx.rect(0, 0, this.width, this.height);
		ctx.strokeStyle = this.color;
		ctx.lineWidth = this.lineWidth;
		ctx.stroke();

		ctx.closePath();

		ctx.restore();
	}
}