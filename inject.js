// Use this at https://realthread.my.salesforce.com/00OE0000002MBFV
(function () {
  $(document).ready(function () {
    rtHighlight.init();
  });

  var rtHighlight = {
    init() {
      rtHighlight.setHighlight([11, 15], 'Complete', 'boom');
      rtHighlight.setHighlight([11, 15], 'Complete', 'lightning', true);
      rtHighlight.setHighlight(2, '1', 'thunder');
    },
    getElements(range, searchString, exclude) {
      if (Array.isArray(range)) {
        return $('.tabularReportTable tr')
          .find(
            '> td:nth-child(n+' + range[0] + '):nth-child(-n+' + range[1] + '):not(.nowrapCell)'
          )
          .filter(function () {
            if (exclude) {
              return $(this).text() !== searchString;
            } else {
              return $(this).text() === searchString;
            }
          });
      } else {
        return $(
          '.tabularReportTable td:nth-child(' + range + ').nowrapCell'
        ).filter(function () {
          return $(this).text() === searchString;
        });
      }
    },
    setHighlight(range, searchString, classNameToAdd, exclude) {
      if (Array.isArray(range)) {
        rtHighlight.getElements(range, searchString, exclude).addClass(classNameToAdd);
      } else {
        rtHighlight.getElements(range, searchString).closest('tr').addClass(classNameToAdd);
      }
    }
  };
})();
