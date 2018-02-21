var lineUpFilter = {
  sort: function (items) {
        items.show();
        $('#line-up-content').find('div.line-up-item').not(items).hide();
      },

  showAll: function (items) {
    items.show();
  },

  doSort: function () {
        $('a', '#line-up-sort').on('click', function () {

          var $a = $(this);

          if (!$a.is('#all')) {

            $('#all').removeClass('active');

            var items = $('div[data-cat=' + $a.data('cat') + ']', '#line-up-content');

            lineUpFilter.sort(items);

          } else {

            lineUpFilter.showAll($('div.line-up-item', '#line-up-content'));
          }
        });
      },
};

lineUpFilter.doSort();
