
(function() {
  var ponySelect = document.querySelector('#pony-select');

  ponySelect.onchange = function() {
    var pony = ponySelect.value;
    var ponies = document.querySelectorAll('.pony');
    var palette = {
      'rainbow-dash': 'blue',
      "princess-cadence": 'white',
      "twinkle-sparkle": 'purple',
      "apple-jack": 'orange'
    };

    // Reset the colors.
    for (var p of ponies) {
      p.style['background-color'] = 'white';
    }

    if (pony === 'all') {
      for (var p of ponies) {
        p.style['background-color'] = palette[p.id];
      }
    } else {
      var singlePony = document.querySelector('#' + pony);
      singlePony.style['background-color'] = palette[pony];
    }
  };

}());

