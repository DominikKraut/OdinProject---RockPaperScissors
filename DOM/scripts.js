const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.classList.add("paragraph");
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";

container.appendChild(paragraph);

const heading3 = document.createElement("h3");
heading3.classList.add("h3");
heading3.textContent = "I'm a blue h3!";
heading3.style.color = "blue";

container.appendChild(heading3);

const div2 = document.createElement("div");
div2.style.backgroundColor = "pink";
div2.style.border = "2px solid black";

content.appendChild(div2);

const h1 = createElement("h1");
h1.textContent = "I'm in div!";
div2.appendChild(h1);

const paragraphDivider = createElement("p");
paragraphDivider.textContent = "ME TOO!";
div2.appendChild(paragraphDivider);
