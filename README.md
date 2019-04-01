# Banknote Binder: a Vue app for world banknote collectors who want to catalog their collections with a visual flourish.

# Banknote Binder User Stories

## Home Page

    As a user when I go to the root route, I see a nav bar with a brand and links to search, new issued, login and register.

    Random selections of notes from the database are displayed with information about them.

## About

    As a user, I can access the /about route without being logged in. There I can see information about Note Collector, what I can do with it and best practices for using the site.

## Browse

    As a user, I can access the /browse route without logging in. There I can search through banknotes by country. There are two selects, the one on the left selects a region which then populates the right select with the countries from that region. Once a country is selected, notes from that country are displayed with image and information about the note.

## New Issues

    As a user, I can access the /newissue link without logging in. There I can view notes that have been issued in the current month. This is static page.

## Register

    As a user, when I got to the /register route, I can register for the site with my first and last name, email and password. Once I register I am redirected to the /login route.

## Login

    As a user, when I arrive at the /login route, I can login with my email and password. I am redirected to the dashboard where I see the last three notes added to my Collection and my Want List.

    From the dashboard I can choose to view my collection, add to my collection, view my want list or add to my want list.

## View Collection

    As a user, when I navigate to the View Collection link, I see the last 15 notes added to my collection. At the top is a list of the total notes in my collection, as well as the information on the last note added to my collection.

    On this view, there is a button to delete notes from my collection.

## View Want List

    As a user, when I navigate to the View Want List link, I see the last 15 notes added to my Want List. At the top is a list of the total notes in my Want List, as well as the information on the last note added to my Want List.

    On this view I can choose to delete notes from my Want List, or Move them to my collection.

## Add to Collection

    As a user, when I navigate to the Add to Collection route, I see dual selects like the browse page. When the notes populate, I see only those that are not in my collection. If a note is on my want list, a burst will show on the note to inform me that is is on the want list.

    There is a button to add the note to my collection. I can choose to return to the dashboard or continue adding notes.


## Add to Want List

    As a user, when I navigate to the Add to Want List route, I see dual selects again. When the notes populate, I see only those that are neither in my Collection, nor on my Want List.

    There is a button to add the note to my Want List. I can choose to return to the dashboard or continue adding notes.

## Add New Note

    On the Add to Collection and Add to Want List pages, a button populates with the notes. It navigates to a page where I can add a new note to the database, and add it to my Collection or Want List.

    It has a drop down for the region, text areas for the Country, Catalog #, Denomination, Currency and Date. There is a drop down to select the grade of the note.

## Logout

    Once I am done working with my Collection and Want List, I can log out. I will be returned to the Login page where I will see the Browse, New Issues, Login and Register navs displayed.

