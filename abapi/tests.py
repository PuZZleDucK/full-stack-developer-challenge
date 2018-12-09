from django.test import TestCase
from .models import Author, Book


class ApiTest(TestCase):
	def test_author_api_get_id(self):
		self.client.post('/author/', {'first_name':'api-first','last_name':'api-last'})
		response = self.client.get('/author/1/')
		self.assertEqual(response.status_code, 200)
		self.assertEqual(response.json(), {'id': 1, 'first_name':'api-first','last_name':'api-last'})

	def test_author_api_get(self):
		self.client.post('/author/', {'first_name':'api-first','last_name':'api-last'})
		response = self.client.get('/authors/')
		self.assertEqual(response.status_code, 200)
		self.assertEqual(1, len(response.json()))

	def test_author_api_create(self):
		initial_count = Author.objects.all().count()
		response = self.client.post('/author/', {'first_name':'api-first','last_name':'api-last'})
		self.assertEqual(response.status_code, 201)
		self.assertEqual(initial_count + 1, Author.objects.all().count())

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

	def test_book_model_str(self):
		author = Author(first_name="author-first", last_name="author-last")
		book = Book(name="test-book", isbn="0137129297", author=author)
		self.assertEqual("author-last. 'test-book' ISBN 0137129297", str(book))

class SanityTest(TestCase):
	def test_tautology(self):
		self.assertEqual(True, True)
