# Belly Button Challenge

For this challenge I built an interactive dashboard to explore the [Belly Button Biodiversity dataset](https://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The interactive dashboard was built in the following manner:

- Used the JavaScript library, D3, to read in `samples.json` from the URL `https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json`.

- Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in the individual selected from the dropdown menu.

- Created a bubble chart that displays each bacteria sample.

- Displayed the individual's demographic information.

- Updated all the plots when a new individual is selected.

- Deployed the dashboard to the free static page hosting service, GitHub Pages.

---

## **Repository Files and Folders**

Besides this `README.md` file, there are five files and two folders.

The following three files are not within either of the two folders:

- `index.html`: the html file used to create the interactive dashboard.

- `indexStarter.html`: the html file that was intially provided for the challenge.

- `samples.json`: The JSON file containing a local copy of the data - provided as a reference - that is explored in the interactive dashboard.

The remaining two files are within the folder named **js**, which itself is within the other folder, named **static**:

- `app.js`: The JavaScript file used to create all the interactive elements within the dashboard using the data in `samples.json`.

- `appStarter.js`: The JavaScript file that was initially provided for the challenge.

---

## **References**

Amberlamps. (2013, February 11). *map function for objects (instead of arrays)* (S. V. Brunov, Ed.). Stack Overflow. <https://stackoverflow.com/questions/14810506/map-function-for-objects-instead-of-arrays>

Bootstrap. (2022). *Bootstrap*. Getbootstrap.com. <https://getbootstrap.com/>

C., M. (2023, April 15). *Map function for objects (instead of arrays)*. Sentry. <https://sentry.io/answers/map-function-for-objects-instead-of-arrays/>

MDN Contributors. (2023, September 25). *JavaScript*. MDN Web Docs. <https://developer.mozilla.org/en-US/docs/Web/javascript>

Observable. (n.d.). *What is D3? | D3 by Observable*. D3js.org. <https://d3js.org/what-is-d3>

Plotly. (n.d.). *Plotly JavaScript Graphing Library*. Plotly.com. <https://plotly.com/javascript/>
