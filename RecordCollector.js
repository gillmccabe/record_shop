var RecordCollector = function( name, credit ) {
  this.name = name;
  this.credit = credit;
}

RecordCollector.prototype = {
  buy: function(recordStore, record) {
    recordStore.remove(record);
    this.credit -= record.price;
  }

}

module.exports = RecordCollector;