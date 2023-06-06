const express = require('express')
const app = express()
const port = 3000
const FIVE_MINUTES_IN_MS = 5 * 60 * 1000;

app.use(express.json())

app.get('/', (req, res) => {
    res.send('GET test');
})

app.post('/', (req, res) => {
    let tickets = []
		let count = 0;
    req.body.forEach((message) => {
				// Boolean to determine if new ticket needs to be created
				let createNew = true;
				// Get the last ticket in the array, null if empty
				let lastElement = tickets[tickets.length-1] || null;
				// If the phone number of the message is the same as number in the last ticket in the array,
				// then no need to create new ticket
				if (lastElement && message.tel === lastElement.tel) {
					createNew = false
				}
				// Create new ticket if needed
        if (createNew) {
					count++;
          let newTicket = {
						ticketId: count,
            title: message.msg,
            tel: message.tel,
            description: [[message.msg, message.createdAt]],
            fileUrl: [],
            createdAt: message.createdAt,
          }
					// If the message contains file attachments, then add to the attachments array
					if (message.fileUrl) {
						newTicket.fileUrl.push(message.fileUrl);
					}
					if (newTicket['tel'] != null && newTicket['title'] != null) {
						tickets.push(newTicket);
					}
				// Else, simply add more context to the description by adding the message along with the timestamp
        } else{
					lastElement.description.push([message.msg, message.createdAt]);
					if (message.fileUrl) {
						lastElement.fileUrl.push(message.fileUrl);
					}
				}
    })
    res.send(tickets);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// function rangeValid()