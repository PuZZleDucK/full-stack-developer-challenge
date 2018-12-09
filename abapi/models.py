from django.db import models

# Create your models here.
class Author(models.Model):
    first_name = models.TextField()
    last_name = models.TextField()

    def __str__(self):
        return self.self.last_name + ", " + first_name
