* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background: #f4f4f4;
  color: #333;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 15px 40px;
  background: #222;
}

.navbar .logo {
  color: #fff;
}

.nav-links {
  list-style: none;
  display: flex;
}

.nav-links li {
  margin-left: 20px;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
}

/* Hero */
.hero {
  height: 90vh;
  background: linear-gradient(to right, #4facfe, #00f2fe);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
}

.hero span {
  color: yellow;
}

.btn {
  margin-top: 15px;
  padding: 10px 20px;
  background: #222;
  color: #fff;
  border: none;
  text-decoration: none;
  cursor: pointer;
}

.secondary {
  background: #555;
}

/* Sections */
section {
  padding: 60px 40px;
  text-align: center;
}

.skills .skill-box span {
  display: inline-block;
  margin: 10px;
  padding: 10px 15px;
  background: #ddd;
  border-radius: 5px;
}

/* Projects */
.project-card {
  background: #fff;
  padding: 20px;
  width: 300px;
  margin: auto;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

/* Contact */
.contact input, .contact textarea {
  width: 80%;
  margin: 10px 0;
  padding: 10px;
}

/* Footer */
footer {
  background: #222;
  color: #fff;
  padding: 15px;
  text-align: center;
}
