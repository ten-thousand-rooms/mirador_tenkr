(function ($) {
  'use strict';
  
  $.session = {
    /**
     * Returns true if the user is logged in via CAS.
     */
    loggedIn: function () {
      return Cookies.get('loggedIn') == 'true';
    },
    
    isEditor: function () {
      return Cookies.get('isEditor') == 'true';
    }
  };
  
})(MR);
