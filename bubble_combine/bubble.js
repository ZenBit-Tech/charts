(function () {
    const width = 800;
    const height = 500;
    const radius = 10;

    const datapoints = [
        { id: 1, r: 1, color: 'red', position: 'left' }, 
        { id: 2, r: 2, color: 'red', position: 'left' }, 
        { id: 3, r: 3, color: 'red', position: 'left' },
        { id: 4, r: 4, color: 'red', position: 'left' }, 
        { id: 5, r: 5, color: 'red', position: 'left' },
        { id: 6, r: 6, color: 'red', position: 'left' }, 
        { id: 7, r: 7, color: 'red', position: 'left' },
        { id: 8, r: 8, color: 'red', position: 'left' }, 
        { id: 9, r: 9, color: 'red', position: 'left' },
        { id: 10, r: 10, color: 'red', position: 'left' }, 
        { id: 11, r: 11, color: 'red', position: 'left' },
        { id: 12, r: 12, color: 'green', position: 'right' }, 
        { id: 13, r: 13, color: 'green', position: 'right' }, 
        { id: 14, r: 14, color: 'green', position: 'right' },
        { id: 15, r: 15, color: 'green', position: 'right' }, 
        { id: 16, r: 16, color: 'green', position: 'right' },
        { id: 17, r: 17, color: 'green', position: 'right' }, 
        { id: 18, r: 18, color: 'green', position: 'right' },
        { id: 19, r: 19, color: 'green', position: 'right' }, 
        { id: 20, r: 20, color: 'green', position: 'right' },
        { id: 21, r: 21, color: 'green', position: 'right' }, 
        { id: 22, r: 22, color: 'green', position: 'right' },
        { id: 1, r: 1, color: 'red', position: 'left' }, 
        { id: 2, r: 2, color: 'red', position: 'left' }, 
        { id: 3, r: 3, color: 'red', position: 'left' },
        { id: 4, r: 4, color: 'red', position: 'left' }, 
        { id: 5, r: 5, color: 'red', position: 'left' },
        { id: 6, r: 6, color: 'red', position: 'left' }, 
        { id: 7, r: 7, color: 'red', position: 'left' },
        { id: 8, r: 8, color: 'red', position: 'left' }, 
        { id: 9, r: 9, color: 'red', position: 'left' },
        { id: 10, r: 10, color: 'red', position: 'left' }, 
        { id: 11, r: 11, color: 'red', position: 'left' },
        { id: 12, r: 12, color: 'green', position: 'right' }, 
        { id: 13, r: 13, color: 'green', position: 'right' }, 
        { id: 14, r: 14, color: 'green', position: 'right' },
        { id: 15, r: 15, color: 'green', position: 'right' }, 
        { id: 16, r: 16, color: 'green', position: 'right' },
        { id: 17, r: 17, color: 'green', position: 'right' }, 
        { id: 18, r: 18, color: 'green', position: 'right' },
        { id: 19, r: 19, color: 'green', position: 'right' }, 
        { id: 20, r: 20, color: 'green', position: 'right' },
        { id: 21, r: 21, color: 'green', position: 'right' }, 
        { id: 22, r: 22, color: 'green', position: 'right' },
        { id: 1, r: 1, color: 'red', position: 'left' }, 
        { id: 2, r: 2, color: 'red', position: 'left' }, 
        { id: 3, r: 3, color: 'red', position: 'left' },
        { id: 4, r: 4, color: 'red', position: 'left' }, 
        { id: 5, r: 5, color: 'red', position: 'left' },
        { id: 6, r: 6, color: 'red', position: 'left' }, 
        { id: 7, r: 7, color: 'red', position: 'left' },
        { id: 8, r: 8, color: 'red', position: 'left' }, 
        { id: 9, r: 9, color: 'red', position: 'left' },
        { id: 10, r: 10, color: 'red', position: 'left' }, 
        { id: 11, r: 11, color: 'red', position: 'left' },
        { id: 12, r: 12, color: 'green', position: 'right' }, 
        { id: 13, r: 13, color: 'green', position: 'right' }, 
        { id: 14, r: 14, color: 'green', position: 'right' },
        { id: 15, r: 15, color: 'green', position: 'right' }, 
        { id: 16, r: 16, color: 'green', position: 'right' },
        { id: 17, r: 17, color: 'green', position: 'right' }, 
        { id: 18, r: 18, color: 'green', position: 'right' },
        { id: 19, r: 19, color: 'green', position: 'right' }, 
        { id: 20, r: 20, color: 'green', position: 'right' },
        { id: 21, r: 21, color: 'green', position: 'right' }, 
        { id: 22, r: 22, color: 'green', position: 'right' },
        { id: 1, r: 1, color: 'red', position: 'left' }, 
        { id: 2, r: 2, color: 'red', position: 'left' }, 
        { id: 3, r: 3, color: 'red', position: 'left' },
        { id: 4, r: 4, color: 'red', position: 'left' }, 
        { id: 5, r: 5, color: 'red', position: 'left' },
        { id: 6, r: 6, color: 'red', position: 'left' }, 
        { id: 7, r: 7, color: 'red', position: 'left' },
        { id: 8, r: 8, color: 'red', position: 'left' }, 
        { id: 9, r: 9, color: 'red', position: 'left' },
        { id: 10, r: 10, color: 'red', position: 'left' }, 
        { id: 11, r: 11, color: 'red', position: 'left' },
        { id: 12, r: 12, color: 'green', position: 'right' }, 
        { id: 13, r: 13, color: 'green', position: 'right' }, 
        { id: 14, r: 14, color: 'green', position: 'right' },
        { id: 15, r: 15, color: 'green', position: 'right' }, 
        { id: 16, r: 16, color: 'green', position: 'right' },
        { id: 17, r: 17, color: 'green', position: 'right' }, 
        { id: 18, r: 18, color: 'green', position: 'right' },
        { id: 19, r: 19, color: 'green', position: 'right' }, 
        { id: 20, r: 20, color: 'green', position: 'right' },
        { id: 21, r: 21, color: 'green', position: 'right' }, 
        { id: 22, r: 22, color: 'green', position: 'right' },
        { id: 1, r: 1, color: 'red', position: 'left' }, 
        { id: 2, r: 2, color: 'red', position: 'left' }, 
        { id: 3, r: 3, color: 'red', position: 'left' },
        { id: 4, r: 4, color: 'red', position: 'left' }, 
        { id: 5, r: 5, color: 'red', position: 'left' },
        { id: 6, r: 6, color: 'red', position: 'left' }, 
        { id: 7, r: 7, color: 'red', position: 'left' },
        { id: 8, r: 8, color: 'red', position: 'left' }, 
        { id: 9, r: 9, color: 'red', position: 'left' },
        { id: 10, r: 10, color: 'red', position: 'left' }, 
        { id: 11, r: 11, color: 'red', position: 'left' },
        { id: 12, r: 12, color: 'green', position: 'right' }, 
        { id: 13, r: 13, color: 'green', position: 'right' }, 
        { id: 14, r: 14, color: 'green', position: 'right' },
        { id: 15, r: 15, color: 'green', position: 'right' }, 
        { id: 16, r: 16, color: 'green', position: 'right' },
        { id: 17, r: 17, color: 'green', position: 'right' }, 
        { id: 18, r: 18, color: 'green', position: 'right' },
        { id: 19, r: 19, color: 'green', position: 'right' }, 
        { id: 20, r: 20, color: 'green', position: 'right' },
        { id: 21, r: 21, color: 'green', position: 'right' }, 
        { id: 22, r: 22, color: 'green', position: 'right' },
        { id: 1, r: 1, color: 'red', position: 'left' }, 
        { id: 2, r: 2, color: 'red', position: 'left' }, 
        { id: 3, r: 3, color: 'red', position: 'left' },
        { id: 4, r: 4, color: 'red', position: 'left' }, 
        { id: 5, r: 5, color: 'red', position: 'left' },
        { id: 6, r: 6, color: 'red', position: 'left' }, 
        { id: 7, r: 7, color: 'red', position: 'left' },
        { id: 8, r: 8, color: 'red', position: 'left' }, 
        { id: 9, r: 9, color: 'red', position: 'left' },
        { id: 10, r: 10, color: 'red', position: 'left' }, 
        { id: 11, r: 11, color: 'red', position: 'left' },
        { id: 12, r: 12, color: 'green', position: 'right' }, 
        { id: 13, r: 13, color: 'green', position: 'right' }, 
        { id: 14, r: 14, color: 'green', position: 'right' },
        { id: 15, r: 15, color: 'green', position: 'right' }, 
        { id: 16, r: 16, color: 'green', position: 'right' },
        { id: 17, r: 17, color: 'green', position: 'right' }, 
        { id: 18, r: 18, color: 'green', position: 'right' },
        { id: 19, r: 19, color: 'green', position: 'right' }, 
        { id: 20, r: 20, color: 'green', position: 'right' },
        { id: 21, r: 21, color: 'green', position: 'right' }, 
        { id: 22, r: 22, color: 'green', position: 'right' },
        { id: 1, r: 1, color: 'red', position: 'left' }, 
        { id: 2, r: 2, color: 'red', position: 'left' }, 
        { id: 3, r: 3, color: 'red', position: 'left' },
        { id: 4, r: 4, color: 'red', position: 'left' }, 
        { id: 5, r: 5, color: 'red', position: 'left' },
        { id: 6, r: 6, color: 'red', position: 'left' }, 
        { id: 7, r: 7, color: 'red', position: 'left' },
        { id: 8, r: 8, color: 'red', position: 'left' }, 
        { id: 9, r: 9, color: 'red', position: 'left' },
        { id: 10, r: 10, color: 'red', position: 'left' }, 
        { id: 11, r: 11, color: 'red', position: 'left' },
        { id: 12, r: 12, color: 'green', position: 'right' }, 
        { id: 13, r: 13, color: 'green', position: 'right' }, 
        { id: 14, r: 14, color: 'green', position: 'right' },
        { id: 15, r: 15, color: 'green', position: 'right' }, 
        { id: 16, r: 16, color: 'green', position: 'right' },
        { id: 17, r: 17, color: 'green', position: 'right' }, 
        { id: 18, r: 18, color: 'green', position: 'right' },
        { id: 19, r: 19, color: 'green', position: 'right' }, 
        { id: 20, r: 20, color: 'green', position: 'right' },
        { id: 21, r: 21, color: 'green', position: 'right' }, 
        { id: 22, r: 22, color: 'green', position: 'right' },
        { id: 1, r: 1, color: 'red', position: 'left' }, 
        { id: 2, r: 2, color: 'red', position: 'left' }, 
        { id: 3, r: 3, color: 'red', position: 'left' },
        { id: 4, r: 4, color: 'red', position: 'left' }, 
        { id: 5, r: 5, color: 'red', position: 'left' },
        { id: 6, r: 6, color: 'red', position: 'left' }, 
        { id: 7, r: 7, color: 'red', position: 'left' },
        { id: 8, r: 8, color: 'red', position: 'left' }, 
        { id: 9, r: 9, color: 'red', position: 'left' },
        { id: 10, r: 10, color: 'red', position: 'left' }, 
        { id: 11, r: 11, color: 'red', position: 'left' },
        { id: 12, r: 12, color: 'green', position: 'right' }, 
        { id: 13, r: 13, color: 'green', position: 'right' }, 
        { id: 14, r: 14, color: 'green', position: 'right' },
        { id: 15, r: 15, color: 'green', position: 'right' }, 
        { id: 16, r: 16, color: 'green', position: 'right' },
        { id: 17, r: 17, color: 'green', position: 'right' }, 
        { id: 18, r: 18, color: 'green', position: 'right' },
        { id: 19, r: 19, color: 'green', position: 'right' }, 
        { id: 20, r: 20, color: 'green', position: 'right' },
        { id: 21, r: 21, color: 'green', position: 'right' }, 
        { id: 22, r: 22, color: 'green', position: 'right' },
        { id: 1, r: 1, color: 'red', position: 'left' }, 
        { id: 2, r: 2, color: 'red', position: 'left' }, 
        { id: 3, r: 3, color: 'red', position: 'left' },
        { id: 4, r: 4, color: 'red', position: 'left' }, 
        { id: 5, r: 5, color: 'red', position: 'left' },
        { id: 6, r: 6, color: 'red', position: 'left' }, 
        { id: 7, r: 7, color: 'red', position: 'left' },
        { id: 8, r: 8, color: 'red', position: 'left' }, 
        { id: 9, r: 9, color: 'red', position: 'left' },
        { id: 10, r: 10, color: 'red', position: 'left' }, 
        { id: 11, r: 11, color: 'red', position: 'left' },
        { id: 12, r: 12, color: 'green', position: 'right' }, 
        { id: 13, r: 13, color: 'green', position: 'right' }, 
        { id: 14, r: 14, color: 'green', position: 'right' },
        { id: 15, r: 15, color: 'green', position: 'right' }, 
        { id: 16, r: 16, color: 'green', position: 'right' },
        { id: 17, r: 17, color: 'green', position: 'right' }, 
        { id: 18, r: 18, color: 'green', position: 'right' },
        { id: 19, r: 19, color: 'green', position: 'right' }, 
        { id: 20, r: 20, color: 'green', position: 'right' },
        { id: 21, r: 21, color: 'green', position: 'right' }, 
        { id: 22, r: 22, color: 'green', position: 'right' }
    ];

    var svg = d3.select("#chart")
        .append("svg")
        .attr("height", height)
        .attr("width", width)
        .append('g')
        .attr('transform', 'translate(0,0)');

    const forceXSeparate = d3.forceX(function (d) {
        if (d.position === 'left') {
            return 200
        } else {
            return 600
        }
    })
        .strength(0.05)

    const forceXCombine = d3.forceX(width / 2).strength(function (d) {
        if (d.position === 'left') {
            return 0.08
        } else {
            return 0.05
        }
    })

    const forceCollide = d3.forceCollide(radius)

    const simulation = d3.forceSimulation()
        .force('x', forceXSeparate)
        .force('y', d3.forceY(height / 2).strength(function (d) {
            if (d.position === 'left') {
                return 0.08
            } else {
                return 0.05
            }
        }))
        .force('collide', forceCollide)


    d3.queue()
        .await(ready)

    function ready() {
        var circles = svg.selectAll(".artist")
            .data(datapoints)
            .enter()
            .append('circle')
            // .attr("class", function(d){
            //     if (d.position === 'left') {
            //         return 'left-circle'
            //     } else {
            //         return 'right-circle'
            //     }
            // })
            .attr("r", radius)
            .attr("fill", function (d) {
                return d.color
            })

        d3.select("#split").on('click', function (d) {
            simulation.force('x', forceXSeparate)
            .force('charge', d3.forceManyBody().strength(0))
            .alphaTarget(0.5)
            .restart()
        })

        d3.select("#combine").on('click', function (d) {
            simulation.force('x', forceXCombine)
            .force('charge', d3.forceManyBody().strength(-15))
            .alphaTarget(1)
            .restart()
        })

        simulation.nodes(datapoints)
            .on('tick', ticked)

        function ticked() {
            circles
                .attr("cx", function (d) {
                    console.log('d-->x', d)
                    return d.x
                })
                .attr("cy", function (d) {
                    return d.y
                })
        }

    }
})();