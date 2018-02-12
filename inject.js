(function() {
  $(document).ready(function() {
    // Use this at https://realthread.my.salesforce.com/00OE0000002MBFV
    $('.tabularReportTable td:nth-child(2).nowrapCell:contains(1)')
      .closest('tr')
      .addClass('lightning');
  });
})();
