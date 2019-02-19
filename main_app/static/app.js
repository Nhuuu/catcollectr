$('.btn').on('click', function(event){
  event.preventDefault();
  var elem = $(this);
  $.ajax({
    url: '/like_cat/',
    method: 'GET',
    data: {cat_id: elem.attr('data-id')},
    success: function(response){
      elem.html('Likes: ' + response);
    }
  })
})