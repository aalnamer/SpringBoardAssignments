from flask import Flask, request, render_template,  redirect, flash, session
from models import db,  connect_db, Pet
from forms import AddPet, EditPet

app = Flask(__name__)
app_ctx = app.app_context()
app_ctx.push()
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///employees_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "chickenzarecool21837"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False


connect_db(app)
db.create_all()




@app.route("/")
def homepage():
    pets = Pet.query.all()
    return render_template("index.html", pets = pets)

@app.route("/add", methods =['GET','POST'])
def add_pet():
    form = AddPet()
    
    if form.validate_on_submit():
        name = form.name.data
        species = form.species.data
        photo_url = form.photo_url.data 
        age  = form.age.data 
        notes  = form.notes.data 
        avaliable  = form.avaliable.data 
        
        pet = Pet(name=name, species = species, photo_url = photo_url, age=age , notes = notes, avaliable = avaliable)
        db.session.add(pet)
        db.session.commit()
        flash(f'Added {name} the {species}')
        return redirect("/")
    else:
        return render_template("add_pet_form.html", form = form )

@app.route("/<int:pet_id>")
def show_pet(pet_id):
    pet = Pet.query.get_or_404(pet_id)
    return render_template("details.html", pet = pet )
    
    
@app.route("/<int:pet_id>/edit", methods=["GET", "POST"])
def edit_pet(pet_id):
    """Edit pet."""

    pet = Pet.query.get_or_404(pet_id)
    form = EditPet(obj=pet)

    if form.validate_on_submit():
        pet.notes = form.notes.data
        pet.available = form.available.data
        pet.photo_url = form.photo_url.data
        db.session.commit()
        flash(f"{pet.name} updated.")
        return redirect('/')
    else:
        return render_template("edit_pet_form.html", form=form, pet=pet)
    