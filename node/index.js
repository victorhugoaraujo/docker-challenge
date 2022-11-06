const express = require('express')
const app = express()
const port = 3000
const config = {
	host: 'db',
	user: 'root',
	password: 'root',
	database: 'nodedb'
}
const mysql = require('mysql')

app.get('/', (req, res) => {
	const connection = mysql.createConnection(config)

	const createTable = `CREATE TABLE IF NOT EXISTS people(id int NOT NULL auto_increment, name varchar(255) NOT NULL, PRIMARY KEY(id))`
	connection.query(createTable, (err) => {
		if (err) throw err;
		console.log('table created')
	});

	const insertPerson = "INSERT INTO people(name) values('Victor')"
	connection.query(insertPerson);

	const selectPeople = `SELECT name FROM people`
	connection.query(selectPeople, (_, result) => {
		const peopleNames = result?.map(item => `<li>${item.name}</li>`)
		res.send(`<div><h1>Full Cycle Rocks!!!</h1> <ul>${peopleNames?.join(" ")}</ul></div>`)
	});
	connection.end()
})

app.listen(port, () => {
	console.log('Rodando na porta ' + port)
})