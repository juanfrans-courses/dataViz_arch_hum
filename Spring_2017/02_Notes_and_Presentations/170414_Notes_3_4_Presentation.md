### Notes on 3/4 Review
#### AirBnB Analysis
* Your are using a pre-processed .csv file, could this be replicated with a live API?
* If you are doing sophisticated analysis like topic modeling you should actually display it and let the user play with it. Same for the clustering or the classification.
* Stay away from word clouds, they are extremely imprecise and easily manipulated.
* Do you need the detail map? d3.js might help with the cartogram but it is not necessary, what about a grid?
* Preprocessing vs. live analysis. Try to do as much as you can with live analysis, in case the data gets updated or changes you can plug it in and your visualization will still work.
* dashboard.electome.org

#### Make America Great Again?
* If you are going to talk about "unexpected" win, you should define it. What exactly do you mean by that? Is it based on the different forecasts? So where the polls where the most off, or is it something else?
* Have a clear strategy for choosing your cities/counties and state it at the beginning. Is it the to Trump cities/counties with a population greater than x based on election results? Or is it something else?
* Does it make sense to pick out a couple of Clinton cities/counties to use as a comparison?
* 1950s? Can you infer this from the data? How do you come up with this date?

#### Distribution of Affordable Housing in NYC
* Are the borough graphs normalized by the city or by the borough?
* If you talk about segregation you should make sure you provide a brief definition of the term, so that the user know exaclty what you mean by it.
* Annotate the graph with specific cases.
* In the end, you should provide some brief conclusions (along with some graphs) of your findings. What interesting things did you discover through your visualization.
* You only need to label two sides, not the four of them, that just makes it confusing.

#### Who gains and looses from AirBnB?
* Why the radial chart? A scatterplot could work better. Easier to read and to create and less cluttered. You could also see patterns better. Test both scenarios and choose the one that really does a good job at displaying the data and conveying your point.
* If you do go with the radial chart, make sure the angles axis means something (ie. what Buck suggested, to tie the angle to specific neighborhoods).
* Good idea to bring the politics into the data visualization. Note which cases would be affected or which cases are breaking the law.
* You could also do a comparison with StreetEasy or something like that as a different comparison metric.
* Do a good job at explaining the type of graph that you are using, through a legend or something like that, so that everyone can understand how you are representing the data.
* The same goes to the metrics that you are using. Try to explain it well and keep it simple enough that a reader who doesn't know anything about this can understand your data.

#### World of a Syrian Refugee
* Cartograms are a good device but shouldn't be your only graphic tool. They are not precise and not suitable for good comparisons. You need to incorporate other graphs that can really display the data and that allow you to make powerful comparisons between countries.
* Be aware of the limitations and possible biases in the GDELT dataset. Does it favor english speaking languages? Or certain types of media?
* Another option would be to use the New York Times API?
* Since you want to use the scrolling to tell your story, you should carefully craft your script so that it works well. However, in addition to telling the story, your piece should also let the user explore and play around with the data on their own. You need to allow for that too.

#### Taller than Trump
* Think about comparing to other major developers in the world, not just the ones that develop in cities where Trump has properties. Try to do a comparison in general, where does Trump stand in the development world?
* Good idea to bring in the impact of Trump's foreign policy into the visualization. Make sure it's there and that the users can filter the data based on the possible policy implications.
* Think more about your layout and your storyline. Are you making a particular point? If so, how are you making it and how does the layout and storytelling device help this?
* Think about your graphics a little more. Right now they are just standard bar charts, but you should customize them to make them look better and to help with your overall point.
* Think about interaction. How's the user going to interact with the piece. Filters, drop-down menus?
* Think about adding some data visualization (graphs) to your pop-up or hover info-panels.
