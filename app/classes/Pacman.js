class Pacman {
  constructor() {
    this.positionX = '';
    this.positionY = '';
    this.orientation = '';
  }

  face(orientation) {
    // Rotate pacman 90 degrees depending on input
    if (orientation === 'LEFT') {
      // Move to the orientation left of current orientation
      // e.g. if current orientation == 'N' and input == 'LEFT', set orientation to 'W'
      // if current orientation == 'E' and input == 'RIGHT', set orientation to 'S'
      // etc.
    }
    
  }
  
  move() {
    if (this.orientation == 'N') {
      // y + 1
    }
    if (this.orientation == 'E') {
      // x + 1
    }
    if (this.orientation == 'S') {
      // y -1
    }
    if (this.orientation == 'W') {
      // x - 1
    }

  }

  report() {
    return `${this.positionX},${this.positionY},${this.orientation}`;
  }
}

module.exports = Pacman;