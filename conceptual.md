### Conceptual Exercise

Answer the following questions below:

**Question 1:** What is a JWT?

**ANSWER:** A JWT is known as JSON Web Token designed to be compact, efficient and a URL-safe means of representing claims to be transferred between two parties. JWTs are important for embedding into network protocols and are self-contained with all the information necessary to verify their authenticity, including a digital signature. A JWT is composed of three parts, with each part encoded with the Base64Url encoding scheme.The parts are; the header, the payload, and the signature. 
The header is encoded in JSON format and then Base64Url encoded and consists of two properties, "typ" (which indicates the type of token) and "alg" (which defines the algorithm used for signing the token). 
The payload contains the claims that are asserted by the JWT and can be encoded in JSON format and then Base64Url encoded. These claims can be either registered, public, and private claims. The registered claims have a predefined meaning, while public and private claims are user-defined. The payload is also encoded in JSON format and then Base64Url encoded.
The signature is used to verify that the sender of the JWT is who they say they are and to ensure that the message hasn't been tampered with. To create the signature, you concatenate the encoded header, the encoded payload, and the algorithm specified in the header,to form the message. Then compute the cryptographic signature of the message using the algorithm and the secret. 


**Question 2:** What is the signature portion of the JWT?  What does it do?

**ANSWER:** The signature portion of a JWT is the third part of the token, after the header and the payload and it is used to verify the integrity of the token and to ensure that it has not been tampered with. The signature is created by hashing the header and the payload with a secret key, and then signing the hash with a digital signature algorithm.
The signature portion of the JWT is important because it ensures that the token has not been tampered with. Hence, if the token is tampered with, the signature will no longer be valid and the token will be rejected. which helps to protect the integrity of the data in the token as well as ensure that it can be trusted. 


**Question 3:** If a JWT is intercepted, can the attacker see what's inside the payload?

**ANSWER:** Yes, they can see what's inside the payload, if an attacker intercepts a JWT. The payload is the second part of a JWT, which contains the claims about the user, such as the user's name, email address, and other information. If an attacker has access to the payload, they can use this information to impersonate the user or to access the user's data. One way to protect the payload of a JWT from being intercepted, is to use HTTPS to encrypt the JWT, which will prevent the attacker from being able to see the payload in transit. Another way is to use a strong secret key to sign the JWT, to make it difficult for the attacker to forge a valid JWT.


**Question 4:** How can you implement authentication with a JWT?  Describe how it works at a high level.

**ANSWER:** There are multiple ways to implement JWT authentication depending on the application, but the basic steps to implement authentication with a JWT are; 
1. The user logs in to the application and provides their credentials.
2. The application verifies the user's credentials and, if they are valid, generates a JWT.
3. The JWT is sent to the user's browser, where it is stored in local storage.
4. When the user makes a request to the application, the JWT is included in the request header.
5. The application verifies the JWT and, if it is valid, allows the user to access the requested resource.


**Question 5:** Compare and contrast unit, integration and end-to-end tests.

**ANSWER:** Unit tests are designed to test individual units of code, such as functions or methods and they are written by developers and run as part of the development process. 
Integration tests are designed to test how different units of code work together and they are written by testers and run as part of the testing process. 
End-to-end tests are designed to test the entire system from start to finish and they are written by testers and run as part of the deployment process. 

Unit tests are typically more faster to run and also run frequently than integration tests or end-to-end tests. while, Integration tests are slower to run and run less frequently than unit tests or end-to-end tests. As End-to-end tests are typically run the least frequently and the slowest to run. Unit tests are less expensive and easier to write than integration tests or end-to-end tests, but Integration tests are more expensive and harder to write than unit tests or end-to-end tests, and End-to-end tests are typically the most expensive and hardest to write. Furthermore, Unit tests are more reliable and more repeatable than integration tests or end-to-end tests, but Integration tests are less repeatable and less reliable than unit tests or end-to-end tests, and End-to-end tests are typically the least reliable and the least repeatable. Unit tests are more portable, more maintainable and easier to debug than integration tests or end-to-end tests, but Integration tests are less portable and harder to debug than unit tests or end-to-end tests, and End-to-end tests are typically the least portable and the hardest to debug.


**Question 6:** What is a mock? What are some things you would mock?

