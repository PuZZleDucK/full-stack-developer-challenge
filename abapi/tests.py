from django.test import TestCase
from .models import Author, Book

# Create your tests here.
class SanityTest(TestCase):
	def test_tautology(self):
		self.assertEqual(True, True)

class ModelTest(TestCase):
	def test_author_model_creation(self):
		author = Author(first_name="author-first", last_name="author-last")
		self.assertEqual("author-first", author.first_name)
		self.assertEqual("author-last", author.last_name)

	def test_author_model_str(self):
		author = Author(first_name="author-first", last_name="author-last")
		self.assertEqual("author-last, author-first", str(author))

	def test_book_model_creation(self):
		author = Author(first_name="author-first", last_name="author-last")
		book = Book(name="test-book", isbn="0137129297", author=author)
		self.assertEqual("test-book", book.name)
		self.assertEqual("0137129297", book.isbn)
		self.assertEqual("author-last, author-first", str(book.author))
