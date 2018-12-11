var bw = require('../../../src/compression/burrows-wheeler/burrows-wheeler').burrowsWheeler;

describe('Burrows Wheeler', function () {
  'use strict';

  it('should return "annnnb$aaaaa" for the entry "ananabanana"', function () {
    expect(bw.encode('ananabanana')).toEqual('annnnb$aaaaa');
  });

  it('should return "ananabanana" for the entry "annnnb$aaaaa"', function () {
    expect(bw.decode('annnnb$aaaaa')).toEqual('ananabanana');
  });
});
