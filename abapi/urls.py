from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from .models import Author
from .views import AuthorViewSet, BookViewSet
from . import views

router = routers.DefaultRouter()
router.register('author', AuthorViewSet)
router.register('book', BookViewSet)

urlpatterns = [
    url('^authors/', AuthorViewSet.as_view({'get': 'list'})),
    url('', include(router.urls)),
]
