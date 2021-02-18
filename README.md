# API data model manager

Project consist in a small CMS that lets you do full RESTFUL calls to a particular contentful api.

### Built With

* React
* React-DOM
* React-Create-App
* react-toastify

## Usage

* Clone repo
* Run `npm install`
* Run `npm start`
* App will run in your browser, go to localhost*

## Once running:

Use the "Search" button to search querys. 
* Empty string will bring the most recent 100 items.
* Any string with "search by id" checkbox off, will get them by title match.
Use **New Book** to POST a new model.
Use **Clear** to release the memory from data showing on screen.
**Edit** button on every item displayed, will let you see more details of the item and edit them if you change them, and press save.
**Delete** will delete them from the API.