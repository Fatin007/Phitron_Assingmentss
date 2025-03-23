from django.urls import include, path
from . import views

urlpatterns = [
    path('about/', views.about),
    path('contact/', views.contact),
    path('services/', views.services),
]