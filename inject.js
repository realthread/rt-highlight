// Use this at https://realthread.my.salesforce.com/00OE0000002MBFV
(function () {
  $(document).ready(function () {
    rtHighlight.init();
  });

  var rtHighlight = {
    init() {
      rtHighlight.setHighlight([11, 15], 'Complete', 'boom', 'nowrapCell');
      rtHighlight.setHighlight([11, 15], 'Complete', 'lightning', 'nowrapCell', true);
      rtHighlight.setHighlight(2, '1', 'thunder', 'nowrapCell');
      rtHighlight.setHighlight([9, 9], 'number', 'reOrder', null, false, true);
    },
    getFilter(ctx, searchString, exclude, matchType) {

      // right now this does nothing to help with filtering
      if (matchType && (typeof $(ctx).text() === searchString)) {
        return true;
      }

      // returns true
      console.log(typeof searchString === typeof $(ctx).text());
      console.log("searchString is ", typeof searchString);
      console.log("ctx is ", typeof ctx);
      console.log("matchType is ", matchType)

      // runs here -- no errors but breaks getfilter function
      // if (matchType && (typeof $(ctx).text() === searchString)) {
      //   return true;
      // }

      // this is OG the getFilter function everything works with it right now but it doesnt 
      // compare the typeof $(ctx).text() === searchString in order to filter and return when
      // when the value of searchstring is equal to ctx
      // if (exclude) {
      //   return $(ctx).text() !== searchString;
      // } else {
      //   return $(ctx).text() === searchString;
      // }
    },
    getElements(range, searchString, classNameToIgnore, exclude, matchType) {
      if (Array.isArray(range)) {
        var el = '> td:nth-child(n+' + range[0] + '):nth-child(-n+' + range[1] + ')';
        if (classNameToIgnore) {
          el = el + ":not(." + classNameToIgnore + ")"
        }
        return $('.tabularReportTable tr')
          .find(el)
          .filter(function () {
            return rtHighlight.getFilter(this, searchString, exclude, matchType)
          });
      } else {
        return $(
          '.tabularReportTable td:nth-child(' + range + ').nowrapCell'
        ).filter(function () {
          return $(this).text() === searchString;
        });
      }
    },
    setHighlight(range, searchString, classNameToAdd, classNameToIgnore, exclude, matchType) {
      if (Array.isArray(range)) {
        rtHighlight.getElements(range, searchString, exclude, matchType).addClass(classNameToAdd);
      } else {
        rtHighlight.getElements(range, searchString, exclude, matchType).closest('tr').addClass(classNameToAdd);
      }
    },
  };
})();
