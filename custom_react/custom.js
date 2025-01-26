// this is how react works in background 
// i have created my own library 

const reactElement = {
    type: "a",
    props: {
        "href": "https://www.example.com",
        "target": "_blank",
    },
    children: "this is a link"
};

/*function customDisplay(reactElement, container) {
    const reactdom = document.createElement(reactElement.type); 
    reactdom.innerHTML = reactElement.children;
    reactdom.setAttribute("href", reactElement.props.href);
    reactdom.setAttribute("target", reactElement.props.target);

    container.appendChild(reactdom);
}*/

// more efficient way

function customDisplay(reactElement,container){
    const reactdom = document.createElement(reactElement.type);
    reactdom.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        reactdom.setAttribute(prop, reactElement.props[prop]);  
    }
    container.appendChild(reactdom);
}

const mainContainer = document.querySelector("#root");

customDisplay(reactElement, mainContainer);
