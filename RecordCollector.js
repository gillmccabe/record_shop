var RecordCollector = function( name, budget, record ) {
  this.name = name;
  this.budget = budget;
  this.record = record
}

RecordCollector.prototype = {
  buy: function(recordStore, record) {
    recordStore.remove(record);
    this.budget -= record.price;
  }

}

module.exports = RecordCollector;