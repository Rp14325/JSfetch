// Define an asynchronous function named "fetchData"
async function fetchData() {
    try {
        // Attempt to fetch data from the specified URL
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        // Parse the response data as JSON
        let data = await response.json();
        // Get a reference to the HTML element with the ID "content"
        const content = document.getElementById("content");

        // Iterate over each post in the data array
        data.forEach(post => {
            // Create a new <div> element for each post
            const postElement = document.createElement("div");
            // Add a CSS class "postElement" to the div
            postElement.classList.add("postElement");

            // Create an <h2> element for the post title
            const titleElement = document.createElement("h2");
            // Set the text content of the title element to the post title
            titleElement.textContent = post.title;
            // Add a CSS class "postTitle" to the title element
            titleElement.classList.add("postTitle");

            // Create a <p> element for the post body
            const bodyElement = document.createElement("p");
            // Set the text content of the body element to the post body
            bodyElement.textContent = post.body;
            // Add a CSS class "postBody" to the body element
            bodyElement.classList.add("postBody");

            // Append the title and body elements to the post element
            postElement.appendChild(titleElement);
            postElement.appendChild(bodyElement);

            // Append the post element to the "content" container
            content.appendChild(postElement);
        });
    } catch (error) {
        // If an error occurs during fetching or processing, log it to the console
        console.error("Error fetching data", error);
    }
}

