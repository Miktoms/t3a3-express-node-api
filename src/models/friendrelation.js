const sqlite3 = require('sqlite3').verbose()


function createfriendrelationRecord(classMock) {
    const db = new sqlite3.Database('./src/db/mocks.db', (err) => {
        if (err) {
            console.error(`Error connecting to database: ${err}`)
        }
    })

    const parameters = {
        $friendrelation_name: friendrelationMock.className,
        $friendrelation_motto: friendrelationMock.classMotto
    }

    const sql = `
    INSERT INTO friendrelation(
        friendrelation_name,
        friendrelation_motto
    ) VALUES ($friendrelation_name, $friendrelation_motto)
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
                    console.log('friendrelation saved to DB with id of: ', this.lastID)
                    db.close()
                }
            }
        )
    })
}

module.exports = { createfriendrelationRecord }
