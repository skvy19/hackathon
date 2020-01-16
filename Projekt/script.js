let index;
const div = document.getElementsByClassName("container")[0];

function createNewElement(node, attributes) {
    const newElement = document.createElement(node);
    for(let key in attributes){
        newElement.setAttribute(key, attributes[key]);
    }
    return newElement;
}

function display(index){

    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
     }

    Promise.all([
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=FLURSQpkNPoTnp0YkmE3eQbb2fcUXW6pXl7Yt4MJ&sol=2")
            .then(data => data.json()),
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?api_key=FLURSQpkNPoTnp0YkmE3eQbb2fcUXW6pXl7Yt4MJ&sol=2")
            .then(data => data.json()),
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?api_key=FLURSQpkNPoTnp0YkmE3eQbb2fcUXW6pXl7Yt4MJ&sol=2")
            .then(data => data.json())
        ]).then(allResponses => {
                allResponses[index].photos.map(item => {

                    console.log(item.rover.name)

                    let image = createNewElement('img', {src: item.img_src, class: "img-fluid img-thumbnail"})
                    div.appendChild(image)
                })

        })

}