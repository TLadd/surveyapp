const React = require('react');
const BarChart = require("react-chartjs").Bar;

class ChoiceGraph extends React.Component {

  render() {

    const chartData = {
      labels: this.props.choices.map((choice, index) => 'Choice ' + (index + 1)),
      datasets: [
        {
          fillColor: "rgba(220,220,220,0.5)",
          strokeColor: "rgba(220,220,220,0.8)",
          highlightFill: "rgba(220,220,220,0.75)",
          highlightStroke: "rgba(220,220,220,1)",
          data: this.props.choices.map(choice => choice.numChosen)
        }
      ]
    };

    const chartOptions = {
      scaleBeginAtZero : true,
      scaleShowGridLines : true,
      scaleGridLineColor : "rgba(0,0,0,.05)",
      scaleGridLineWidth : 1,
      scaleShowHorizontalLines: true,
      scaleShowVerticalLines: true,
      barShowStroke : true,
      barStrokeWidth : 2,
      barValueSpacing : 5,
      barDatasetSpacing : 1,
      responsive: true,
      maintainAspectRatio: false
    };

    return (
      <div className="choice-graph">
        <BarChart data={chartData} options={chartOptions}/>
      </div>
    );
  }
}

ChoiceGraph.propTypes = {
  choices: React.PropTypes.array
}

module.exports = ChoiceGraph;
