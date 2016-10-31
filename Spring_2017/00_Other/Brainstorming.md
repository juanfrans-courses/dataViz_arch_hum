# Brainstorming for Data Visualization Course

## Brainstorming
* Creating a basic website (local)
  * Create HTML and CSS and open it with Chrome (not live)
  * Running a local server
  * Brief terminal commands
  * How does this work in Windows **----??----**
* Taking that website live (Github):
  * Versioning concept
  * Branches
  * Add / Commit / Push / Fetch / Pull
  * gh-pages branch
* Programming basics (in p5 with a Python exercise in the middle):
  * Print (console?)
  * Data types:
    * Start by doing mathematical operations (dealing with `int` and `float`)
    * Work with `str`
    * `Arrays`
    * `Dictionaries`
    * Language Elements:
      * **Data-type**: Set of values and operations that may be used on those values.
      * **Class**: A computer representation of a data-type.
      * **Object**: A computer representation of a data-type value. Three parts: identity, type, value
      * **Object reference**: The location of an object in computer memory.
      * **Literals**: Symbolic representation of built-in number and string data-type values. Examples: _3, "happy".
      * **Identifier**: Symbolic representation of a name. In Python this is a sequence of letters, digits, or underscores. May not begin with a digit.
      * **Variable**: Conceptually this is just a name associated with a data-type value. So an Identifier is the Python symbolic representation of that name. More formally, in Python it is a location in memory that stores a reference to an object.
      * **Operators**: Symbolic representation of a data-type operation. Examples: +, /, //
      * **Keywords**: Reserved words that may not be used to name. These are the vocabulary of a programming language. Python has only a few dozen.
      * **Delimiters (punctuators)**: Symbols used to separate language elements.
      * **Statement**: A logical line of code that performs some task.
      * **Expression**: A sequence of literals, operators, variables, and delimiters that evaluate to some value.
  * Conditional statements
  * Loops (recursive)
  * Functions
    * Built in functions (`print`, `draw`, `setup`)
    * Creating new functions
    * Libraries
  * Objects
* From Enrico's [course](https://wikis.nyu.edu/pages/viewpage.action?pageId=53861653):
  * Visualization overview (**)
  * Basic charts (**)
  * "High information graphics" (what is this? abstract? or more complex charts?) (**)
  * Interactive visualization (**)
  * Design process (**)
  * Color maps (?)
  * Data abstraction (?)
  * Visual encoding & graphical perception (**)
  * Networks and trees
  * Maps
  * Time oriented data
* **Two vectors of work: different types of data and different types of representation.**
* Other concepts:
  * Transition
  * Animation
  * Specific tools for dealing with text
  * APIs
  * Do we need a specific class or workshop on **colors**?
* **It is as much about getting and analyzing the data as it is about visualizing it in a compelling, meaningful and engaging way.**
* We need one or two well done sessions on **data analysis**.
* Do we need to talk about mobile-ready design? (Bootstrap?)
* **It is not about the specific tools or languages, it is about data, how to deal with it, how to collect it, how does it look, how to organize it, parse it and analyze it, and about visualizing it, the importance of visualizing, the uses of visualization and the inner workings of visualization.**
* **It is also about programming but in a high-level way, its concepts, not its minutiae.**

