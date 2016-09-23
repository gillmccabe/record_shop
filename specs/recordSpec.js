var assert = require( "assert" );
var Record = require( "../Record" );

describe( "Record", function() {

  it( "should have an artist", function() {
    var record1 = new Record( "Neil Young", "Harvest Moon", 8.99 );
    assert.equal( "Neil Young", record1.artist )
  } )

  it( "should have a title", function() {
    var record1 = new Record( "Neil Young", "Harvest Moon", 8.99 );
    assert.equal( "Harvest Moon", record1.title )
  })

  it( "should have a price", function() {
    var record1 = new Record( "Neil Young", "Harvest Moon", 8.99 );
    assert.equal( 8.99, record1.price )
  })


})