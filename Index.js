const root = ReactDOM.createRoot(document.getElementById("root"));
const header = React.createElement("h1",{id:"Heading"},"Hello from React");
root.render(header);

/*
<div id="parent">
    <div id="child">
        <h1>Its h1 tag</h1>
    </div>
</div>
*/


const divRoot = ReactDOM.createRoot(document.getElementById("divs"));
const h1tag = React.createElement("div",{id:"parent"},
    React.createElement("div", {id:"child1"},
        [React.createElement("h1",{}, "Its h1 tag"),
        React.createElement("h1",{}, "Its h2 tag")]),
        React.createElement("div", {id:"child2"},
        [React.createElement("h1",{}, "Its h1 tag"),
        React.createElement("h1",{}, "Its h2 tag")]));
divRoot.render(h1tag);