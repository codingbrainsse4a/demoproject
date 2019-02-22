const router = require('router');
const mysql = require('mysql');
const frontend = router();

var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'nodejs'
});

frontend.get('/',function(req,res,next){

	pool.query('SELECT * from customers', function (error, results, fields) {
	  	if (error) throw error;
	  	console.log('The solution is: ', results);
		res.render('pages/index', {
		  	title: 'Welcome to property Management System',
		  	data: results,
		  	layout: 'layout'
		});
	});

});

frontend.get('/about-us',function(req,res,next){

	pool.query('SELECT * from customers', function (error, results, fields) {
	  	if (error) throw error;
	  	console.log('The solution is: ', results);
		res.render('pages/aboutUs', {
		  	title: 'About Us',
		  	data: "Home Page",
		  	layout: 'innerPage'
		});
	});	
});
frontend.get('/our-partners',function(req,res,next){
	res.render('pages/ourPartners', {
	  	title: 'our-partners',
	  	data: "Home Page",
	  	layout: 'innerPage'
	});	
});

frontend.get('/property/:property_slug',function(req,res,next){
	res.render('pages/singleProperty', {
	  	title: 'My favorite veggies',
	  	data: {name:'bipin'},
	  	layout: 'innerPage'
	});	
});

frontend.get('/properties',function(req,res,next){
	res.render('pages/properties', {
	  	title: 'My favorite veggies',
	  	data: {name:'bipin'},
	  	layout: 'innerPage'
	});	
});

frontend.get('/blogs',function(req,res,next){
	res.render('pages/blogs', {
	  	title: 'My favorite veggies',
	  	data: {name:'bipin'},
	  	layout: 'innerPage'
	});	
});

frontend.get('/blog/:blog_slug',function(req,res,next){
	res.render('pages/singleBlog', {
	  	title: 'My favorite veggies',
	  	data: {name:'bipin'},
	  	layout: 'innerPage'
	});	
});

frontend.get('/contact-us',function(req,res,next){
	res.render('pages/contactUs', {
	  	title: 'My favorite veggies',
	  	data: {name:'bipin'},
	  	layout: 'innerPage'
	});	
});






module.exports = frontend;