**ANSWER:** A mock is an object that mimics the behavior of a real object, and used in the process of software unit testing. Its primary goal is to ensure that a specific part of your code is working as expected. However, the choice of what to mock in a given test scenario will depend on the specific requirements of your test and the complexity of the code being tested. Some things you would mock are:

1. Mocking functions or methods is common in languages like JavaScript and Python. By replacing the original function with a mock, you can control the output and verify that your code is correctly using the function.

2. Mocking dependencies is another common use case. If your code relies on a database or an external API, mocking these dependencies can make your tests faster and more reliable.

3. Mocking classes in languages like Java and C#, is also possible and can be useful if you want to isolate a class from its dependencies during testing.

4. Libraries:  mocking the library can be helpful in testing the parts of your code that interact with the library, If you are using a third-party library in your code. 
 

**Question 7:** What is continuous integration?

**ANSWER:** Continuous Integration (CI) is a development practice that requires developers to integrate their work frequently into a shared repository or mainline. Each integration is verified by an automated build and automated tests. CI systems can help to detect and fix integration issues quickly. By integrating early and often, it also helps to prevent large and complex integration tasks from arising later in the development process. CI systems are essential for maintaining a stable and functional codebase, particularly in projects with multiple developers collaborating on the same codebase. They can also help to ensure that the application is always in a releasable state, which is particularly important in Agile development methodologies.Furthermore, while CI focuses on the technical aspects of integrating code, it is just one aspect of software development. A comprehensive software development process should also include practices such as code reviews, test-driven development, and regular meetings with the development team.

A popular CI tool is Jenkins, which can be configured to run automated tests and build processes whenever code is committed to a repository. Jenkins supports various programming languages and can be extended through plugins.
Another popular CI tool is Travis CI, which is often used with open-source projects hosted on GitHub. Travis CI can automatically detect your project's language and test framework and run tests for each code change.


**Question 8:** What is an environment variable and what are they used for?

**ANSWER:** An environment variable is a dynamic-named value that can affect the behavior of running processes on a computer. Environment variables are used by operating systems and programs to access and modify system-wide configuration settings. They can be particularly useful in managing sensitive data, such as API keys or database passwords, that should not be hard-coded into the application source code. By storing this data in environment variables, one can prevent unauthorized access and limit the impact of security breaches. Some uses of enviroment variables are; 

1. User-specific settings: Environment variables can be used to store user-specific settings such as preferred text editor, terminal color scheme, etc. For example, in a Unix-based system, the HOME environment variable contains the path to a user's home directory.

2. Program-specific settings: Environment variables can be used to store program-specific settings, such as API keys, configuration files, or other data that should be accessible to a program but not to other users. For example, the PATH environment variable is used by operating systems to locate executable programs.

3. System-wide settings: Environment variables can also be used to store system-wide settings that affect the behavior of the operating system and all running programs. For example, the JAVA_HOME environment variable is used by Java applications to locate the Java Development Kit installation directory.

4. Environment variables can be accessed and modified using operating system commands or APIs. In a Unix-based system, you can use the export command to create or modify an environment variable, and the env command to list all existing environment variables.



**Question 9:** What is TDD? What are some benefits and drawbacks?

**ANSWER:** Test-Driven Development (TDD) is a powerful software development methodology that help improve code quality, enhance collaboration, and minimize debugging time, as developers write tests before they write the code they plan to satisfy those tests. TDD can be used to implement unit tests, integration tests, or both.
Some benefits of TDD are;

1. Improved Code Quality: Writing tests first helps ensure that the code being written is correct and meets the specified requirements.

2. Faster Feedback Loop: By using TDD, developers can quickly identify and correct issues as they arise, rather than encountering them all at once after writing the entire application.

3. Better Collaboration: TDD promotes clear and concise code, making it easier for multiple developers to work on the same project without conflicts or confusion.

4. Reduced Debugging Time: Writing tests before the code ensures that any bugs that are introduced will be caught early, minimizing the amount of time spent debugging.

Some Drawbacks of TDD are;

1. Time Consumption: Writing tests in addition to code can be time-consuming, particularly for smaller projects or for developers who are not accustomed to the TDD workflow.

2. Increased Complexity: The structure of the application may become more complex, as additional classes and methods are created to facilitate testing.

3. Potential for Overemphasis on Testing: While TDD can help improve code quality and overall application reliability, it is essential to strike a balance between testing and implementing new features or functionality.


**Question 10:** What is the value of using JSONSchema for validation?

