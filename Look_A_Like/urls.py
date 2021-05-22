
from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.selectPage),
    path('avg', include("AG.urls")),
    path('hp', include("HP.urls")),
]
