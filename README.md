# Automated Ticker Creation (Butler exercise)

## Setup
- npm install
- node index.js
- Use postman to create a POST request to localhost:3000, passing the JSON file in the request body

## Assumptions
- Messages from the same number related to the same issue are already sorted so that they are adjacent to each other in the JSON array
- Adjacent messages received from the same number are probably related to the same issue and should be grouped together to form one ticket (initially I wanted to consider the timestamp as well, but it seems that there are several cases in the scenario in which two messages that spanned across longer time range are still related to the same issue)


## Possible improvements
- Use keywords, or even NLP to detect context in the message. Currently, two messages adjacent to each other are put together as one ticket, even if they are not related to the same issue.
- Use keywords (or NLP) to determine the title of each ticket
- Identify spam or scrambled letters using NLP