**ANSWER:** 
Using JSONSchema provides a standardized way to describe the structure of a JSON document and its validation. It enables one to create reusable, portable schemas for their data models and simplifies their API by allowing developers to automatically generate code from the JSONSchema. JSONSchema also offers better performance than using other data validation methods, as it performs the validation at parse time, not during runtime. However, some drawbacks to using JSONSchema for validation is that it may require additional time and effort to understand and use correctly, especially for developers who are not familiar with it.



**Question 11:** What are some ways to decide which code to test?
**ANSWER:** when deciding which code to test, it is essential to carefully consider factors such as importance, test coverage, test difficulty, frequency of changes, feature integration, and cost-benefit analysis and by prioritizing tests based on these factors, developers can ensure that their systems remain stable, secure, and functional. Some ways to determine which code to test are;

1. Importance: Determine which code has a significant impact on the overall system functionality. High-risk, high-priority, or complex sections of the code should be given priority. It is crucial to evaluate the relevance of the code in question and prioritize testing areas that are still integral to the system's functionality.

2. Test Coverage: Consider the test coverage provided by existing tests. If certain areas of the code are already covered by tests, it may be less important to add additional tests for those areas.

3. Test Difficulty: Identify sections of the code that are more difficult to test due to dependencies, side effects, or other challenges. Prioritize testing these areas to ensure that all critical code paths are thoroughly covered.

4. Frequency of Changes: Assess the frequency with which certain sections of the code are changed. It may be more valuable to prioritize testing areas of the code that are frequently modified, as they are more likely to introduce new bugs or regressions.

5. Feature Integration: When multiple features or components are integrated into a single system, prioritize testing the areas where these features or components interface with each other. This will help ensure that the overall system functionality remains stable and consistent.

6. Cost-Benefit Analysis: Consider the resources and time required to develop and maintain the tests, as well as the potential benefits of identifying and resolving bugs. A test may be deemed less valuable if it requires a significant investment of resources or if it targets an area of the code that is not particularly high-risk or prone to bugs.


**Question 12:** What does `RETURNING` do in SQL? When would you use it?

**ANSWER:** In SQL, "RETURNING" is a powerful feature or clause in SQL used in conjunction with the INSERT, UPDATE, or DELETE statement and allows one to retrieve the new state of rows after they have been affected by an operation. And it is useful when you need to know the value of an auto-incrementing column after an insert or when you want to retrieve the values of rows after they have been updated and verify that an operation has completed successfully. 



**Question 13:** What are some differences between Web Sockets and HTTP?

**ANSWER:** WebSockets provide a more efficient and flexible alternative to HTTP for real-time data exchange and WebSockets do not have a fallback mechanism and can be more complex to implement than HTTP. Some differences are; 

1. Data Exchange: WebSockets use a bi-directional communication protocol over a single, long-lived connection. HTTP is a request-response protocol where each request and response is independent.

2. Persistence: WebSockets use a continuous connection, enabling real-time communication between the client and server. HTTP connections, on the other hand, are stateless, and a new connection is created for each request and response.

3. Communication Pattern: HTTP follows a request-response pattern, while WebSockets support full-duplex communication, enabling the server to push data to the client without a client request.

4. Efficiency: HTTP operations can be expensive in terms of network overhead. Each request requires a new connection and the full headers each time. WebSockets, on the other hand, maintain a single, persistent connection for all data exchange, reducing overhead.

5. Fallback Mechanism: If the server doesn't support WebSockets, the client can fall back to traditional HTTP requests. However, WebSockets don't have a fallback mechanism.

6. Encoding: WebSockets can use multiple types of data encoding, including text (UTF-8), binary, and the efficient BinaryMessage format. HTTP can use any format, but text is most commonly used.

7. Port: WebSockets typically use port 80 for standard connections and port 443 for secure connections (similar to HTTP).



**Question 14:** Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  
**ANSWER:** Flask is a popular Python framework and Express is also a popular Node.js web framework. Each has its own advantages and drawbacks. My prefrence largely depends on the specific project requirements, but I prefer Flask because of its lightweight nature and simplicity. Moreover, looking into the future, the more full-featured, robust and versatile framework may be a better choice, which is Express as it has a variety of built-in features, while Flask requires additional Flask extensions to achieve the desired functionality. 
However, both Flask and Express have their own strengths and weaknesses, but my choice still remains using Flask and i really dont mind the necessary additional Flask extensions needed to complete the specific project requirements.
