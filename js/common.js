// //create avengers timeline chart using d3.js
// let container = d3.select(".container");

let width = 1030, height = 600, margin = { top: 20, right: 20, bottom: 20, left: 20 };
let vt_space = 50;
let r_max = 7;

function dataList() {
    return (
        {
            movies: [
                ({ movie_id: 1, movie_name: "Iron Man", movie_length: 126, movie_release_date: new Date("2008-05-02"), stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 2, movie_name: "The Incredible Hulk", movie_length: 112, movie_release_date: new Date("2008-06-13"), stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 3, movie_name: "Iron Man 2", movie_length: 124, movie_release_date: new Date("2010-05-07"), stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 4, movie_name: "Thor", movie_length: 115, movie_release_date: new Date("2011-05-06"), stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 5, movie_name: "Captain America: The First Avenger", movie_length: 124, movie_release_date: new Date("2011-07-22"), stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 6, movie_name: "Marvel's The Avengers", movie_length: 143, movie_release_date: new Date("2012-05-04"), stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 7, movie_name: "Iron Man 3", movie_length: 130, movie_release_date: new Date("2013-05-03"), stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 8, movie_name: "Thor: The Dark World", movie_length: 112, movie_release_date: new Date("2013-11-08"), stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 9, movie_name: "Captain America: The Winter Soldier", movie_length: 136, movie_release_date: new Date("2014-04-04"), stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 10, movie_name: "Guardians of the Galaxy", movie_length: 121, movie_release_date: new Date("2014-08-01"), stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 11, movie_name: "Avengers: Age of Ultron", movie_length: 141, movie_release_date: new Date("2015-05-01"), stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 12, movie_name: "Ant-Man", movie_length: 117, movie_release_date: new Date("2015-07-17"), stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 13, movie_name: "Captain America: Civil War", movie_length: 147, movie_release_date: new Date("2016-05-06"), stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 14, movie_name: "Doctor Strange", movie_length: 115, movie_release_date: new Date("2016-11-04"), stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 15, movie_name: "Guardians of the Galaxy Vol. 2", movie_length: 136, movie_release_date: new Date("2017-05-05"), stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 16, movie_name: "Spider-Man: Homecoming", movie_length: 133, movie_release_date: new Date("2017-07-07"), stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 17, movie_name: "Thor: Ragnarok", movie_length: 130, movie_release_date: new Date("2017-11-03"), stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 18, movie_name: "Black Panther", movie_length: 134, movie_release_date: new Date("2018-02-16"), stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 19, movie_name: "Avengers: Infinity War", movie_length: 149, movie_release_date: new Date("2018-04-27"), stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 20, movie_name: "Ant-Man and the Wasp", movie_length: 118, movie_release_date: new Date("2018-07-06"), stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 21, movie_name: "Captain Marvel", movie_length: 143, movie_release_date: new Date("2019-03-08"), stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 22, movie_name: "Avengers: Endgame", movie_length: 181, movie_release_date: new Date("2019-04-26"), stones: [0, 0, 0, 0, 0, 0] })
            ],

            linkes: [//Space Stone Next
                ({ stone_id: 1, source_movie_id: 3, target_movie_id: 4, lk_note: "next" }),
                ({ stone_id: 1, source_movie_id: 4, target_movie_id: 5, lk_note: "next" }),
                ({ stone_id: 1, source_movie_id: 5, target_movie_id: 6, lk_note: "next" }),
                ({ stone_id: 1, source_movie_id: 6, target_movie_id: 10, lk_note: "next" }),
                ({ stone_id: 1, source_movie_id: 10, target_movie_id: 11, lk_note: "next" }),
                ({ stone_id: 1, source_movie_id: 11, target_movie_id: 17, lk_note: "next" }),
                ({ stone_id: 1, source_movie_id: 17, target_movie_id: 19, lk_note: "next" }),
                ({ stone_id: 1, source_movie_id: 19, target_movie_id: 21, lk_note: "next" }),
                ({ stone_id: 1, source_movie_id: 21, target_movie_id: 22, lk_note: "next" }),
                //Space stone first
                ({ stone_id: 1, source_movie_id: 4, target_movie_id: 3, lk_note: "first" }),
                ({ stone_id: 1, source_movie_id: 5, target_movie_id: 3, lk_note: "first" }),
                ({ stone_id: 1, source_movie_id: 6, target_movie_id: 3, lk_note: "first" }),
                ({ stone_id: 1, source_movie_id: 10, target_movie_id: 3, lk_note: "first" }),
                ({ stone_id: 1, source_movie_id: 11, target_movie_id: 3, lk_note: "first" }),
                ({ stone_id: 1, source_movie_id: 17, target_movie_id: 3, lk_note: "first" }),
                ({ stone_id: 1, source_movie_id: 19, target_movie_id: 3, lk_note: "first" }),
                ({ stone_id: 1, source_movie_id: 21, target_movie_id: 3, lk_note: "first" }),
                ({ stone_id: 1, source_movie_id: 22, target_movie_id: 3, lk_note: "first" }),
                // Mind Stone Next
                ({ stone_id: 2, source_movie_id: 6, target_movie_id: 9, lk_note: "next" }),
                ({ stone_id: 2, source_movie_id: 9, target_movie_id: 10, lk_note: "next" }),
                ({ stone_id: 2, source_movie_id: 10, target_movie_id: 11, lk_note: "next" }),
                ({ stone_id: 2, source_movie_id: 11, target_movie_id: 13, lk_note: "next" }),
                ({ stone_id: 2, source_movie_id: 13, target_movie_id: 19, lk_note: "next" }),
                ({ stone_id: 2, source_movie_id: 19, target_movie_id: 22, lk_note: "next" }),
                // Mind Stone first
                ({ stone_id: 2, source_movie_id: 9, target_movie_id: 6, lk_note: "first" }),
                ({ stone_id: 2, source_movie_id: 10, target_movie_id: 6, lk_note: "first" }),
                ({ stone_id: 2, source_movie_id: 11, target_movie_id: 6, lk_note: "first" }),
                ({ stone_id: 2, source_movie_id: 13, target_movie_id: 6, lk_note: "first" }),
                ({ stone_id: 2, source_movie_id: 19, target_movie_id: 6, lk_note: "first" }),
                ({ stone_id: 2, source_movie_id: 22, target_movie_id: 6, lk_note: "first" }),
                // Reality Stone Next
                ({ stone_id: 3, source_movie_id: 8, target_movie_id: 10, lk_note: "next" }),
                ({ stone_id: 3, source_movie_id: 10, target_movie_id: 11, lk_note: "next" }),
                ({ stone_id: 3, source_movie_id: 11, target_movie_id: 19, lk_note: "next" }),
                ({ stone_id: 3, source_movie_id: 19, target_movie_id: 22, lk_note: "next" }),
                // Reality Stone first
                ({ stone_id: 3, source_movie_id: 10, target_movie_id: 8, lk_note: "first" }),
                ({ stone_id: 3, source_movie_id: 11, target_movie_id: 8, lk_note: "first" }),
                ({ stone_id: 3, source_movie_id: 19, target_movie_id: 8, lk_note: "first" }),
                ({ stone_id: 3, source_movie_id: 22, target_movie_id: 8, lk_note: "first" }),
                // Power Stone Next
                ({ stone_id: 4, source_movie_id: 10, target_movie_id: 11, lk_note: "next" }),
                ({ stone_id: 4, source_movie_id: 11, target_movie_id: 15, lk_note: "next" }),
                ({ stone_id: 4, source_movie_id: 15, target_movie_id: 19, lk_note: "next" }),
                ({ stone_id: 4, source_movie_id: 19, target_movie_id: 22, lk_note: "next" }),
                // Power Stone First 
                ({ stone_id: 4, source_movie_id: 11, target_movie_id: 10, lk_note: "first" }),
                ({ stone_id: 4, source_movie_id: 15, target_movie_id: 10, lk_note: "first" }),
                ({ stone_id: 4, source_movie_id: 19, target_movie_id: 10, lk_note: "first" }),
                ({ stone_id: 4, source_movie_id: 22, target_movie_id: 10, lk_note: "first" }),

                // Time Stone Next
                ({ stone_id: 5, source_movie_id: 14, target_movie_id: 19, lk_note: "next" }),
                ({ stone_id: 5, source_movie_id: 19, target_movie_id: 22, lk_note: "next" }),

                // Time Stone First 
                ({ stone_id: 5, source_movie_id: 19, target_movie_id: 14, lk_note: "first" }),
                ({ stone_id: 5, source_movie_id: 22, target_movie_id: 14, lk_note: "first" }),

                // Soul Stone Next
                ({ stone_id: 6, source_movie_id: 10, target_movie_id: 19, lk_note: "next" }),
                ({ stone_id: 6, source_movie_id: 19, target_movie_id: 22, lk_note: "next" }),

                // Soul Stone First 
                ({ stone_id: 6, source_movie_id: 19, target_movie_id: 10, lk_note: "first" }),
                ({ stone_id: 6, source_movie_id: 22, target_movie_id: 10, lk_note: "first" }),
            ]
        }
    )
}

