from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from .models import Author
from .views import AuthorViewSet, BookViewSet
from . import views

# Rest Framework generates most of the paths we need using the view sets
router = routers.DefaultRouter()
router.register('author', AuthorViewSet)
router.register('book', BookViewSet)

# We manually add the pluralized routes for the list formats
urlpatterns = [
    url('^authors/', AuthorViewSet.as_view({'get': 'list'})),
    url('^books/', BookViewSet.as_view({'get': 'list'})),
    url('', include(router.urls)),
]
