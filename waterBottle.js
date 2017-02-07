var waterBottle = {
  contents: 0,
  
  fill: function() {
    this.contents = 100;
  },

  drink: function() {
    if (this.contents >= 10) {
      this.contents -= 10;
    } else {
      this.contents = 0;
    }
  },

  empty: function() {
    this.contents = 0;
  }
}



module.exports = waterBottle;