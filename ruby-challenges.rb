# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN
 
# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.
 
beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
 
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']
 
# // PSEUDOCODE:
# // Create a method called 'particular_letter', def/end
# // pass in 'array' and 'letter' into the methods parameters in order to access the given variables
# // will iterate through each value in the array using the method .select, this method is similar to the filter method in Javascript. The select method's job is to filter through an array and return a subset of the original. (Here is the link that refreshed my memory on the select method: https://www.rubyguides.com/2019/04/ruby-select-method/)
# // Then I will include a block method inside in order to add more logic.
# // Every block needs a do/end, and pass 'string' into the pipe(parameters)
# // create a conditional statement(?), if/end
# // if the array value .include? the particular letter then it will return the array values with that letter
# // then it will return the string into the new array
# // (else) the array value does not hold the particular letter then it will return nothing to the array. After doing some research I found that when using a conditional statement if the first statement is true and we do not want anything returned if it is false then an else statement is not needed. (Here is the link I used: https://www.codecademy.com/forum_questions/526868e5548c352551000f60)
# // Then do a function call with the variables given.
 
def particular_letter(array, letter)
   array.select do |string|
      if string.include?(letter)
       string
      end
  end
end
 
p particular_letter(beverages_array, letter_o)
   # output: ["coffee", "soda water"]
p particular_letter(beverages_array, letter_t)
   # output: ["tea", "water", "soda water"]
 
# p particular_letter(beverages_array, 'm')
   # output: []
# p particular_letter(beverages_array, 'w')
   # output: ["water", "soda water"]
 
# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'
 
us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington']
 
# // PSEUDOCODE
# // Create a method called 'no_nested', (def/end)
# // pass the argument 'hash' through the parameters to pass the given hash into the method
# .values access the values of a hash
# .flatten used on arrays to get rid of any nested arrays
# .sort will order the element in alphabetical order
# // .value, .flatten, .sort will be the methods needed to get to the desired outcome (Here is the link I used that I found information on .flatten the info is under the .select method: https://www.freecodecamp.org/news/common-array-methods-in-ruby/)
# // use .map or .each method to iterate through the hash at ever key:value pair
# // create a block (do/end) to take in 'key' and 'value' in its parameters
# // After many trial and errors I realized I was able to deliver the output with one line of methods chained together. Therefore I did not need a block or conditional statement, only a one liner method.
# // performed a method call with the hash given passing through it
 
def no_nested(hash)
   hash.values.flatten.sort
end
 
p no_nested(us_states)
# // output: ["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Rhode Island", "Washington"]
 
# def no_nested(hash)
#     hash.map do |key, value|
#         if key
#             value
#         end
#     end
# end
# output: [["Washington", "Oregon", "Idaho"], ["California", "Arizona", "Nevada"], ["Maine", "New Hampshire", "Rhode Island"]]
 
# * TESTING COMMANDS ON HASHES *
 
# p us_states[:northwest]
   # output: ["Washington", "Oregon", "Idaho"]
# p us_states[:southwest]
   # output: ["California", "Arizona", "Nevada"]
# p us_states[:notheast]
   # output: ["Maine", "New Hampshire", "Rhode Island"]
# p us_states
   # output: {:northwest=>["Washington", "Oregon", "Idaho"], :southwest=>["California", "Arizona", "Nevada"], :notheast=>["Maine", "New Hampshire", "Rhode Island"]}
 
# p us_states.keys
   # output: [:northwest, :southwest, :notheast]
 
# p us_states.values
   # output: [["Washington", "Oregon", "Idaho"], ["California", "Arizona", "Nevada"], ["Maine", "New Hampshire", "Rhode Island"]]
 
# p us_states.values.flatten
   # output: ["Washington", "Oregon", "Idaho", "California", "Arizona", "Nevada", "Maine", "New Hampshire", "Rhode Island"]
 
# p us_states.values.flatten.sort
   # output: ["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Rhode Island", "Washington"]
 
 
# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.
# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
# //PSEUDOCODE:
# // Create a class called Bike, class/end
# // Use 'initialize' to automatically run the first method and pass the instance variables (model, wheels=2, current_speed=0), by setting the default variables equal to a number that will later allow change to the variable and not hardcode it into the methods.
# // Create a method called bike_info that will use string interpolation (#{@instance_variable}) that will call on the instance variables and return the statement 'The Trek bike has 2 wheels and is going 0 mph.'
# // in order to call on this created method create instantiation of the class. This will return a unique instance of the class. I named the variable 'trek' and set it equal to the 'Class'.new('Model Name'). Once this is created, call on the method (bike_info) to print the desired statement.
 
 
class Bike
   def initialize(model, wheels=2, current_speed=0)
       @model = model
       @wheels = wheels
       @current_speed = current_speed
   end
   def set_model(model)
       @model = model
   end
   def get_model
       @model
   end
   def bike_info
       "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
   end
end
trek = Bike.new('Trek')
# p trek
#     #<Bike:0x000000012f14aa98 @model="Trek", @wheels=2, @current_speed=0>
p trek.bike_info
# output: "The Trek bike has 2 wheels and is going 0 mph."
 
# *FIRST STEPS OF CREATING A CLASS*
# class Bike
#     def set_model(model)
#         @model = model
#     end
#     def get_model
#         @model
#     end
 
# end
# p Bike.new
#     #<Bike:0x0000000155144fc8>
# sport = Bike.new
# # p sport
#     #<Bike:0x000000012194fa30>
# honda.set_up('Sport')
# # p sport.get_up
#     # "Sport"
# p sport
#     #<Bike:0x000000012c14aff0 @model="Sport">
 
# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.
 
# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
 
# PSEUDOCODE:
# // Create a new method called 'pedal_faster'
# // pass the variable 'mph' through the parameter
# // called on the instance variable that we want to update and increase the number by the variable (number) that will be prompted
# used this process during challenges but I also used this link to confirm the correct assignment operators (https://www.tutorialspoint.com/ruby/ruby_operators.htm)
# // Create a new method called 'brake'
# // pass the variable 'mph' through the parameter
# // called on the instance variable that we want to update and decrease the number by the variable(number) that will be prompted
# // create a new instantiation of the the class called my_bike
# // call on the new instantiation followed by the newly created method using dot notation. Because this is a dynamic method and not hardcoded I can use a variable for the number I want passed into my methods that will increase or decrease the bike's speed.
 
class Bike
   def initialize(model, wheels=2, current_speed=0)
       @model = model
       @wheels = wheels
       @current_speed = current_speed
   end
   def bike_info
       "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
   end
   def pedal_faster(mph)
       @current_speed += mph
   end
   def brake(mph)
       if @current_speed < mph
           0
       else
           @current_speed -= (mph)
       end
   end
   def get_current_speed
       @current_speed
   end
end
my_bike = Bike.new('SUPER COOL, SUPER FAST')
# # *TESTING TO MAKE TO SURE METHODS ARE WORKING*
my_bike
# # "The SUPER COOL, SUPER FAST bike has 2 wheels and is going 0 mph."
# my_bike.pedal_faster
# my_bike.pedal_faster
# p my_bike.get_info
# # "The SUPER COOL, SUPER FAST bike has 2 wheels and is going 2 mph."
# my_bike.brake
 
p my_bike.pedal_faster(10)
   # output: 10
p my_bike.pedal_faster(18)
   # output: 28
p my_bike.brake(5)
   # output: 23
p my_bike.brake(25)
   # output: 0
