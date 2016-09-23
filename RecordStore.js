var _ = require("lodash");

var RecordStore = function( name, city ) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 100;
}

RecordStore.prototype = {
  add: function(record) {
    this.inventory.push(record);
  },
  remove: function(record) {
      _.remove(this.inventory, record)
  },
  listInventory: function() {
    return this.inventory;
  },
  sell: function(record) {
    this.remove(record);
    this.balance += record.price;
  },
  reportFinances: function() {
    var total = 0;
    for (i=0; i<this.inventory.length; i++) {
     total += this.inventory[i].price
    }
    return total += this.balance;
  }


}


module.exports = RecordStore;