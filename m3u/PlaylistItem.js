var util = require('util'),
    Item = require('./Item');

var PlaylistItem = module.exports = function PlaylistItem() {
  Item.call(this);
};

util.inherits(PlaylistItem, Item);

PlaylistItem.prototype.toString = function toString() {
  var output = [];
  if (this.get('duration') != null || this.get('title') != null) {
    output.push('#EXTINF:' + [this.get('duration'), this.get('title')].join(','));
  }
  if (this.byteRange != null) {
    output.push('#EXT-X-BYTERANGE:' + this.get('byteRange'));
  }
  output.push(this.get('URI'));

  return output.join('\n');
};