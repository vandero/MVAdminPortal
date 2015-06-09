/**
 * Created by robin on 09/06/15.
 */

(function(module) {
    "use restrict";

    var menuBarCtrl = function($state) {
        var vm = this;

        var views = (function(availableApplicationStates) {
            return availableApplicationStates.filter(function (state) {
                return typeof state.data !== "undefined" && typeof state.data.menuBar !== "undefined";
            }).map(function (state) {
                var view = state.data.menuBar;
                view.url = state.url;
                view.name = state.name;
                return view;
            });
        }($state.get()));

        var isActiveView = (function(view) {
            var currentApplicationStateData = $state.$current;

            return currentApplicationStateData.name === view.name;
        });

        vm.views = views;
        vm.isActiveView = isActiveView;
    };

    menuBarCtrl.$inject = ["$state"];

    var menuBar = function() {
        return {
            templateUrl: "common/navigation/directives/menu-bar.html",
            controller: menuBarCtrl,
            controllerAs: "ctrl"
        }
    };

    module.directive("menuBar", menuBar);
}(
    angular.module("mv.admin.common.navigation")
));