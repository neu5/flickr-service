import angular from 'angular';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';

import './styles.css';

import HomeController from './controllers/home.controller';
import GetFlickrItems from './services/getFlickrItems.service';

export default angular.module('app', ['ngCookies', 'ngResource', GetFlickrItems])
  .controller('HomeController', HomeController)
  .name;
