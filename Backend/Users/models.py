from django.contrib.auth.models import AbstractUser
from djongo import models
# Create your models here.


class User(AbstractUser):
    GENDER_CHOICES = (
        ('M', 'MALE'),
        ('F', 'FEMALE'),
        ('O', 'OTHER'),
    )
    name = models.CharField(max_length=255)
    nationality = models.CharField(max_length=3)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)

    def delete_user(self):
        return reverse("staff:delete-user")
