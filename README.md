## Website Performance Optimization portfolio project

### How to run
Download the entire directory and open 'index.html' in a browser locally.
To run Gulp for task runner, execute 'gulp' command in the project root directory.
The task runner optimize JS and CSS files.

####Part 1: Optimize PageSpeed Insights score for index.html
- Image compression: Images were resized. *Gulp image compression doesn't work on my environment. So I used online resize service.
- Minifying CSS: Used gulp-pleeease to be minified. A media attribute was added for printinging until then the file will not downloaded.
- Minifying JS: Used gulp-uglify to be minified. Async attribute was added for analytics scripting to reduce the initial downloading time.

####Part 2: Optimize Frames per Second in pizza.html
- Loop optimization: Move the unnecessary calculation from loops in updatePositions function.
