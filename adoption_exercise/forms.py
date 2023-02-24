from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, SelectField, BooleanField
from wtforms.validators import InputRequired, Optional, NumberRange, URL



class AddPet(FlaskForm):
    """Form for adding snacks."""

    name = StringField("Pet Name", validators=[InputRequired()])
    species = SelectField ("Species", choices=[("cat", "Cat"), ("dog", "Dog"), ("fish", "Fish")],  validators=[InputRequired()])
    photo_url = StringField("Photo URL", validators=[Optional(),URL()])
    age = FloatField("Age", validators=[Optional(),NumberRange(min=0, max=30)])
    notes = StringField("Notes", validators=[Optional()])
    avaliable = BooleanField("Avaliable", validators=[InputRequired()])
    
class EditPet(FlaskForm):

    photo_url = StringField(
        "Photo URL",
        validators=[Optional(), URL()],
    )

    notes = StringField(
        "Notes",
        validators=[Optional()],
    )

    available = BooleanField("Available?")