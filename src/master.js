define(['jquery', 'dumbfile', 'handlebars-v2.0.0', '../templates/test_hbs','cell'], function (jQuery, dumb, Handlebars, test_hbs, cell) {

	var myModule = {
		doStuff : function () {
			var source = test_hbs;
			var template = Handlebars.compile(source);
			alert('Yay! Stuff');
			var context = {
				title : "My New Post",
				body : "This is my first post!"
			}
			var html = template(context);
			jQuery('#templateTarget').html(html);
			jQuery('#templateTarget2').html(cell);
		}
	}
	return myModule;
});
