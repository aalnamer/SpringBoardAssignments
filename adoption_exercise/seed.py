from app import db
from models import Pet

db.drop_all()
db.create_all()

pet = Pet(name="Slime", species = "Dog", photo_url = "https://cdn.pixabay.com/photo/2016/01/05/17/51/maltese-1123016__480.jpg", age = 6 , notes = "Small Dog", avaliable = True)
db.session.add(pet)
db.session.commit()
