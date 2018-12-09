from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from .models import Author
from .views import AuthorViewSet

router = routers.DefaultRouter()
router.register('author', AuthorViewSet)

urlpatterns = [
    url('', include(router.urls)),
]
