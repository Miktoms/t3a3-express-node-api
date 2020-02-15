const sqlite3 = require('sqlite3').verbose()


function creategenderRecord(classMock) {
    const db = new sqlite3.Database('./src/db/mocks.db', (err) => {
        if (err) {
            console.error(`Error connecting to database: ${err}`)
        }
    })

    const parameters = {
        $gender_name: genderMock.className,
        $gender_motto: genderMock.classMotto
    }

    const sql = `
    INSERT INTO gender(
        gender_name,
        gender_motto
    ) VALUES ($gender_name, $gender_motto)
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
                    console.log('gender saved to DB with id of: ', this.lastID)
                    db.close()
                }
            }
        )
    })
}

module.exports = { creategenderRecord }
