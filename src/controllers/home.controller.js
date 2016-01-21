export default class HomeController {
  constructor(GetFlickrItems, $cookies) {
    this.$cookies = $cookies;

    GetFlickrItems.then(data => {
      this.flickrObj = data.items.map(elem => {
        if (this.$cookies.get(elem.link)) {
          this.setSelected(elem);
        }
        return elem;
      });
    });
  }

  toggleSelect(elem) {
    if (elem.isSelected) {
      this.removeSelected(elem);
    } else {
      this.setSelected(elem);
    }
  }

  setSelected(elem) {
    this.$cookies.put(elem.link, true);
    elem.isSelected = true;
  }

  removeSelected(elem) {
    this.$cookies.remove(elem.link);
    elem.isSelected = false;
  }
}

HomeController.$inject = ['flickr-items', '$cookies'];
