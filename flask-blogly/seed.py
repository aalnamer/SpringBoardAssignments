"""Seed file to make sample data for db."""

from models import User, Post, db
from app import app

# Create all tables
db.drop_all()
db.create_all()

df = User(first_name='fin', last_name='Finance')
dm = User(first_name='sample1', last_name='test1')
dk = User(first_name='sample2', last_name='test2')

post1= Post(title='Leonard', content="something1")
post2 = Post(title='post2', content="something2")
post3= Post(title='post3', content="post3")

db.session.add_all([df, dk, dm, post1,post2,post3])
db.session.commit()