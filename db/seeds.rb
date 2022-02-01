# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "***Users***"
users = User.create(
  [
    { email: "joe@joedietrich.net", name: "Joe", password: "123" },
    { email: "john@example.com", name: "John", password: "123" }
  ]
)

puts "***Statuses***"
statuses = Status.create(
  [
    { name: "Must" },
    { name: "Should" },
    { name: "Can" }
  ]
)

puts "***Tasks***"
tasks = Task.create(
  [
    { description: "Fix the house", status: statuses.first, user: users.first },
    { description: "Call the realtor", status: statuses.second, user: users.first },
    { description: "Find a place", status: statuses.third, user: users.first },
    { description: "Fix the apartment", status: statuses.first, user: users.second },
    { description: "Call the real estate agent", status: statuses.second, user: users.second },
    { description: "Find a dwelling", status: statuses.third, user: users.second }
  ]
)

