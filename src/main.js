require.config({
	baseUrl:"/bb/scripts"
});

require(['dumbfile', 'master'], function(dumb, master){
	master.doStuff();
	var test = 10;

});

