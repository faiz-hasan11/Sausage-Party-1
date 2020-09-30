from django.contrib.auth.models import AbstractUser
from django.db.models import CharField
from django.db import models
# Create your models here.


class User(AbstractUser):
    GENDER_CHOICES = (
        ('M', 'MALE'),
        ('F', 'FEMALE'),
        ('O', 'OTHER'),
    )
    name = CharField(max_length=255)
    nationality = CharField(max_length=3)
    gender = CharField(max_length=1, choices=GENDER_CHOICES)

    def delete_user(self):
        return reverse("staff:delete-user")
