/**
 * Created by robin on 09/06/15.
 */

(function(module) {
    "use strict";

    var ctrl = function($injector) {
        var vm = this;

        var isActiveView = (function() {
            var state = $injector.get("$state");

        });

        vm.isActiveView = isActiveView;
    };

    ctrl.$inject = ["$injector"];

    module.controller("adminPageLayoutController", ctrl);
}(
    angular.module("mv.admin.common.layout")
));