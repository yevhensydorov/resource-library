# Expense tracker

We want to create a web app to track incurred expenses.
- Create a single page React app
- Make the App responsive and ensure it works well at all screen widths. You may want to design it as mobile first.
- Use the skills you gained from the design session to make it look good. It's a serious app, but we don't want it to be dull. No one likes doing expenses.
- Plan the layout and structure of your application before building it. Think about what components you will need and what they will do.
- Ensure as much of your code as possible is tested. Use `npm test -- --coverage` to check how much of your code is covered by tests

## Features

### Capture user input
- Create a form which can be used to capture expenses
- Each expense will have a description, a date and an amount spent.
- You want to use localStorage to persist data between refreshes: [https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- One way of implementing localStorage is to save a new expense each time it is added and load stored data into application on launch.

### Reporting
- Create a section which will display expenses incurred in reverse chronological order.

### Your own feature
- Implement a feature of your own choosing that would be useful.

### Categories - stretch goal
- We want to be able to group expenses by category
- Amend the capture form to allow users to select a category from a list to apply their expense.
- Amend the reporting page to display the total for each category per month and the total spend in that category.

### Custom categories - stretch goal
- Create a section which will allow us to add new expense categories and display existing ones.

## Support

* Ask lots of questions on Slack
* Help your classmates if you know the answers to their questions

## README.md

When finished, include a README.md in your repo. This should explain what the project is, how to run it and how to use it. Someone who is not familiar with the project should be able to look at it and understand what it is and what to do with it.
