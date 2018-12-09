from django.shortcuts import render
from .models import Author
from rest_framework import viewsets
from .searializers import AuthorSerializer

class AuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
