from django.shortcuts import render
from .models import Author
from rest_framework import viewsets
from .searializers import AuthorSerializer
from rest_framework.response import Response

class AuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer

    def list(self, request):
        queryset = Author.objects.all()
        serializer = AuthorSerializer(queryset, many=True)
        return Response(serializer.data)
