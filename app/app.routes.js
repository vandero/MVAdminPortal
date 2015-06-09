/**
 * Created by robin on 09/06/15.
 */

(function(module) {
    "use strict";

    var registerRoutes = function($stateProvider, $urlRouterProvider, $locationProvider) {
        //$locationProvider.html5Mode(true);

        $stateProvider
            .state({
                name:"root",
                abstract: true,
                template:"<ui-view/>",
                controller:"RootController",
                controllerAs:"root"
            })
            .state({
                name:"adminPageLayout",
                abstract: true,
                templateUrl:"common/layout/templates/adminPageLayout.html"
            })

            .state({
                name: "meetings",
                url: "/meetings",
                parent: "adminPageLayout",
                templateUrl: "components/meetings/meetingsView.html",
                controller: "meetingsController",
                controllerAs: "meetings",
                data: {
                    menuBar: {
                        index: 1,
                        label: "Meetings"
                    }
                }
            })
            .state({
                name: "clients",
                url: "/clients",
                parent: "adminPageLayout",
                templateUrl: "components/clients/clientsView.html",
                controller: "clientsController",
                controllerAs: "clients",
                data: {
                    menuBar: {
                        index: 2,
                        label: "Clients"
                    }
                }
            });

        $urlRouterProvider.otherwise("/meetings");
    };

    registerRoutes.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];
    module.config(registerRoutes);
}(
    angular.module("mv.admin")
));