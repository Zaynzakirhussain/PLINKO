class Rect {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display() {
    var angle = this.body.angle;
    rotate(angle);
    rectMode(CENTER);
    fill("white");
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
  }
}