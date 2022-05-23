// //create avengers timeline chart using d3.js
// let container = d3.select(".container");

let width = 1030, height = 640, margin = { top: 20, right: 20, bottom: 20, left: 20 };
let vt_space = 50;
let r_max = 7;
// let data = [{ year: 1977, value: 47 },
// { year: 1978, value: 64 },
// { year: 1975, value: 31 },
// { year: 1981, value: 88 },
// { year: 1988, value: 33 },
// { year: 1973, value: 11 },
// { year: 1975, value: 1 },
// { year: 2004, value: 69 },
// { year: 1983, value: 3 },
// { year: 2003, value: 77 },
// { year: 2006, value: 57 },
// { year: 1993, value: 34 },
// { year: 1987, value: 80 },
// { year: 1979, value: 100 },
// { year: 1986, value: 83 }
// ];

// Below is the copy of _data
/** {
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
            ] */


function dataList() {
    return (
        {
            movies: [
                ({ movie_id: 1, movie_name: "Iron Man", movie_length: 126, movie_release_date: 2008, stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 2, movie_name: "The Incredible Hulk", movie_length: 112, movie_release_date: 2008, stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 3, movie_name: "Iron Man 2", movie_length: 124, movie_release_date: 2010, stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 4, movie_name: "Thor", movie_length: 115, movie_release_date: 2011, stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 5, movie_name: "Captain America: The First Avenger", movie_length: 124, movie_release_date: 2011, stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 6, movie_name: "Marvel's The Avengers", movie_length: 143, movie_release_date: 2012, stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 7, movie_name: "Iron Man 3", movie_length: 130, movie_release_date: 2013, stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 8, movie_name: "Thor: The Dark World", movie_length: 112, movie_release_date: 2013, stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 9, movie_name: "Captain America: The Winter Soldier", movie_length: 136, movie_release_date: 2014, stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 10, movie_name: "Guardians of the Galaxy", movie_length: 121, movie_release_date: 2014, stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 11, movie_name: "Avengers: Age of Ultron", movie_length: 141, movie_release_date: 2015, stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 12, movie_name: "Ant-Man", movie_length: 117, movie_release_date: 2015, stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 13, movie_name: "Captain America: Civil War", movie_length: 147, movie_release_date: 2016, stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 14, movie_name: "Doctor Strange", movie_length: 115, movie_release_date: 2016, stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 15, movie_name: "Guardians of the Galaxy Vol. 2", movie_length: 136, movie_release_date: 2017, stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 16, movie_name: "Spider-Man: Homecoming", movie_length: 133, movie_release_date: 2017, stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 17, movie_name: "Thor: Ragnarok", movie_length: 130, movie_release_date: 2017, stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 18, movie_name: "Black Panther", movie_length: 134, movie_release_date: 2018, stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 19, movie_name: "Avengers: Infinity War", movie_length: 149, movie_release_date: 2018, stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 20, movie_name: "Ant-Man and the Wasp", movie_length: 118, movie_release_date: 2018, stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 21, movie_name: "Captain Marvel", movie_length: 143, movie_release_date: 2019, stones: [0, 0, 0, 0, 0, 0] }),
                ({ movie_id: 22, movie_name: "Avengers: Endgame", movie_length: 181, movie_release_date: 2019, stones: [0, 0, 0, 0, 0, 0] })
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

function xTimeScale(d3, w) {
    return (
        d3.scaleTime()
            .domain([new Date(2008, 0, 1), new Date(2020, 0, 1)])
            .range([0, w])
    )
}


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

// function createAvengersTimelineChart(data = dataList(), container, width, height, margin) {
//     data = dataList();
//     var svg = d3.select(container).append("svg")
//         .attr("width", width)
//         .attr("height", height);

//     var g = svg.append("g")
//         .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        

//     var x = d3.scaleLinear()
//             .domain(d3.extent(data.movies, function (d)  { return d.movie_release_date }))
//             .range([r_max * 0.6, r_max]);


//     var y = d3.scaleLinear()
//         .range([height - margin.top - margin.bottom - 10, 0]);

//     // Commented code is a line chart
//     // var line = d3.line()
//     //     .x(function (d) { return x(d.year); })
//     //     .y(function (d) { return y(d.value); });

//     // console.log(data.movies.movie_release_date);
//     x.domain(d3.extent(data.movies, function (d)  { return d.movie_release_date }));
//     // y.domain(d3.extent(data, function (d) { return d.value; }));

//     // g.append("g")
//     //     .attr("transform", "translate(0," + y(0) + ")")
//     //     .call(d3.axisBottom(x));

//     // g.append("g")
//     // .call(d3.axisLeft(y));


//     // g.append("path")
//     //     .datum(data)
//     //     .attr("fill", "none")
//     //     .attr("stroke", "steelblue")
//     //     .attr("stroke-linejoin", "round")
//     //     .attr("stroke-linecap", "round")
//     //     .attr("stroke-width", 1.5)
//     //     .attr("d", line);

    
//         // .tickSize(10);

//     // g.attr("transform", `translate(${margin.left - 5},${height - vt_space + 20})`)
//     //  .call(d3.axisBottom(xTimeScale))
//     //  .tickSize(10);

//     g.append("text")
//         .attr("x", (width / 2))
//         .attr("y", height - margin.bottom + 20)
//         .attr("text-anchor", "middle")
//         .style("font-size", "16px")
//         .style("text-decoration", "underline")
//         .text("Avengers Timeline");

//     g.append("text")
//         .attr("x", (width / 2))
//         .attr("y", height - margin.bottom + 20)
//         .attr("text-anchor", "middle")
//         .style("font-size", "12px")
//         .text("Year");

//     //create legends on the above line chart
//     //dont create any text fields instead create legend dots or circles on the line chart

//     g.append("circle")
//         .attr("cx", width - margin.right - 20)
//         .attr("cy", height - margin.bottom - 25)
//         .attr("r", 5)
//         .style("fill", "red");

//     g.append("text")
//         .attr("x", width - margin.right - 20)
//         .attr("y", height - margin.bottom - 20)
//         .attr("text-anchor", "middle")
//         .style("font-size", "12px")
//         .text("Avengers Count");

//     g.append("g")
//         .attr("class", "legend legend--ordinal")
//         .attr("transform", "translate(20,20)")
//         .style("font-size", "12px")
//         .style("font-family", "Impact, Charcoal, sans-serif");

   
// }

// createAvengersTimelineChart(0, ".container", width, height, margin);



























//create a json with random values with the columns "year" and "value"
 // g.append("text")
    //     .attr("transform", "rotate(-90)")
    //     .attr("y", 0 - margin.left)
    //     .attr("x", 0 - (height / 2))
    //     .attr("dy", "1em")
    //     .style("text-anchor", "middle")
    //     .style("font-size", "12px")
    //     .text("Avengers Count");

    // g.append("text")
    //     .attr("x", (width / 2))
    //     .attr("y", height - margin.bottom + 60)
    //     .attr("text-anchor", "middle")
    //     .style("font-size", "12px")
    //     .text("(Year - Avengers Count)");














function createAvengersTimelineChart(data, container, width, height, margin) {
    var svg = d3.select(container).append("svg")
        .attr("width", width)
        .attr("height", height);

    var g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var x = d3.scaleLinear()
        .range([0, width - margin.left - margin.right]);

    var y = d3.scaleLinear()
        .range([height - margin.top - margin.bottom - 10, 0]);

    var line = d3.line()
        .x(function (d) { return x(d.year); })
        .y(function (d) { return y(d.value); });

    x.domain(d3.extent(data, function (d) { return d.year; }));
    y.domain(d3.extent(data, function (d) { return d.value; }));

    g.append("g")
        .attr("transform", "translate(0," + y(0) + ")")
        .call(d3.axisBottom(x));

    g.append("g")
        .call(d3.axisLeft(y));

    g.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 1.5)
        .attr("d", line);

    g.append("text")
        .attr("x", (width / 2))
        .attr("y", height - margin.bottom+20)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style("text-decoration", "underline")
        .text("Avengers Timeline");
        
    g.append("text")
        .attr("x", (width / 2))
        .attr("y", height - margin.bottom + 20)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .text("Year"); 
}

createAvengersTimelineChart(data, ".container", 600, 400, { top: 20, right: 20, bottom: 20, left: 20 });

//create a json with random values with the columns "year" and "value"
 // g.append("text")
    //     .attr("transform", "rotate(-90)")
    //     .attr("y", 0 - margin.left)
    //     .attr("x", 0 - (height / 2))
    //     .attr("dy", "1em")
    //     .style("text-anchor", "middle")
    //     .style("font-size", "12px")
    //     .text("Avengers Count");

    // g.append("text")
    //     .attr("x", (width / 2))
    //     .attr("y", height - margin.bottom + 60)
    //     .attr("text-anchor", "middle")
    //     .style("font-size", "12px")
    //     .text("(Year - Avengers Count)");




/*  // const nodes = arcGroup.selectAll("nodes")
    //     .data(data.movies)
    //     .enter().append("circle")
    //     .attr("cx", d => xTimeScale(d.movies.movie_release_date)) // x-Axis scale based on movie release date...
    //     .attr("cy", h - vt_space)
    //     .attr("r", d => sizeScale(d.movie_length)) // circle Radius based on movie length in time...
    //     .attr("fill", "#FFFFFF")
    //     .attr("stroke-width", stroke_width)
    //     .attr("stroke", "#F0131E")
    //     .attr("id", d => d.movie_id)

    // arcs
    // // hide the arcs
    // .attr("stroke-dasharray", function () { return this.getTotalLength() })
    // .attr("stroke-dashoffset", function () { return this.getTotalLength() })

    // // reveal the arcs   
    // .transition().duration(4000)
    // .attr("stroke-dashoffset", 0)
    // .attr("stroke", "#D3D3D3")  //grey out
    // .attr("stoke-width", stroke_width)
    //     .on("end", function () {

    //         // When the user mouses over a node,
    //         // add interactive highlighting to see connections between nodes  

    //         nodes.on('mouseover', function (d) {

    //           //  highlight only the selected node
    //           d3.select(this).style("fill", "#F0131E");
    //           d3.select(this).style("stroke-width", 2);
    //           d3.select(this).style("stroke", "#FFFFFF");

    //           // display name title
    //           rect.style("fill", "#F0131E");
    //           text.text(function (text_id) {
    //             return text_id.movie_id == d.movie_id ? text_id.movie_name : null
    //           })

    //           // next, style the arcs      
    //           // the arc color and thickness stays as the default unless connected to the selected node d
    //           // notice how embedding the reference to arcs within nodes.on() allows the code to connect d to arcd
    //           // this code iterates through all the arcs so we can compare each to the selected node d --> (node has             its own defined above id)
    //           arcs.style('stroke', function (arcd) {
    //             return arcd.source_movie_id === d.movie_id || arcd.target_movie_id === d.movie_id ? Stone_color(arcd) : '#D3D3D3';
    //           })
    //         });

    //         nodes.on('mouseout', function (d) {
    //           rect.style("fill", "#BBBBBB");
    //           nodes.style("fill", "#BBBBBB");
    //           nodes.style("stroke-width", stroke_width)
    //           nodes.style("stroke", "#F0131E")
    //           arcs.style('stroke', '#D3D3D3');
    //           arcs.style('stroke-width', stroke_width);
    //         });

    //       }); */