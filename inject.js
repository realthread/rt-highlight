// (function() {
//   $(document).ready(function() {
//     // Use this at https://realthread.my.salesforce.com/00OE0000002MBFV
//     $('.tabularReportTable td:nth-child(2).nowrapCell:contains(1)')
//       .addClass('lightning');
//   });
//
// })();
(function() {
  $(document).ready(function() {
      // Use this at https://realthread.my.salesforce.com/00OE0000002MBFV
    rtHighlight.init();
  });
  const rtHighlight = {
      init: function(){
          rtHighlight.priority();
          rtHighlight.incomplete();
          rtHighlight.complete();
      },
      priority: function(){
          $('.tabularReportTable td:nth-child(2).nowrapCell:contains(1)')
            .addClass('lightning');
      },
      incomplete: function(){
          $('.tabularReportTable td:nth-child(n+2):nth-child(-n+14):contains(Not Done)')
          .addClass('lightning');
      },
      complete: function(){
          $('.tabularReportTable td:nth-child(n+2):nth-child(-n+14):contains(Complete)')
            .addClass('boom');
      }
  }
})();
