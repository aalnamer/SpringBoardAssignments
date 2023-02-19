"""Blogly application."""

from flask import Flask, request, render_template,  redirect, flash, session
from models import  User , db, connect_db
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql:///blogly"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']  =  False
app.config['SQLALCHEMY_ECHO'] =  True
app.config['SECRET_KEY'] = "something"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

connect_db(app)

@app.route('/')
def home():
    users = User.query.all()
    return render_template('home.html', users = users)


@app.route('/users/new', methods=["POST"])
def create_user():
    
    first_name = request.form["first_name"]
    last_name = request.form["last_name"]
    image_url= request.form["image_url"]
    image_url = str(image_url) if image_url else None


    new_user  = User(first_name=first_name, last_name= last_name, image_url = image_url)
    db.session.add(new_user)
    db.session.commit()

    return redirect(f'/users/{new_user.id}')



@app.route("/users/<int:users_id>")
def show_user(users_id):
    """Show details about a single user"""
    users = User.query.get_or_404(users_id)
    return render_template("details.html", users=users)



# @app.route('/users/<int:user_id>/edit')
# def users_edit(user_id):
#     """Show a form to edit an existing user"""

#     user = User.query.get_or_404(user_id)
#     return render_template('edit.html', user=user)




















@app.route("/users/<int:users_id>/edit", methods=["POST"])
def edit_user(users_id):
    users = User.query.filter(User.id == users_id).first()
    users.first_name = request.form["first_name"]
    users.last_name = request.form["last_name"]
    users.image_url = request.form["image_url"]
    db.session.add(users)
    db.session.commit()
    
    return redirect(f'/users/{users_id}')
    
    
@app.route("/users/<int:users_id>/delete", methods=['POST'])
def delete_user(users_id):
    users = User.query.get_or_404(users_id)
    db.session.delete(users)
    db.session.commit()
    
    return redirect('/')
    
    