from django.db import models

# Create your models here.
class Author(models.Model):
    first_name = models.TextField()
    last_name = models.TextField()
    def __str__(self):
        return self.last_name + ", " + self.first_name

class Book(models.Model):
    name = models.TextField()
    isbn = models.TextField()
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
