// Use this at https://realthread.my.salesforce.com/00OE0000002MBFV
(function() {
  $(document).ready(function() {
    rtHighlight.init();
  });

  var rtHighlight = {
    init() {
      rtHighlight.setHighlight([3, 14], 'Not Done', 'lightning');
      rtHighlight.setHighlight([3, 14], 'Complete', 'boom');
      rtHighlight.setHighlight(2, '1', 'thunder');
    },
    getElements(range, searchString) {
      if (Array.isArray(range)) {
        return $('.tabularReportTable tr')
          .find(
            'td:nth-child(n+' + range[0] + '):nth-child(-n+' + range[1] + ')'
          )
          .filter(function() {
            return $(this).text() === searchString;
          });
      } else {
        return $(
          '.tabularReportTable td:nth-child(' + range + ')'
        ).filter(function() {
          return $(this).text() === searchString;
        });
      }
    },
    setHighlight: function(range, searchString, classNameToAdd) {
        if(Array.isArray(range)){
            rtHighlight.getElements(range, searchString).addClass(classNameToAdd);
        } else {
            rtHighlight.getElements(range, searchString).closest('tr').addClass(classNameToAdd);
        }
    }
  };
})();
