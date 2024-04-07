import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import "./Results.css";
import logo_orange_white_fill from "../images/Opinion8_Logo-OrangeOutline-WhiteFill_NS.svg";

// Define questions array
const questions = [
    {
        text: "Rishi Sunak wants to make maths lessons mandatory until age 18. Do you think this is a good idea?",
        options: ["Not at all", "Not particularly", "I don't feel strongly either way", "Sort of", "Absolutely"],
        votes: [28, 21, 17, 8, 26]
    },
    {
        text: "This would be part of a new qualification called the “Advanced British Standard”, which Sunak wants to replace A-levels with. As part of this, students would study more than three subjects for increased breadth. Would you like to do this instead of doing three A-levels?",
        options: ["Not at all", "Not particularly", "I don’t feel strongly either way", "Sort of", "Absolutely"],
        votes: [15, 24, 19, 28, 14]
    },
    {
        text: "Sticking with the Conservative party theme, Tory MP William Wragg has apologised and admitted to having leaked several MPs numbers to a man on Grindr, though says he was “manipulated” after having already sent compromising images to the man in question. Do you think that William Wragg should resign?",
        options: ["No", "Yes"],
        votes: [45, 55]
    },
    {
        text: "If a general election was called tomorrow, which party would you vote for?",
        options: ["Conservatives", "Labour", "Liberal Democrats", "Scottish National Party", "Plaid Cymru", "Green", "An independent politician", "I wouldn’t vote"],
        votes: [25, 20, 10, 5, 3, 7, 4, 26]
    },
    {
        text: "Climate activist Greta Thunberg has been arrested by Dutch police at a protest in The Hague, where protesters had planned to block The Hague's busy A12 highway for what Extinction Rebellion (XR) organisers say was the 37th time. The road has been subject to regular blockades since 2022. Do you support Greta Thunberg’s campaign method?",
        options: ["Not at all", "Not particularly", "I don’t feel strongly either way", "Sort of", "Absolutely"],
        votes: [12, 18, 25, 30, 15]
    },
    {
        text: "Following on from that - how much do you agree with this statement? “Climate change is a crisis that we must prioritize tackling immediately.”",
        options: ["Not at all", "Not particularly", "I don’t feel strongly either way", "Sort of", "Absolutely"],
        votes: [20, 18, 17, 25, 20]
    },
    {
        text: "These are the top 5 songs in the UK charts at the moment. Which is your favorite?",
        options: ["Texas Hold ‘Em by Beyonce", "Beautiful Things by Benson Boone", "Lose Control by Teddy Swims", "Too Sweet by Hozier", "We can’t be friends by Ariana Grande", "I haven't heard them", "I dislike all of them"],
        votes: [10, 15, 20, 25, 10, 15, 5]
    },
    {
        text: "Saving the most important ‘til last! Thinking about scones that come with jam and clotted cream, in which order do you think they should be added to the scone?",
        options: ["Jam first, with cream on top", "Cream first, with jam on top", "I have no preference…"],
        votes: [40, 35, 25]
    }
];

function Results() {
    const chartRefs = useRef([]);
    const chartInstances = useRef([]);
    const [viewMode, setViewMode] = useState('bar'); // State variable to track the current view mode

    useEffect(() => {
        // Destroy existing chart instances
        chartInstances.current.forEach(chart => {
            chart.destroy();
        });
        chartInstances.current = [];

        Chart.defaults.font.family = "Outfit";
        // Create new chart instances
        questions.forEach((question, index) => {
            const chartRef = chartRefs.current[index];
            const data = {
                labels: question.options,
                datasets: [{
                    label: '%',
                    data: question.votes,
                    backgroundColor: 'rgba(255, 70, 56, 1)',
                    backgroundColor: viewMode === 'pie' ? [
                        'rgba(255, 70, 56, 1)',
                        'rgba(39, 39, 230, 1)',
                        'rgba(255, 218, 0, 1)',
                        'rgba(255, 186, 196, 1)',
                        'rgba(22, 171, 89, 1)',
                    ] : 'rgba(255, 70, 56, 1)',
                    borderWidth: 1,
                }],
            };

            const options = {
                indexAxis: 'y', // Specify the index axis as 'y' for vertical bars
                scales: {
                    x: {
                        display: viewMode === 'pie' ? false : true, // Hide x-axis for pie chart
                        beginAtZero: true,
                        ticks: {
                            callback: function(value, index, values) {
                              return value + '%'; // Append '%' to each tick value
                            }
                        }
                    },
                    y: {
                        display: viewMode === 'pie' ? false : true, // Hide x-axis for pie chart
                        beginAtZero: true,
                        max: 100
                    }
                },
                plugins: {
                    legend: {
                        display: false // Hide the legend
                    },
                    tooltip: {
                        enabled: true
                    }
                },
                layout: {
                    padding: {
                        top: 20 // Add padding at the top to accommodate text
                    }
                },
            };

            const myChart = new Chart(chartRef, {
                type: viewMode, // Use the current view mode as the chart type
                data: data,
                options: options,
            });

            chartInstances.current.push(myChart);
        });
    }, [viewMode]); // Update chart when view mode changes

    // Function to toggle between bar and pie chart views
    const toggleViewMode = () => {
        setViewMode(prevMode => prevMode === 'bar' ? 'pie' : 'bar');
    };

    return (
        <div className="results-body">
            <div className="results-header">
                <img src={logo_orange_white_fill} alt="Opinion8" className="logo results-logo" />
                <h1>Results Lab</h1>
                <p>This insights tool provides the facility for you to explore the data from all recent questions posed by the Opinion8 app, to its audience of young people primarily aged 11-19.</p>
            </div>
            <h4 className="data-date">Showing data for: Sunday 7th April 2024 <br /> (20,454 total responses)</h4>
            {/* Toggle button to switch between bar and pie chart views */}
            <button onClick={toggleViewMode} className="btn_orange_white_text toggle-button">Toggle View</button>
            {/* Canvas elements for charts */}
            {questions.map((question, index) => (
                <div key={index} className="data-container">
                    <h5>Question {index+1}</h5>
                    <p>{question.text}</p>
                    <div className="graph-container">
                        <canvas ref={(ref) => chartRefs.current[index] = ref} className="canvas"></canvas>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Results;