var time = d3.scaleTime()
    .domain([new Date(2008, 0, 1), new Date(2020, 0, 1)])
    .range([0, width - margin.left - margin.right]);

var for_start = d3.scaleTime()

function xAxis(margin, h, vt_space, d3, xTimeScale) {
    return (
        function (g) {
            g
                .attr("transform", `translate(${margin.left - 5},${h - vt_space + 20})`)
                .call(d3.axisBottom(xTimeScale)
                    .tickSize(10)
                );
        }
    )
}

function sizeScale(movie_length_data) {
    // console.log(r_max);
    return (
        d3.scaleLinear()
            // use d3.max and d3.min in domain to get the max and min of the data
            .domain([0, d3.max(movie_length_data, function (d) { return d.movie_length; })])
            .range([r_max * 0.6, r_max])
    )
}

function Stone_color() {
    return (
        function Stone_color(d) {
            var stone_color = "black"
            if (d.stone_id == 1) { var stone_color = "#266EF6" }
            else if (d.stone_id == 2) { var stone_color = "#FFD300" }
            else if (d.stone_id == 3) { var stone_color = "#FF0130" }
            else if (d.stone_id == 4) { var stone_color = "#E429F2" }
            else if (d.stone_id == 5) { var stone_color = "#12E772" }
            else if (d.stone_id == 6) { var stone_color = "#FF8B00" }
            return stone_color;
        }
    )
}

