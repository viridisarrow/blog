
/*
category = window.location.hash.replace('#', '')

categoryListing = document.getElementById "category-#{category}"
categoryListing?.classList.remove 'hidden'

if not categoryListing
  categories = document.querySelectorAll '.hidden.category'
  for i in [0...categories.length]
    categories[i].classList?.remove 'hidden'
*/
var categories, category, categoryListing, i, _i, _ref, _ref1;

category = window.location.hash.replace('#', '');

categoryListing = document.getElementById("category-" + category);

if (categoryListing != null) {
  categoryListing.classList.remove('hidden');
}

if (!categoryListing) {
  categories = document.querySelectorAll('.hidden.category');
  for (i = _i = 0, _ref = categories.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
    if ((_ref1 = categories[i].classList) != null) {
      _ref1.remove('hidden');
    }
  }
}