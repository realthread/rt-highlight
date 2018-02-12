

// this is the code which will be injected into a given page...

(function() {

  $( document ).ready(function() {
    $('.tabularReportTable td:nth-child(2).nowrapCell:contains(1)').closest('tr').addClass('lightning');
  });

})();
