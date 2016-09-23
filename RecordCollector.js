var RecordCollector = function( name, budget, records ) {
  this.name = name;
  this.budget = budget;
  this.records = records
}

RecordCollector.prototype = {
  buy: function(recordStore, record) {
    recordStore.remove(record);
    this.records.push(record);
    recordStore.balance += record.price;
    this.budget -= record.price;
  }

}

module.exports = RecordCollector;