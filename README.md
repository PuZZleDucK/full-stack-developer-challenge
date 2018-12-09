

# Developer Response: A Book Catalog

This repository contains A.B.C.: "A Book Catalog", which is my submission for the Infoxchange developer challenge. The project is a Django backend with an Angular frontend. The project has three main directories, the first is `abcatalog` which is the top level Django app that most handles dependancies and delegates routing to the api. The `abapi` directory is the heart of the project and contains all the code for providing the backend REST api and data models. The `frontend` directory contains obviously enough the Angular frontend code with most of the important components in the `src/app` directory.

The project was built with Python 3.7, but has also been tested in a continuious integration setup on Python 3.5 and 3.6 too. The continuious integration is setup on [Travis](https://travis-ci.org/PuZZleDucK/full-stack-developer-challenge) and is automatically deployed to Heroku on a successful build on the master branch.

There are in effect four types of tests used in the project. The backend has TDD based unit tests and also makes extensive use of the Django Client integrations tests to verify end to end functionality of the api. The front end tests are not quite as robust as the backend tests but still contain unit tests for many of the components and end to end integrations tests for core functionality.


## Getting and Running the project

To build a local version of "A Book Catalog" it is recomended to create a new python environment and open a command line terminal. First we will need to clone the repository:
```
git clone https://github.com/PuZZleDucK/full-stack-developer-challenge
```
Then install the backend dependancies:
```
pip install -r requirements.txt
```
Now we can run the backend tests (unit and integration tests are run with a single command):
```
python manage.py test
```
We can also run a local dev server in the background for our front end to interact with:
```
python manage.py runserver &
```
Now the development server api should be avaliable at [http://localhost:8000/](http://localhost:8000/), and we can move on to the frontend of the project and install its dependancies:
```
cd frontend
npm install
```
We're ready to run the frontend test suites now. There are two seperate commands, but we can squeese them into one line if we don't mind waiting for the component tests to pass before starting the integration tests:
```
ng test --browsers=ChromeHeadless --watch=false && ng e2e
```
Finally we're ready to put the last piece in place and serve the frontend of the project:
```
ng serve
```
We can view local frontend at [http://localhost:4200/](http://localhost:4200/)

There is also an online deployment on [Heroku](https://a-book-catalog.herokuapp.com/), but this is only for the the backend api part of the project as I ran out of time to setup a front end deployment.


## Assumptions and Issues
- The problem specification was clear and unambiguious
- however the use case and possible workloads are difficult to consider
- GitHub: Infoxchange use docker (and Pallet)
- GitHub: Infoxchange use travis
- GitHub: Infoxchange use coveralls.io
- GitHub: Infoxchange use Pypi for packaging and badges
- GitHub: Infoxchange use MIT and GPL
- GitHub: todo lists
- GitHub: samples and examples
- I would have liked to develop a better deployment
- Testing on the front end could be improved as I rushed to finish


## Plan

Below I have included a checklist I've used to monitor my goals and progress for the project. Normally I would not include this in the repository of a project but I present it here for your consideration:

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
- [x] Readability review
- [x] Improve docs
- [ ] postgres db
- [ ] frontend deployment (pages?)
- [ ] (extra) front end: Author Details
- [ ] (extra) Stress testing / performance analysis
- [ ] (extra) mobile feature: barcode scanner
- [ ] (extra) dropdown list of authors
- [ ] remove secrets
- [ ] Code Style review (pep...)
- [ ] Submit
- [ ] Feedback


## Challenge Statement

- [x] write a small web application to manage a list of Books
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

- [x] a small frontend application to consume the API

- [x] show a list of names of the books available in the database
- [x] clicking the name of a book on the list, navigate to a more detailed view of the book, with the ISBN and the author details.
- [x] two forms where the user is able to create/update authors and books (using the POST and PUT endpoints)
- [x] You are recommended to use ReactJS to create the frontend
- [x] you are free to use a different Javascript framework.


- [x] The project structure is up to you to decide
- [x] You are recommended to use git commits in a logical manner to demonstrate the development progress
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
