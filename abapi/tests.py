from django.test import TestCase

# Create your tests here.
class SanityTest(TestCase):
	def test_tautology(self):
		self.assertEqual(True, True)

class ModelTest(TestCase):
	def test_author_model_creation(self):
		author = Author(first_name="author-first", last_name="author-last")
		self.assertEqual("author-first", author.first_name)
		self.assertEqual("author-last", author.last_name)
