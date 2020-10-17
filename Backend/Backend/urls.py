from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import *
from knox import views as knox_views
from .views import LoginAPI
from Users.models import User
#from .models import Stock

router = routers.DefaultRouter()
router.register('User',UserViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
        path('',include(router.urls)),
        path('api-auth/',include('rest_framework.urls',namespace='rest_framework')),
        path('api/register/', RegisterAPI.as_view(), name='register'),
        path('api/login/', LoginAPI.as_view(), name='login'),
        path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
        path('api/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
]
