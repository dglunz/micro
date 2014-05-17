var postsData = [
	{
		title: 'Introducing Telescope',
		author: 'Sacha Greif',
		url: 'http://sachagreif.com/introducing-telescope'
	},
	{
		title: 'Meteor',
		author: 'Tom Coleman',
		url: 'http://meteor.com'
	},
	{
		title: 'The Meteor Boo',
		author: 'Tom Coleman',
		url: 'http://themetoerbook.com'
	}
];
Template.postsList.helpers({
	posts: postsData
});