class GetFlickrItems {
  constructor($resource) {
    var resource = $resource('https://api.flickr.com/services/feeds/photos_public.gne', {},
    {
      jsonpquery: {
        method: 'JSONP',
        params: {
          jsoncallback: 'JSON_CALLBACK',
          format: 'json'}
        }
      }
    );
    return resource.jsonpquery().$promise;
  }
}

export default angular.module('services.flickr-items', [])
  .service('flickr-items', GetFlickrItems)
  .name;

GetFlickrItems.$inject = ['$resource'];
