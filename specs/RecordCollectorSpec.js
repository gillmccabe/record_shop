var assert = require( "assert" );
var Record = require( "../Record" );
var RecordStore = require( "../RecordStore" );
var RecordCollector = require( "../RecordCollector" );

describe( "RecordStore", function() {

  var record1;
  var record2;
  var record3;
  var record4;
  var recordStore1;
  var recordCollector1;


  beforeEach(function() {
   record1 = new Record( "Neil Young", "Harvest Moon", 8.99 );
   record2 = new Record( "Paul Simon", "Graceland", 12.99 );
   record3 = new Record( "Tom Waits", "Rain Dogs", 10.99 );
   record4 = new Record( "Beastie Boys", "Paul's Boutique", 10.99 );
   recordStore1 = new RecordStore( "Missing Records", "Glasgow" );
   recordCollector1 = new RecordCollector( "Kiyo", 40 );
  })

  it( "should have a name", function() {
    assert.equal( "Kiyo", recordCollector1.name )
  })

  it( "should have a budget", function() {
    assert.equal( 40, recordCollector1. budget )
  })

})

