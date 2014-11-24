/*jshint -W117 */
/* global
 Velocity:true
 */

Velocity = Velocity || {};

(function () {
  'use strict';

//////////////////////////////////////////////////////////////////////
// Public Methods
//

  _.extend(Velocity, {

    /**
     * Mirrors can share the same codebase as the main process. This method will run provided code
     * inside a mirror only.
     *
     * where: client / server
     *
     * @method onTest
     * @param {Function} code
     *
     */
    onTest: function (code) {
      Meteor.call('velocity/isMirror', function (err, res) {
        if (res) {
          code();
        }
      });
    }
  });

})();
