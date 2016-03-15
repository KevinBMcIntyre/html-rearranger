var $body = $('body');
var $h2 = $('<h2>');
var $ul2 = $('<ul>');
var $li = $('<li>');
var $h1 = $('<h2>');
var $ul1 = $('ul');
var $ulli = $('ul li');

$body.append($h2);
$h2.html('Below ground veggies');
$body.append($ul2);
$body.append($h1);
$h1.html('Above ground veggies');
$body.append($ul1);

$ulli.each(function () {
  if ($(this).hasClass('below')) {
    $ul2.append($(this));
  } else {
    $ul1.append($(this));
  }
});
