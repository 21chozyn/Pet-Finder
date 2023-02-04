from django.urls import path
from .views import index

urlpatterns = [
    path("", index),
    path("puppies-and-dogs-for-sale", index),
    path("detail", index ),
    path("login", index)
]
