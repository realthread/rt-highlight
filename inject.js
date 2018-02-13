// (function() {
//   $(document).ready(function() {
//       // Use this at https://realthread.my.salesforce.com/00OE0000002MBFV
//     rtHighlight.init();
//   });
//
//   const rtHighlight = {
//   //     init: function(){
//   //         rtHighlight.priority();
//   //         rtHighlight.incomplete();
//   //         rtHighlight.complete();
//   //     },
//   //     priority: function(){
//   //         $('.tabularReportTable td:nth-child(2).nowrapCell:contains(1)')
//   //           .addClass('lightning');
//   //     },
//   //     incomplete: function(){
//   //         $('.tabularReportTable td:nth-child(n+3):nth-child(-n+14):contains(Not Done)')
//   //         .addClass('lightning');
//   //     },
//   //     complete: function(){
//   //         $('.tabularReportTable td:nth-child(n+3):nth-child(-n+14):contains(Complete)')
//   //           .addClass('boom');
//   //     }
//   // }
// })();

(function() {
  $(document).ready(function() {
    rtHighlight.init();
  });
  // immediately invoking function expression -- iife
  var checkArr = false;
  console.log('top Arr = ' + checkArr);

  var rtHighlight = {
      init: function() {
          rtHighlight.setHighlight([2,13],'1', 'lightning');
      },
      setHighlight: function(range, searchString, classNameToAdd) {
          console.log('range is ' + range)
          if (Array.isArray(range)){
              checkArr = true;
              console.log('this is an Array');
          }
          console.log('outside Arr = ' + checkArr);
          if (checkArr){
              $('.tabularReportTable td').slice(range[0], range[1]).find('td').filter(function(){
                  return $(this).text() === searchString;
              }).addClass(classNameToAdd); console.log(range);
          } else {
              $('.tabularReportTable td').eq(range).find('.nowrapCell').filter(function(){
                  return $(this).text() === searchString;
              }).addClass(classNameToAdd); console.log('cat');
          }
      }
  }
})();
