const sqlite3 = require('sqlite3').verbose()


function createmessengerRecord(classMock) {
    const db = new sqlite3.Database('./src/db/mocks.db', (err) => {
        if (err) {
            console.error(`Error connecting to database: ${err}`)
        }
    })

    const parameters = {
        $messenger_name: messengerMock.className,
        $messenger_motto: messengerMock.classMotto
    }

    const sql = `
    INSERT INTO messenger(
        messenger_name,
        messenger_motto
    ) VALUES ($messenger_name, $messenger_motto)
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
                    console.log('messenger saved to DB with id of: ', this.lastID)
                    db.close()
                }
            }
        )
    })
}

module.exports = { createmessengerRecord }
