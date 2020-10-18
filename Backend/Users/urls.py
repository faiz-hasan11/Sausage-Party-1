from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework import routers
from .views import *
from knox import views as knox_views
from .views import LoginAPI

from .models import User

router = routers.DefaultRouter()
router.register('User', UserViewSet)
urlpatterns = [
    # Add these lines
    path('rest-auth/facebook/', views.FacebookLogin.as_view(), name='fb_login'),
    path('rest-auth/google/', views.GoogleLogin.as_view(), name='google_login'),
    path('', include(router.urls)),
    path('api/register/', RegisterAPI.as_view(), name='register'),
    path('api/login/', LoginAPI.as_view(), name='login'),
    path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('api/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
]
