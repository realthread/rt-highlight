// Use this at https://realthread.my.salesforce.com/00OE0000002MBFV
(function () {
  $(document).ready(function () {
    rtHighlight.init();
  });

  var rtHighlight = {
    init() {
      rtHighlight.setHighlight([11, 13], 'Complete', 'boom');
      rtHighlight.setHighlight([11, 13], 'Complete', 'lightning', true);
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
<<<<<<< HEAD
          '.tabularReportTable td:nth-child(' + range + ').nowrapCell'
        ).filter(function () {
=======
          '.tabularReportTable td:nth-child(' + range + ')'
        ).filter(function() {
>>>>>>> 65b3774726962f1d0aee68a50381ef6956bf5e88
          return $(this).text() === searchString;
        });
      }
    },
<<<<<<< HEAD
    setHighlight(range, searchString, classNameToAdd, exclude) {
      rtHighlight.getElements(range, searchString, exclude).addClass(classNameToAdd);
=======
    setHighlight: function(range, searchString, classNameToAdd) {
        if(Array.isArray(range)){
            rtHighlight.getElements(range, searchString).addClass(classNameToAdd);
        } else {
            rtHighlight.getElements(range, searchString).closest('tr').addClass(classNameToAdd);
        }
>>>>>>> 65b3774726962f1d0aee68a50381ef6956bf5e88
    }
  };
})();
