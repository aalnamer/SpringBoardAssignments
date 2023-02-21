"""Blogly application."""

from flask import Flask, request, render_template,  redirect, flash, session
from models import  User , db, connect_db, Post
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
    """Displays Users"""
    users = User.query.all()
    return render_template('home.html', users = users)


@app.route('/users/new', methods=["POST"])
def create_user():
    """Uses Create Form to Retrive Parameters About New User And Redirects To Users Page"""
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
    posts = Post.query.filter(Post.user_id == users_id).all()
    print('******************************')
    print(posts)
    print('****************************')  
    
    return render_template("details.html", users=users, posts = posts)

@app.route("/users/<int:users_id>/edit", methods=["POST"])
def edit_user(users_id):
    """Uses Edit Form to Edit Current User"""
    users = User.query.filter(User.id == users_id).first()
    users.first_name = request.form["first_name"]
    users.last_name = request.form["last_name"]
    users.image_url = request.form["image_url"]
    db.session.add(users)
    db.session.commit()
    
    return redirect(f'/users/{users_id}')
    
    
@app.route("/users/<int:users_id>/delete", methods=['POST'])
def delete_user(users_id):
    """Uses Delete Button to Delete Current User Info"""
    users = User.query.get_or_404(users_id)
    db.session.delete(users)
    db.session.commit()
    
    return redirect('/')
    
    
    


# """POST ASSIGNMENT"""



@app.route("/users/<int:users_id>/new-post", methods = ['POST'])
def post_page(users_id):
    users = User.query.get_or_404(users_id)
    return render_template('post.html',users=users)



@app.route("/users/<int:users_id>/post", methods = ['POST'])
def new_post(users_id):
    title = request.form["title"]
    content = request.form["content"]
    user = User.query.get_or_404(users_id)
    print('*******************************************')
    print(user)
    print(type(user))
    print('***********************************************')
    new_post = Post(title = title, content = content, user = user)
    db.session.add(new_post)
    db.session.commit()
    return redirect (f"/posts/{new_post.id}")






@app.route("/posts/<int:post_id>")
def show_post(post_id):
    """Show details about a post"""
    posts = Post.query.get_or_404(post_id)
    return render_template("post_detail.html", posts=posts)


@app.route("/posts/<int:post_id>/edit", methods = ["POST"])
def edit_post(post_id):
    post = Post.query.filter(Post.id == post_id).first()
    post.title = request.form["title"]
    post.content = request.form["content"]
    db.session.add(post)
    db.session.commit()
    flash(f"Post '{post.title}' edited.")
    
    return redirect(f'/posts/{post_id}')

    
    
@app.route("/posts/<int:post_id>/delete", methods=['POST'])
def delete_post(post_id):
    """Uses Delete Button to Delete Current Post Info"""
    post = Post.query.get_or_404(post_id)
    db.session.delete(post)
    db.session.commit()
    print('******************************')
    print(post.user_id)
    print('******************************')
    flash (f'Post {post.title} deleted')
    return redirect(f'/users/{post.user_id}')


@app.route("/users/<int:users_id>")
def list_posts(users_id):
    """Show details about a users posts"""
    posts = Post.query.filter_by(Post.user_id == users_id).all()
    print('******************************')
    print(posts)
    print('****************************')    
    return render_template("details.html", posts=posts)