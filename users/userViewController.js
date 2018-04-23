module.exports = { 
	// this is funtion to make the login form actually sign in
 showLoginForm(req, res) {
 	console.log('You made it to the party');
 	res.render('auth/login');
  },
// this is the function to create a user
  showRegisterForm(req, res) {
	res.render('auth/register');
  },

  handleCreateUser(req, res) {
	res.redirect('/userHome');
  }
// this will prompt you back to the landig page right after you log out
  handleLogout(req, res) {
	res.redirect('/');
  },
  handleDelete(req, res) {
	res.redirect('/');
  },
};