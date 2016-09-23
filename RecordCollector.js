var _ = require("lodash");

var RecordCollector = function( name, budget, records ) {
  this.name = name;
  this.budget = budget;
  this.records = records
}

RecordCollector.prototype = {
  add: function(record) {
    this.records.push(record);
  },
  remove: function(record) {
      _.remove(this.records, record)
  },
  buy: function(recordStore, record) {
    recordStore.remove(record);
    this.add(record);
    recordStore.balance += record.price;
    this.budget -= record.price;
  },
  sell: function(recordStore, record) {
    recordStore.add(record);
    this.remove(record);
    recordStore.balance -= record.price;
    this.budget += record.price;
  }

}

module.exports = RecordCollector;