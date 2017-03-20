React Menu
==========
A simple demo menu. For our menu data that the XHR requests I created a rails api utilizing the rails-api gem. You can access this server directly by going to http://104.131.53.79. I setup the Cors on this rails api to accept any type of call from everyone so you should be fine pulling in data for this react demo menu.
#Installation
##Step 1
Make sure you have NPM installed and then clone this repository
##Step 2
<pre>
$ cd "<i>name/path of the root directory that you cloned the project into</i>"
</pre>
In most cases
```bash
$ cd react-menu
```
##Step 3
Install all of the required NPM packages 
```bash
$ npm install
```
## Step 4
Since we have webpack-dev-server installed via our package.json file and a pre-written command in the scripts section of that file we can run the following and then make our way to "localhost:8080" in your browser
```bash
$ npm run dev
```
##Step 5
Open your browser and go to http://localhost:8080/
