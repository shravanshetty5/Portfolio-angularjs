routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];

export default function routing($urlRouterProvider, $locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true);
  var states = [
    {
        name: 'Home',
        url: '',
        template: '<home></home>'
    },
    {
        name: 'Home2',
        url: '/',
        template: '<home></home>'
    },
    {
        name: 'Education',
        url: '/education',
        template: '<education></education>'
    },
    {
        name: 'Education.schoolList',
        url: '/list',
        template: '<school-list schools="vm.educationData"></school-list>'
    },
    {
        name: 'Education.schoolDetails',
        url: '/school/{schoolId}',
        resolve: {
            schoolId: function ($stateParams) {
                return $stateParams.schoolId;
            }
        },
        template: '<school-details schools="vm.educationData" school-id="$resolve.schoolId"></school-details>'
    },
    {
        name: 'Experience',
        url: '/experience',
        template: '<work></work>'
    },
    {
        name: 'Experience.companyList',
        url: '/list',
        template: '<company-list works="vm.works"></company-list>'
    },
    {
        name: 'Experience.workDetails',
        url: '/work/{workId}',
        resolve: {
            workId: function ($stateParams) {
                return $stateParams.workId;
            }
        },
        template: '<work-details works="vm.works" work-id="$resolve.workId"></work-details>'
    },
    {
        name: 'Skills',
        url: '/skills',
        template: '<skills></skills>'
    },
    {
        name: 'Projects',
        url: '/projects',
        template: '<projects></projects>'
    },
    {
        name: 'Error',
        url: '/error',
        template: '<error></error>'
    },
];
$urlRouterProvider.when('/experience', '/experience/list');
$urlRouterProvider.when('/education', '/education/list');
$urlRouterProvider.otherwise('/error');
states.forEach(function (state) {       
    $stateProvider.state(state);
});
}