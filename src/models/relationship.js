const sqlite3 = require('sqlite3').verbose()


function createrelationshipRecord(classMock) {
    const db = new sqlite3.Database('./src/db/mocks.db', (err) => {
        if (err) {
            console.error(`Error connecting to database: ${err}`)
        }
    })

    const parameters = {
        $relationship_name: relationshipMock.className,
        $relationship_motto: relationshipMock.classMotto
    }

    const sql = `
    INSERT INTO relationship(
        relationship_name,
        relationship_motto
    ) VALUES ($relationship_name, $relationship_motto)
    `

    db.serialize(() => {
        db.run(
            sql,
            parameters,
            function (err) {
                if (err) {
                    console.error(err)
                    db.close()
                } else {
                    console.log('relationship saved to DB with id of: ', this.lastID)
                    db.close()
                }
            }
        )
    })
}

module.exports = { createrelationshipRecord }
