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
  }

}


module.exports = RecordStore;