function idTodate(data) {
    let dict = {};
    data.movies.forEach(function (n) {
        dict[n.movie_id] = n.movie_release_date;
    });
    return dict;
}

function buildArc(xTimeScale, idTodate, h, vt_space) {
    return (
        function buildArc(d) {
            
            // d.source and d.target are the locations in graphData.links
            // xScale takes a node name and finds its location on the x axis from 0 to width
            // So start is the location in pixels of the start of the arc
            // console.log(idTodate[d.target_movie_id])
            console.log(d)
            let start = xTimeScale(idTodate[d.source_movie_id]);
            let end = xTimeScale(idTodate[d.target_movie_id]);
            var arcPath = null;
            // This code builds up the SVG arc path element
            if (d.lk_note == "first") {
                var arcPath = ['M',            // start the path
                    start, height - vt_space,       // declare the (x,y) of where to start
                    'A',                     // specify an eliptical curve
                    (start - end) / 2, ',',    // xradius: height of arc is proportional to start - end
                    (start - end) / 2,         // yradius 
                    0, 0, ",",              // rotation of ellipse is 0 along x and y; see arc url for details
                    start < end ? 1 : 0,     // make all arcs curve above the nodes; see arc documentation
                    end, height - vt_space]         // declare (x,y) of endpoint
                    .join(' ');                // convert the bracketed array into a string
            }
            else {
                var arcPath = ['M',            // start the path
                    start, height - vt_space,       // declare the (x,y) of where to start
                    'A',                     // specify an eliptical curve
                    (start - end) / 3, ',',    // xradius: height of arc is proportional to start - end
                    (start - end) / 3,         // yradius 
                    0, 0, ",",              // rotation of ellipse is 0 along x and y; see arc url for details
                    start < end ? 0 : 1,     // make all arcs curve above the nodes; see arc documentation
                    end, height - vt_space]         // declare (x,y) of endpoint
                    .join(' ');                // convert the bracketed array into a string
            }

            //console.log(arcPath)
            return arcPath;
        }
    )
}


