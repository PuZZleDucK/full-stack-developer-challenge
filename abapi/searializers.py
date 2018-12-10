from rest_framework import serializers
from .models import Author, Book

# Convert Author model to/from serial (json) data
class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ('id', 'first_name', 'last_name')

# Convert Book model to/from serial (json) data
class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('id', 'name', 'isbn', 'author')
