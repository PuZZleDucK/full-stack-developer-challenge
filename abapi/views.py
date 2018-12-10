from django.shortcuts import render
from .models import Author, Book
from rest_framework import viewsets
from .searializers import AuthorSerializer, BookSerializer
from rest_framework.response import Response

# Generate default Author views based on the serializer and data model
class AuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer

    def list(self, request):
        queryset = Author.objects.all()
        serializer = AuthorSerializer(queryset, many=True)
        return Response(serializer.data)

# Generate default Book views based on the serializer and data model
class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

    def list(self, request):
        queryset = Book.objects.all()
        serializer = BookSerializer(queryset, many=True)
        return Response(serializer.data)