// d3.extent(data.movies, function (d) { return d.movie_release_date; })
function createAvengersTimelineChart(data, container, width, height, margin) {
    data = dataList();
    var svg = d3.select(container).append("svg")
        .attr("width", width)
        .attr("height", height);

    var g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const arcGroup = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var nodes = arcGroup.selectAll("nodes")
        .data(data.movies)
        .enter().append("circle")
        // .attr("cx", d => xTimeScale(d.movie_release_date)) // x-Axis scale based on movie release date...
        .attr("cx", d => time(d.movie_release_date)) // x-Axis scale based on movie release date...
        .attr("cy", 350)
        .attr("r", 4) // circle Radius based on movie length in time...
        .attr("fill", "#FFFFFF")
        .attr("stroke-width", 3)
        .attr("stroke", "#F0131E")
        .attr("id", d => d.movie_id)

    var x = d3.scaleLinear()
        .range([0, width - margin.left - margin.right]);

    var y = d3.scaleLinear()
        .range([height - margin.top - margin.bottom - 10 - 200, 0]);


    // var line = d3.line()
    //     .x(function (d) { return x(d.year); })
    //     .y(function (d) { return y(d.value); });



    const rect = arcGroup.selectAll("rect")
        .data(data.movies)
        .enter().append("rect")
        .attr("x", margin.left)
        .attr("y", height * 0.8)
        .attr("width", width * 0.4)
        .attr("height", height * 0.1)
        .attr("stroke", "#F0131E")
        .attr("fill", "#FFFFFF")
        .attr("stroke-width", 3)

    const text = arcGroup.selectAll("nodeLabels")
        .data(data.movies)
        .enter().append("text")
        // .attr("x", (margin.left + width * 0.4) / 2 + 10)
        // .attr("y", (height * 0.95) + 10)
        .attr("x", margin.left)
        .attr("y", height * 0.8)
        .attr("fill", "#000000")
        .style("text-anchor", "middle")
        .style("font-size", 18)        
        .attr("id", d => d.movie_id)
        .style("font-family", "Impact, Charcoal, sans-serif")



    x.domain(d3.extent(data.movies, function (d) { return d.movie_release_date.getYear() + 1900; }));
    // y.domain(d3.extent(data.movies, function (d) { return d.movie_length; }));


    g.append("g")
        .attr("transform", "translate(0," + 350 + ")")
        .call(d3.axisBottom(x))

    const arcs = arcGroup.selectAll("arcs")
        .data(data.linkes)
        .enter().append("path")
        .attr("d", d => buildArc(d))
        .style("fill", "none")            // no fill color for the arcs
        .attr("stroke", d => Stone_color(d))
        .attr("stroke-width", 3)


    arcs
        // hide the arcs
        .attr("stroke-dasharray", function () { return this.getTotalLength() })
        .attr("stroke-dashoffset", function () { return this.getTotalLength() })

        // reveal the arcs   
        .transition().duration(4000)
        .attr("stroke-dashoffset", 0)
        .attr("stroke", "#D3D3D3")  //grey out
        .attr("stoke-width", 3)

        // after animation for interactions
        .on("end", function () {

            // When the user mouses over a node,
            // add interactive highlighting to see connections between nodes  

            nodes.on('mouseover', function (d) {

                //  highlight only the selected node
                d3.select(this).style("fill", "#F0131E");
                d3.select(this).style("stroke-width", 3);
                d3.select(this).style("stroke", "#FFFFFF");

                // display name title
                rect.style("fill", "#F0131E")
                text.text(function (text_id) {
                    console.log(text_id.movie_name)
                    return text_id.movie_id == d.movie_id ? text_id.movie_name : null
                });

                // next, style the arcs      
                // the arc color and thickness stays as the default unless connected to the selected node d
                // notice how embedding the reference to arcs within nodes.on() allows the code to connect d to arcd
                // this code iterates through all the arcs so we can compare each to the selected node d --> (node has its own defined above id)                

                arcs.style('stroke', function (arcd) {
                    // console.log(arcd)
                    return arcd.source_movie_id === d.movie_id || arcd.target_movie_id === d.movie_id ? Stone_color(arcd) : '#D3D3D3';
                })
            });

            nodes.on('mouseout', function (d) {
                rect.style("fill", "#FFFFFF");
                nodes.style("fill", "#FFFFFF");
                nodes.style("stroke-width", 3)
                nodes.style("stroke", "#F0131E")
                arcs.style('stroke', '#D3D3D3');
                arcs.style('stroke-width', 3);
            });

        });




    // g.append("g")
    //     .call(d3.axisLeft(y));

    // g.append("path")
    //     .datum(data)
    //     .attr("fill", "none")
    //     .attr("stroke", "steelblue")
    //     .attr("stroke-linejoin", "round")
    //     .attr("stroke-linecap", "round")
    //     .attr("stroke-width", 1.5)
    //     .attr("d", line);


}

createAvengersTimelineChart(dataList(), ".container", width, height, { top: 20, right: 20, bottom: 20, left: 20 });
