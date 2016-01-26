export default class HomeController {
  constructor(GetFlickrItems, $cookies) {
    this.$cookies = $cookies;
    this.flickrObj = [];

    // this is just a hack, because Angular adds some debug keys
    this.removeNotNeededKeys();

    if (Object.keys(this.$cookies.getAll()).length > 0) {
      Object.keys(this.$cookies.getAll()).forEach(elem => {
        this.flickrObj.push({
          link: elem,
          media: {
            m: this.$cookies.get(elem)
          },
          isSelected: true
        });
      });
    }

    GetFlickrItems.then(data => {
      data.items.forEach(elem => {
        if (this.$cookies.get(elem.link) === undefined) {
          this.flickrObj.push(elem);
        }
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
    this.$cookies.put(elem.link, elem.media.m);
    elem.isSelected = true;
  }

  removeSelected(elem) {
    this.$cookies.remove(elem.link);
    elem.isSelected = false;
  }

  removeNotNeededKeys() {
    if (this.$cookies.get('__Debug') !== 'undefined') {
      this.$cookies.remove('__Debug');
    }
    if (this.$cookies.get('csrftoken') !== 'undefined') {
      this.$cookies.remove('csrftoken');
    }
    if (this.$cookies.get('__ngDebug') !== 'undefined') {
      this.$cookies.remove('__ngDebug');
    }
  }
}

HomeController.$inject = ['flickr-items', '$cookies'];
