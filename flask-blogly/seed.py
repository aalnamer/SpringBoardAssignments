"""Seed file to make sample data for db."""

from models import User, Post, PostTag, db
from app import app

# Create all tables
db.drop_all()
db.create_all()
