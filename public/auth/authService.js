'use strict';

angular.module('protractorExample')
  /**
  * @ngdoc service
  * @name protractorApp.services.service:authService
  * @description
  * Service for the user authentication with
  * Firebase and AngularFire
  */
.service('authService', function($firebase) {
  var firebaseUrl = 'https://protractor-example.firebaseio.com/';
  var ref = new Firebase(firebaseUrl); 
  var auth = this;


  /**
  * @ngdoc method
  * @methodOf protractorApp.service:authService
  * @name protractorApp.controller:authService.randID
  * @description
  * Creats characters at end of firebase given ID
  * to make following sequence more diffiuclt
  */
  var randId = function() {
    return Math.floor(Math.random()*365);
  };


  /**
  * @ngdoc method
  * @methodOf protractorApp.service:authService
  * @name protractorApp.controller:authService.setUser
  * @param {object} user
  * @description
  * sets User to local storage to persist across app
  */
  var setUser = function(user) {
    localStorage.setItem('user', user);
  };


  auth.getUser = function(id) {
    return $firebase(new Firebase(firebaseUrl + 'users/' + id)).$asObject();
  };


  /**
  * @ngdoc method
  * @methodOf protractorApp.service:authService
  * @name protractorApp.controller:authService.login
  * @param {object} user
  * @param {function} callback
  * @description
  * receives user object from AuthCtrl, then 
  * through callback either redirects user or sends error
  */
  auth.login = function login(user, cb) {
    ref.authWithPassword({
      email: user.email,
      password: user.password
    }, function(err, authData) {
      if(err) {
        cb(null, err);
      } else {
        authData.uid = authData.uid.replace('simplelogin:', '');
        var authUser = auth.getUser(authData.uid);
        console.log('authUser', authUser);
        setUser(authUser);
        cb(authUser);
      }
    });
  };


  /**
  * @ngdoc method
  * @methodOf protractorApp.service:authService
  * @name protractorApp.controller:authService.setUser
  * @param {object} user
  * @param {function} callback 
  * @description
  * registers user with Firebase
  * returns either new user or an error to the callback
  */
  auth.register = function register(user, cb) {
      ref.createUser({
      email    : user.email,
      password : user.password
    }, function(error, userData) {
      if (error) {
        console.log('Error creating user:', error);
        return error;
      } else {
          console.log('Successfully created user account with uid:', userData.uid);
          userData.name = user.name;
          userData.id = userData.uid.replace('simplelogin:', '') + randId();
          ref.child('users').child(userData.uid.replace('simplelogin:', '')).set(userData);
          auth.login(user, cb);
      }
    });
  };

  auth.logout = function logout() {
    localStorage.setItem('user', '');
    ref.unauth();
  };
});