// Use this at https://realthread.my.salesforce.com/00OE0000002MBFV
(function() {
  $(document).ready(function() {
    rtHighlight.init();
  });

  var rtHighlight = {
    init() {
      rtHighlight.setHighlight([11, 15], 'Complete', 'boom', 'nowrapCell');
      rtHighlight.setHighlight(
        [11, 15],
        'Complete',
        'lightning',
        'nowrapCell',
        true
      );
      rtHighlight.setHighlight(2, '1', 'thunder', 'nowrapCell');
      rtHighlight.setHighlight([9, 9], 'number', 'reOrder', null, false, true);
    },
    getFilter(ctx, searchString, exclude, matchType) {
      if (matchType) {
        if (exclude) {
          return isNaN(
            $(ctx)
              .text()
              .replace('', '-')
          );
        } else {
          return !isNaN(
            $(ctx)
              .text()
              .replace('', '-')
          );
        }
      } else {
        if (exclude) {
          return $(ctx).text() !== searchString;
        } else {
          return $(ctx).text() === searchString;
        }
      }
    },
    getElements(range, searchString, classNameToIgnore, exclude, matchType) {
      if (Array.isArray(range)) {
        var el =
          '> td:nth-child(n+' + range[0] + '):nth-child(-n+' + range[1] + ')';
        if (classNameToIgnore) {
          el = el + ':not(.' + classNameToIgnore + ')';
        }
        return $('.tabularReportTable tr')
          .find(el)
          .filter(function() {
            return rtHighlight.getFilter(
              this,
              searchString,
              exclude,
              matchType
            );
          });
      } else {
        return $(
          '.tabularReportTable td:nth-child(' + range + ').nowrapCell'
        ).filter(function() {
          return $(this).text() === searchString;
        });
      }
    },
    setHighlight(
      range,
      searchString,
      classNameToAdd,
      classNameToIgnore,
      exclude,
      matchType
    ) {
      if (Array.isArray(range)) {
        rtHighlight
          .getElements(
            range,
            searchString,
            classNameToIgnore,
            exclude,
            matchType
          )
          .addClass(classNameToAdd);
      } else {
        rtHighlight
          .getElements(
            range,
            searchString,
            classNameToIgnore,
            exclude,
            matchType
          )
          .closest('tr')
          .addClass(classNameToAdd);
      }
    }
  };
})();
