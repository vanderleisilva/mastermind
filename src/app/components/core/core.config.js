export function config ($breadcrumbProvider, localStorageServiceProvider) {
	'ngInject';

	$breadcrumbProvider.setOptions({
		includeAbstract: true
	});

	localStorageServiceProvider.setPrefix('app');

	firebase.initializeApp({
		apiKey: "AIzaSyA1Nzudq8sxqGPyxGvWXu68SGW-TPF4TDU",
		authDomain: "project-6072475844457399382.firebaseapp.com",
		databaseURL: "https://project-6072475844457399382.firebaseio.com",
		storageBucket: "project-6072475844457399382.appspot.com",
	});
}
