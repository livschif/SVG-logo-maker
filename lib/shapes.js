// shape class constructor to define what it means to be a shape
class Shape {
    constructor() {
        this.color = "";
    }
// shape class takes in a setColor function    
    setColor(colorVar) {
        this.color = colorVar;
    }
}

// triangle class that returns a shape with a color input
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

// square class that returns a shape with a color input
class Square extends Shape {
    render() {
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
}

// circle class that returns a shape with a color input
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
}

// exports each different shape class
module.exports = { Triangle, Square, Circle };


