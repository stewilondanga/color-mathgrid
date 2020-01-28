var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

for (var i = 0; i < 1024; i++) {
  $('.container').append($('<input class="color-box" type="checkbox" />'));
}
const picker = $('#color');
let color = '#000';
picker.on('change', function() {
  color = this.value;
  //$('body').css('background-color', color);
});

$('.container').on('click', '.color-box', function() {

  const me = $(this);
  if (!me.is(':checked')) {
    me.css('background-color', '');
  } else {
    me.css('background-color', color);
  }

});
