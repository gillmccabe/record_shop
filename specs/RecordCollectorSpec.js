var assert = require( "assert" );
var Record = require( "../Record" );
var RecordStore = require( "../RecordStore" );
var RecordCollector = require( "../RecordCollector" );

describe( "RecordCollector", function() {

  var record1;
  var record2;
  var record3;
  var record4;
  var recordStore1;
  var recordCollector1;


  beforeEach(function() {
   record1 = new Record( "Neil Young", "Harvest Moon", 8 );
   record2 = new Record( "Paul Simon", "Graceland", 12 );
   record3 = new Record( "Tom Waits", "Rain Dogs", 10 );
   record4 = new Record( "Beastie Boys", "Paul's Boutique", 10 );
   recordStore1 = new RecordStore( "Missing Records", "Glasgow" );
   recordCollector1 = new RecordCollector( "Kiyo", 40, [record1, record2] );
  })

  it( "should have a name", function() {
    assert.equal( "Kiyo", recordCollector1.name )
  })

  it( "should have a budget", function() {
    assert.equal( 40, recordCollector1.budget )
  })

  it( "should have records", function() {
    assert.deepEqual( [record1, record2], recordCollector1.records )
  })

  it( "should be able to buy records", function() {
    recordStore1.add(record3);
    recordStore1.add(record4);
    recordCollector1.buy(recordStore1, record3);
    assert.equal( 3, recordCollector1.records.length);
  })

  it( "budget should go down when they buy a record", function() {
    recordStore1.add(record3);
    recordStore1.add(record4);
    recordCollector1.buy(recordStore1, record3);
    assert.equal( 30, recordCollector1.budget )
  })

  it( "store budget should go up when collector buys a record", function() {
    recordStore1.add(record3);
    recordStore1.add(record4);
    recordCollector1.buy(recordStore1, record3);
    assert.equal( 110, recordStore1.balance )
  })

  it( "store inventory should go down when collector buys a record", function() {
    recordStore1.add(record3);
    recordStore1.add(record4);
    recordCollector1.buy(recordStore1, record3);
    assert.equal( 1, recordStore1.inventory.length )
  })

  it( "should be able to sell records", function() {
    recordCollector1.sell(recordStore1, record1);
    assert.equal( 1, recordCollector1.records.length);
  })

  it( "budget should go up when they sell a record", function() {
    recordCollector1.sell(recordStore1, record1);
    assert.equal( 48, recordCollector1.budget )
  })

  it( "store budget should go down when collector sells a record", function() {
    recordCollector1.sell(recordStore1, record1);
    assert.equal( 92, recordStore1.balance )
  })

  it( "store inventory should go up when collector sells a record", function() {
    recordCollector1.sell(recordStore1, record1);
    assert.equal( 1, recordStore1.inventory.length )
  })



})

