/** @jsx React.DOM */
var React = require("react");
var PlanningView = require("./component/planning.js");

React.renderComponent(
  <PlanningView backlog_url="api/backlog.json" plan_url="api/plan.json" />,
  document.getElementById('content')
);
