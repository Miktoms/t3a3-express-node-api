const sqlite3 = require('sqlite3').verbose()


function createaffiliationRecord(classMock) {
    const db = new sqlite3.Database('./src/db/mocks.db', (err) => {
        if (err) {
            console.error(`Error connecting to database: ${err}`)
        }
    })

    const parameters = {
        $affiliation_name: affiliationMock.className,
        $affiliation_motto: affiliationMock.classMotto
    }

    const sql = `
    INSERT INTO affiliation(
        affiliation_name,
        affiliation_motto
    ) VALUES ($affiliation_name, $affiliation_motto)
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
                    console.log('affiliation saved to DB with id of: ', this.lastID)
                    db.close()
                }
            }
        )
    })
}

module.exports = { createaffiliationRecord }
