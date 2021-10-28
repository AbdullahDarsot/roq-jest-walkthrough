class Frog {
    constructor(name, jumpStrength, color) {
        this.name =name
        this.legs = 4
        this.jumpStrength = jumpStrength
        this.color = color
    }
}

const dougie = new Frog ('Dougie', 68, 'orange')

module.exports = {
    Frog,
    dougie,
}