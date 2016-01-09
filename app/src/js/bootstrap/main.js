'use strict';

chrome.app.runtime.onLaunched.addListener(function () {
   return chrome.storage.local.get('BOUND', function (bounds) {
     var windowOptions;
     windowOptions = {
       'id': 'main',
       'innerBounds': {
          'width': 250,
          'height': 600
       }
     };
     return chrome.app.window.create('app/src/index.html',
       windowOptions);
     });
});
