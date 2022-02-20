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
    { email: "joe@example.com", name: "Joe", password: "12345678" },
    { email: "john@example.com", name: "John", password: "12345678" }
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
    { description: "Fix the house", status: statuses.first, user: users.first, is_archived: false },
    { description: "Write the story", status: statuses.first, user: users.first, is_archived: false },
    { description: "Talk to the doctor", status: statuses.first, user: users.first, is_archived: false },
    { description: "Call the realtor", status: statuses.second, user: users.first, is_archived: false },
    { description: "Cook the chicken", status: statuses.second, user: users.first, is_archived: false },
    { description: "Grab groceries", status: statuses.second, user: users.first, is_archived: false },
    { description: "Inspect the assembly line", status: statuses.second, user: users.first, is_archived: false },
    { description: "Find a place", status: statuses.third, user: users.first, is_archived: false },
    { description: "Wash the car", status: statuses.third, user: users.first, is_archived: false },
    { description: "Wrap birthday present", status: statuses.third, user: users.first, is_archived: false },
    { description: "Fix the apartment", status: statuses.first, user: users.second, is_archived: false },
    { description: "Call the real estate agent", status: statuses.second, user: users.second, is_archived: false },
    { description: "Find a dwelling", status: statuses.third, user: users.second, is_archived: false }
  ]
)

