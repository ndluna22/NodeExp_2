### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
    JWTs are JSON web tokens. JWTs can store any arbitrary "payload"of info, which are “signed” using a secret key, so they can be validated later (similar to Flask’s session)
- What is the signature portion of the JWT?  What does it do?
    It is a version of header and payload signed with a secret key. It uses an algorithm specified in header and if anything changes in header or payload, then the signature changes as well. 
- If a JWT is intercepted, can the attacker see what's inside the payload? 
    Yes anyone can see the payload since it's not encrpypted. 
- How can you implement authentication with a JWT?  Describe how it works at a high level.
    By creating a login and secret key
- Compare and contrast unit, integration and end-to-end tests.
    Unit tests are for smaller codes, areas. Integration tests are for for testing groups for example routes. End to end tests is for testing the entire application.
- What is a mock? What are some things you would mock?
    A mock mimics real objects and are a form of testing how real objects might work. We can mock a network for example to see if  a function, promise will work.
- What is continuous integration?
    It's a practice where all steps are tested
- What is an environment variable and what are they used for?
    An environment variable is a variable value set outside of the file
- What is TDD? What are some benefits and drawbacks?
    Test Driven Development.It's a practice where you test before something is written. Benefit is having an idea of how the code should work. A drawback would be not seeing other possible options of results
- What is the value of using JSONSchema for validation?
    JSONSchema helps structure JSON data and checks if user input is valid.
- What are some ways to decide which code to test?
    Testing through Jest
- What does `RETURNING` do in SQL? When would you use it?
    RETURNING are similar to SELECT in SQL. We would use this to return a value that has been updated
- What are some differences between Web Sockets and HTTP?
    A websocket is faster than HTTP. Websocket can work form client to server and also server to client. HTTP works one way where client sends request and server sends response.
- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
    I prefer to use Flask since it's very straighforward. I am able to install packages and add them to an app.js file, as well as other files. With express, there needs to be a separate package file as opposed to a txt file, and also adding middleware. However, one thing I did like about Express, was the option of many error handlers.
