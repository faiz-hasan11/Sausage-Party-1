from django.contrib import admin
from django.urls import path, include
from . import views
urlpatterns = [
    # Add these lines
    path('rest-auth/facebook/', views.FacebookLogin.as_view(), name='fb_login'),
    path('rest-auth/google/', views.GoogleLogin.as_view(), name='google_login')
]
