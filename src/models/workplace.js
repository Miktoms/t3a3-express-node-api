const sqlite3 = require('sqlite3').verbose()


function createworkplaceRecord(classMock) {
    const db = new sqlite3.Database('./src/db/mocks.db', (err) => {
        if (err) {
            console.error(`Error connecting to database: ${err}`)
        }
    })

    const parameters = {
        $workplace_name: workplaceMock.className,
        $workplace_motto: workplaceMock.classMotto
    }

    const sql = `
    INSERT INTO workplace(
        workplace_name,
        workplace_motto
    ) VALUES ($workplace_name, $workplace_motto)
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
                    console.log('workplace saved to DB with id of: ', this.lastID)
                    db.close()
                }
            }
        )
    })
}

module.exports = { createworkplaceRecord }
