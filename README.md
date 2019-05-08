# Coupon App

## The Project

The goal is to send the offer data (more details below) from the
database to the browser as JSON and then display the offers in the
browser as a single page application.

### Requirements

- [x] Define a JSON API for consumption by the client
- [x] Build a single page application (SPA) using a JavaScript frontend framework or library
- [x] Asynchronously request the data needed for your SPA from your Rails API
- [x] Display all offers in a gallery view
- [x] Display an individual offer in a detail view
- [x] Provide code in a private git repo (hosted or in an archive)

### Functionality

- [x] Track offer views
- [x] Search for offers
- [x] Display retailer info for an offer

### Documentation

## Ruby on Rails

This application requires:

- Ruby (2.5.x)
- Rails (5.2.2)

Learn more about [Installing Rails](http://railsapps.github.io/installing-rails.html).

Here's a quick install procedure for OSX El Capitan:

1. Ensure XCode and Command Line Tools are installed
2. Install [brew](http://brew.sh/)
3. Install the following brew packages

```
#!sh
brew install git node pcre rbenv ruby-build sqlite3
```

4. Ensure your rbenv profile is setup per the instructions printed during brew install, and possibly restart your terminal
5. cd to the project root directory (where Gemfile is) and setup ruby

```
#!sh
cd [project_directory]
rbenv install 2.5.3
rbenv rehash
gem install bundler
```

6. Initialize the application

```
bundle install
rake db:migrate
rake db:test:prepare
rake db:seed
```

```
cd app/client
npm install
npm start
cd ../..
rails s
```
