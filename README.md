# Automated Ticker Creation

## Assumptions
- Messages from the same number related to the same issue are already sorted so that they are adjacent to each other in the JSON array
- Adjacent messages received  from the same number are probably related to the same issue and should be grouped together to form one ticket
- Title is set to be the first message that was sent