

# Developer Response: A Book Catalog

This repository contains my submission for the Infoxchange developer challenge.

Project Structure


Tech. Python 3.5+ Django, Angular, Travis
https://travis-ci.org/PuZZleDucK/full-stack-developer-challenge

Testing, TDD

Validations


## Getting and Running the project

git clone https://github.com/PuZZleDucK/full-stack-developer-challenge
init
run dev
test
online deployment https://a-book-catalog.herokuapp.com/


## Assumptions and Issues
- clear specification
- ambiguious use case and workload
- GitHub: Infoxchange use docker (and Pallet)
- GitHub: Infoxchange use travis
- GitHub: Infoxchange use coveralls.io
- GitHub: Infoxchange use Pypi for packaging and badges
- GitHub: Infoxchange use MIT and GPL
- GitHub: todo lists
- GitHub: samples and examples



## Plan

- [x] Review challenge and document approach, consider structure and composition...
- [x] Documentation: license, coc...
- [x] Review infoxchange github repos
- [x] Setup django project framework
- [x] Setup deployment
- [x] Setup unit test framework
- [x] Automate tests
- [x] Author data model
- [x] Book data model
- [x] Setup api test
- [x] Author API
- [x] Book API
- [x] Setup angular framework
- [x] setup front end/integration tests
- [x] Automate front end tests
- [x] front end: Homepage: Book List
- [x] front end: Book Details
- [x] front end: Create/Update author
- [x] front end: Create/Update book
- [x] front end: Author Details
- [x] front end: Author list
- [x] UI: better layout, headers...
- [ ] (extra) front end: Author Details
- [ ] (extra)Stress testing / performance analysis
- [ ] (extra) mobile feature: barcode scanner
- [ ] Code Style review (pep...)
- [ ] Readability review
- [ ] Submit
- [ ] Feedback



## Challenge Statement

- [ ] write a small web application to manage a list of Books
- [x] Each book has a name, ISBN, and an author.
- [x] a RESTful API as the backend
- [x] Javascript based frontend application

- [x] API endpoints:
- [x] GET /books/ - list of books in the database in JSON format
- [x] GET /book/{{id}}/ - detail view of the specified book id. Nest author details in JSON format
- [x] GET /authors/ - list of authors in the database in JSON format
- [x] GET /author/{{id}}/ - detail view of the specified author id
- [x] POST /author/ - new author with the specified details - Expects a JSON body
- [x] POST /book/ - new book with the specified details - Expects a JSON body

- [ ] API endpoints to update existing records (optional):
- [ ] PUT /author/{{id}} - Updates an existing author - Expects a JSON body
- [ ] PUT /book/{{id}} - Updates an existing book - Expects a JSON body

- [x] recommended to use Python/Django along with [**Django REST Framework**](http://www.django-rest-framework.org/)
- [x] you are free to use a different language/framework/libraries

- [ ] a small frontend application to consume the API

- [x] show a list of names of the books available in the database
- [ ] clicking the name of a book on the list, navigate to a more detailed view of the book, with the ISBN and the author details.
- [x] two forms where the user is able to create/update authors and books (using the POST and PUT endpoints)
- [x] You are recommended to use ReactJS to create the frontend
- [x] you are free to use a different Javascript framework.


- [ ] The project structure is up to you to decide
- [ ] You are recommended to use git commits in a logical manner to demonstrate the development progress
- [ ] Writing tests and adhering to development standards/conventions will let you gain extra points :)


### Data structure

- [x] Use the following structure to model the data

```
class Author(Model):
    first_name = models.TextField()
    last_name = models.TextField()
```

```
class Book(Model):
    name = models.TextField()
    isbn = models.TextField()
    author = models.ForeignKey(Author)
```
