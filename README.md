# MUST / SHOULD / CAN

## WHAT IS THIS?

_Must / Should / Can_ is a task list, yes - but it's more than just that. _Must / Should / Can_ is an organizational tool that will help bring order to your chaotic life.

## How do I use this?

First, you create an account and login. Next, you start adding tasks - things you MUST do today, things you SHOULD do today, and things you CAN do today. It's important to be honest with yourself and your timeframes. If you MUST do everything, you may need to reconsider your prioritization.

Every day, RESET the tasks. This will ARCHIVE any tasks you completed since your last RESET. While in RESET mode, you can reprioritize the remaining tasks. Consider these priorities carefully! This is a time for you to think and plan the day.

## How can I run this on my own?

This app uses a Rails backend and a React front end, so you'll need to have Ruby and Node.js installed on your development environment. It's backed by a postgresql database, and the application is styled using Styled-Components.

After you've installed the necessary dependencies, to run the application, you will need to:

1. Run `bundle install` in the root directory to install the required gems
2. Run `npm install --prefix client` in the root directory, or `npm install` in the client folder to install the required npm packages
3. Make sure your postgresql server is running (in my environment - WSL2 Ubuntu, the command is `sudo service postgresql start`)
4. Start puma by running `rails s`
5. Seed the database `rails db:seed`
6. Start the frontend by running `npm start --prefix client`
7. Login and enjoy
