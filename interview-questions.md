# ASSESSMENT 5: Interview Practice Questions
 
Answer the following questions.
 
First, without external resources. Challenge yourself to answer from memory.
 
Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.
 
1. What does calling super do in a class?
 
Your answer: A super lives inside a subclass, its job is to access the information that the superclass passes down. Calling super in the subclass activates the initialize method, this automatic runs the first method inside of the class and accesses the instance variables declared in the superclass.
 
Researched answer: Ruby uses the function super, it is a keyword to call on the superclass and invoke the original method with the shared instance variables. The super method lives inside of the subclass, while exercising inheritance. Inheritance performs the task of reusing code from the parent class without the action of fully rewriting what has already been written.
 
2. What is a gem?
 
Your answer: In Ruby, a gem is used in testing with Rspec to add dependencies to the file. A gem is snippets of code needed to be downloaded in order for the code to be accessed and run correctly as well as shared code more efficiently. For better understanding a gem is similar to in Javascript when yarn is run for testing.
 
Researched answer: Ruby gems are open source libraries that hold code. Using a gem allows a developer to use these 'plugins' of code within the gem in their own program to add features. Several popular gems that are run within Ruby are: Bundler, RSpec, Devise, JSON, Nokogiri. Each of these all have specific tasks that are aimed at functionality without writing code.
 
3. What is a relational database? Are there other kinds of databases?
 
Your answer: A relational database is tables made up of rows and columns, databases can have several tables that are linked through relationships/attributes with each other. I do believe there are different kinds of databases that I don't have much knowledge on. A relational database is the foundation of a functional database so I think there are others that are made up of the same basics but perform different jobs.
 
Researched answer: A relational database is a collection of tables made up of rows and columns, databases can have several tables that are linked through relationships/attributes with each other using primary keys. The other type of database is referred to as non-relational, their job is to store data. Unlike relational databases, non-relational databases do not use tables, rows, primary keys or foreign keys instead they use storage models optimized for specific requirements. There are five popular non-relational types of databases: document data store, column-oriented database, key-value store, document store, and graph database.
 
4. What are primary keys? Why are they important?
 
Your answer: Primary keys are unique id's each row in a database hold. These are important because their job is to identify the specific location of every entry of data. They are important not only to keep track of the database's information but when linking different databases together that have a relationship these are needed to be able to access each table.
 
Researched answer: A primary key holds unique values and identifies each row in a table, a table can only have one primary key inside. They are important because the primary keys create a relationship between tables in a relational database.
 
5. What are the HTTP verbs? What is each verb's corresponding CRUD action?
 
Your answer: The HTTP verbs are post, get, put, patch and delete; these directly correspond to the CRUD actions. Post is used to Create new resources, Get is used to Read/Retrieve resources, Put is used to Update and replace, Patch is mainly used to Modify which is similar to put and Delete is used to Delete an entire collection of data.
 
Researched answer: (Expanding on my answer) HTTP verbs are a set of request methods to perform an action for a specific source. They tell the server how to interact with the data. There are a total of 39 HTTP verbs that provide methods for interactions but post, get, put, patch and delete are the most commonly used.
 
## Looking Ahead: Terms for Next Week
 
Research and define the following terms to the best of your ability.
 
1. RESTful routes: REST stands for Representational State Transfer, RESTFUL routing is a convention used to create patterns of interaction through the CRUD operations (Create, Read, Update, Destroy) as a set of standards. This is a way to redirect incoming requests to controllers and actions to create structure across all the objects in an application.
 
2. Model validations: Model validation is used to ensure that only valid and meaningful data is saved into the database. Ruby on Rails uses this process before any and all data is saved, if any errors occur the content will not be saved to the database. There are two types of Model Validation process: In-sample validation and Out-of-sample validation. In-sample is used while testing data from the same dataset to build a model while out-of-sample is testing data from a new dataset that isn't used to build a model.
 
3. Params: Params are known as URL parameters, params is a method that allows the user to add more data to the program by passing values to the controller which is the logic held in an application. By completing this task it makes the program dynamic allowing the user to modify the view.
 
4. ERB: ERB stands for embedded Ruby, also referred to as Templated Ruby. A templating engine allows a mixture of HTML and Ruby so web pages can be generated using data from the database. ERB is Rails' default engine for rendering views.
 
5. API: API stands for Application Programming Interface, API's are used to merge new applications with existing software systems. It allows for two applications to communicate with each other. This increases the development speed compared to a normal Rails application.
