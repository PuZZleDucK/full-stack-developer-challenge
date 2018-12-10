from django.db import models

# Data model for Authors
class Author(models.Model):
    first_name = models.TextField()
    last_name = models.TextField()

    def __str__(self):
        return self.last_name + ", " + self.first_name

# Data model for Books
class Book(models.Model):
    name = models.TextField()
    isbn = models.TextField()
    author = models.ForeignKey(Author, on_delete=models.CASCADE)

    def __str__(self):
        return self.author.last_name + ". '" + self.name + "' ISBN " + self.isbn
