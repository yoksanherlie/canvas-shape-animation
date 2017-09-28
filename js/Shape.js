class Shape {

	constructor(location, velocity, color) {
		this.location = location;
		this.velocity = velocity;
		this.color = color;

		this.lineWidth = 3;
		this.rotation = 0;
	}

	update() {
		this.rotation += 3;
		this.location.sub(this.velocity);
	}
}