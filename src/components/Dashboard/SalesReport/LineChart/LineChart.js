import React, { useEffect } from 'react';
import * as d3 from 'd3';

const LineChart = props => {

    useEffect(() => {
        renderAxis();
    });

    const styles = {
        width: '350',
        height: '200',
        padding: '24'
    };

    //transform data
    const data = props.salesData.map(element => {
        const product = props.productName;
        return ({
            salesTime: element.Time, 
            // iPhone: +(element.iPhone)
            value: +(element[product]),
        })
    });

    // Returns a function that "scales" X coordinates from the data to fit the chart
    const x = d3.scaleBand()
        .domain(d3.range(data.length))
        .range([styles.padding, styles.width - styles.padding * 2]);

    const yMax = d3.max(data, d => d.value);

    // Returns a function that "scales" Y coordinates from the data to fit the chart
    const y = d3.scaleLinear()
        .domain([0, yMax])
        .range([styles.height - styles.padding, styles.padding]);

    const line = d3.line()
        .x((d, i) => x(i))
        .y(d => y(d.value))
        .curve(d3.curveCatmullRom.alpha(0.5));

    const renderAxis = () => {

        const xAxis = g => g
            .attr("transform", `translate(0,${styles.height - styles.padding})`)
            .call(d3.axisBottom(x).tickFormat(i => (data[i].salesTime.includes('Q1') ? data[i].salesTime : ''))
            .tickSizeOuter(0))
            .call(g => g.append("text")
                .attr("x", styles.width - styles.padding)
                .attr("y", styles.padding- 5)
                .attr("fill", "#bdbdbd")
                .attr("text-anchor", "end")
                .text("Quarter"));

        const yAxis = g => g
            .attr("transform", `translate(${styles.padding},0)`)
            .call(d3.axisLeft(y).tickSizeOuter(0))
            .call(g => g.append("text")
                .attr("x", 5)
                .attr("y", 20)
                .attr("fill", "#bdbdbd")
                .attr("text-anchor", "start")
                .text('Sales / M'))
            .call(g => g.selectAll("line")
                .attr("stroke", "transparent"));

        d3.select(`#${props.productName}`)
            .append('g')
            .call(xAxis);

        d3.select(`#${props.productName}`)
            .append('g')
            .call(yAxis);
    }

    return (
        <div id='container'> 
            <svg width={styles.width} height={styles.height} style={{fill: '#000', fillOpacity: '0.3'}} id={props.productName}>
                <path d={line(data)} style={{stroke: '#3f51b5', strokeWidth: '2px', fill: 'none'}}/>
            </svg>
        </div>
    );

}

export default LineChart;