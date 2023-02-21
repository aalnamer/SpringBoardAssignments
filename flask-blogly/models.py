"""Models for Blogly."""
import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def connect_db(app):
    db.app = app
    db.init_app(app)

class User(db.Model):
    
    __tablename__ = 'users'
    
    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)

    first_name = db.Column(db.String(50),
                     nullable=False,
                     )

    last_name = db.Column(db.String(30),   
                          nullable=True)

    image_url = db.Column(db.String, nullable=False, default='https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg')
    
    
    posts = db.relationship("Post", backref="user")


class Post(db.Model):
    __tablename__ = 'posts'
    
    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)

    title = db.Column(db.String(150),
                     nullable=False,
                     )

    content = db.Column(db.String(50),   
                          nullable=True)

    created_at = db.Column(db.DateTime, nullable=False, default = datetime.datetime.now)
    
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)
    