## Possible exercises
* Create a matrix of data visualization types & types of data
* Examples of great data visualization projects (one big one that they can present to the class)
* Visualization without data
* Work with weather data ([forecast.io API](https://developer.forecast.io/))
* Work with literary text data (**)
* Work with personal data (**)
* Work with stock market data
* Work with city data (**)
* Work with census data ([citysdk](https://uscensusbureau.github.io/citysdk/)?)
* Querying APIs (Python or live in JavaScript)
* Prototype drawing by hand (**)
* Possible structure of exercises:
  * Build a simple website
  * Matrix of visualizations and data
  * Explore and present one visualization
  * Create first visualization prototype (fixed dataset) (maybe this one goes earlier?) and present it and defend it. Feel free to transform the data. What story are you trying to tell? (individual or in groups? depends on how many peeps we get)
  * Put the visualization on the web
  * Make it interactive, responsive, live
  * Write about a visualization
  * Final project

## Sample courses:
* [Information Visualization (2014)](https://wikis.nyu.edu/pages/viewpage.action?pageId=53861653), Enrico Bertini, NYU (CS9223).
* [Information Design: Exploration, Navigation, and Understanding (2016)](https://fathom.info/4s50/), Ben Fry, MIT (4.s50). [Blog post about course](https://fathom.info/notebook/15092/).
* [Programming from A to Z](http://shiffman.net/a2z/), Daniel Shiffman, ITP. (2016). [Github repo for the course](https://github.com/shiffman/A2Z-F16/blob/gh-pages/README.md).
* [Data Visualization (2016)](https://courses.cs.washington.edu/courses/cse512/16sp/), Jeffrey Heer, University of Washington (CSE512). [Student work repository](https://github.com/CSE512-16S).
* [Information Visualization (2016)](http://www.cs.ubc.ca/~tmm/courses/547-15/), Tamara Munzner, University of British Columbia (CPSC 547).
* [Information Visualization (2015)](http://www.cc.gatech.edu/~stasko/7450/15/index.html), John Stasko, Georgia Tech (CS 7450).
* [Information Visualization (2014)](http://susanemcgregor.com/information-visualization-spring-2014/), Susan McGregor, Columbia.

## Other articles (not sure how good they are yet):
* [The Dublin Dashboard: Design and Development of a Real-Time Analytical Urban Dashboard](http://www.isprs-ann-photogramm-remote-sens-spatial-inf-sci.net/IV-4-W1/19/2016/isprs-annals-IV-4-W1-19-2016.pdf), Gavin McArdle, Robin Kitchin
* [The Surprising History of the Infographic](http://www.smithsonianmag.com/history/surprising-history-infographic-180959563/?no-ist)
* [Paolo Ciuccarelli (Eyeo 2016)](https://vimeo.com/179944386?utm_content=buffer04e84&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer)
* [Data visualizations videos on Visualoop](http://visualoop.com/blog/94689/viz-on-video-27)
* Big data:
  * danah boyd and Kate Crawford, “Critical Questions for Big Data,” Information, Communication and Society 15:5 (2012): 662-79.
  * Rob Kitchin and Gavin McArdle, “What Makes Big Data, Big Data? Exploring the Ontological Characteristics of 26 Datasets,” Big Data & Society 3:1 (February 2016): 1-10.
  * The Economist: [The data deluge](http://www.economist.com/node/15579717) and [Data, data everywhere](http://www.economist.com/node/15557443)

## Outside of the scope of the course (extra)
* React:
  * [Eagereyes on Jérôme Cukier’s Series on Visualization with React](https://eagereyes.org/link/jerome-cukiers-series-on-visualization-with-react)
  * [Visualization with React](http://www.jeromecukier.net/blog/2016/08/09/visualization-with-react/) by Jerome Cukier
* D3:
  * [Blocks](https://bl.ocks.org/)
* Data science:
  * [General Assembly Data Science Course](https://github.com/justmarkham/DAT8#class-4-exploratory-data-analysis)
* Data scraping:
  * [NPR Gun sales listings scarping](http://blog.apps.npr.org/2016/06/17/scraping-tips.html)
* R:
  * [FiveThirtyEight's data journalism workflow with R](https://channel9.msdn.com/Events/useR-international-R-User-conference/useR2016/FiveThirtyEights-data-journalism-workflow-with-R)

## Possible readings:
* Tufte on the Challenger
* [Critique to Tufte on the Challenger](http://www.onlineethics.org/Topics/ProfPractice/Exemplars/BehavingWell/RB-intro/RepMisrep.aspx)
* [Anscombe's Quartet](http://astro.swarthmore.edu/astro121/anscombe.html)
* [Critical Visualization Event at GC, CUNY (2016)](http://patriksv.net/2016/04/critical-visualization-event-at-gc-cuny-on-june-9-2016/)
* [White Flight: Complexity, Optics, and Visualization as Evasion](http://video.mit.edu/watch/white-flight-complexity-optics-and-visualization-as-evasion-5910/) (Video) - Very interesting, "against Tufte".
* [What Does a Critical Data Studies Look Like and Why Do We Care?](https://societyandspace.com/material/commentaries/craig-dalton-and-jim-thatcher-what-does-a-critical-data-studies-look-like-and-why-do-we-care-seven-points-for-a-critical-approach-to-big-data/)
* [What Would Feminist Data Visualization Look Like?](https://civic.mit.edu/feminist-data-visualization)
* [Humanities Approaches to Graphical Display](http://www.digitalhumanities.org/dhq/vol/5/1/000091/000091.html)
* [Should Humanists Visualize Knowledge?](https://vimeo.com/140307034) (Video)
* [The Why and How of Middleware](http://www.digitalhumanities.org/dhq/vol/10/2/000248/000248.html)
* [Pentacon 6: The History of the Cold War in a Camera System](http://www.zachhorton.com/?p=251)
* [The Long Arc of Visual Display](https://www.youtube.com/watch?v=heUI6QmSdzc)
* [Visualization as Argument](http://lklein.com/2014/12/visualization-as-argument/)
* [Methodolatry and the Art of Measure](https://placesjournal.org/article/methodolatry-and-the-art-of-measure/)
* [Mission Control: A History of the Urban Dashboard](https://placesjournal.org/article/mission-control-a-history-of-the-urban-dashboard/)
* [Response to Tarleton Gillespie's "The Relevance of Algorithms"](http://opentranscripts.org/transcript/response-tarleton-gillespie-relevance-algorithms/)
* [One Damn Slide After Another](http://computationalculture.net/article/one-damn-slide-after-another-powerpoint-at-every-occasion-for-speech)
* [Words Alone: Dismantling Topic Models in the Humanities](http://journalofdigitalhumanities.org/2-1/words-alone-by-benjamin-m-schmidt/)
* [The Change Actor in the Digital Age](http://www.nachtkritik.de/index.php?option=com_content&view=article&id=11470:beyond-the-spectacle-imperative-the-change-actor-in-the-digital-age-by-nishant-shah&catid=101:debatte&Itemid=84)
* [Presentation|Tech (III): Angled Screens](http://patriksv.net/2015/09/presentationtech-angled-screens-iii/)
* [Information is Beautiful Awards](http://www.informationisbeautifulawards.com/)
* [Principles for making things for the web, by Noah Veltman](https://github.com/veltman/principles)
* [Content-out Layout](http://alistapart.com/article/content-out-layout)
* [Seven ways humanists are using computers to understand texts](https://tedunderwood.com/2015/06/04/seven-ways-humanists-are-using-computers-to-understand-text)
* [Text visualization browser](http://textvis.lnu.se/) *not so much a reading as a collection of examples from 1976-present on ways to visualize text*
* [Miriam Posner's How Did They Make That](http://miriamposner.com/blog/how-did-they-make-that/) *explains at a very high level what tools you would need to know to make different types of projects*
* [A Brief History of Data Visualization](http://www.datavis.ca/papers/hbook.pdf)
* [Mining the Social Web, by Matthew Russell](https://github.com/ptwobrussell/Mining-the-Social-Web-2nd-Edition)
* [Interaction Design: Beyond Human-Computer Interaction, by Jenny Preece](https://www.amazon.com/dp/1119020751/ref=pd_lpo_sbs_dp_ss_1?pf_rd_p=1944687562&pf_rd_s=lpo-top-stripe-1&pf_rd_t=201&pf_rd_i=0470665769&pf_rd_m=ATVPDKIKX0DER&pf_rd_r=C44T457YPEJD55GQ042M)
* [Data Visualization with D3.js Cookbook, by Nick Qi Zhu](https://www.amazon.com/Data-Visualization-D3-js-Cookbook-Nick/dp/178216216X)
* [Information Visualization: Perception for Design, by Colin Ware](https://www.amazon.com/Information-Visualization-Third-Interactive-Technologies/dp/0123814642)
* [An Empire Built on Sand: Reexamining What We Think We Know About Visualization](http://kosara.net/papers/2016/Kosara-BELIV-2016.pdf)