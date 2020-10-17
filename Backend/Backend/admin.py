from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from Users.models import User
from .models import Stock

# Register your models here.
admin.site.register(User)
admin.site.register(User,UserAdmin)