const sqlite3 = require('sqlite3').verbose()


function createphototagRecord(classMock) {
    const db = new sqlite3.Database('./src/db/mocks.db', (err) => {
        if (err) {
            console.error(`Error connecting to database: ${err}`)
        }
    })

    const parameters = {
        $phototag_name: phototagMock.className,
        $phototag_motto: phototagMock.classMotto
    }

    const sql = `
    INSERT INTO phototag(
        phototag_name,
        phototag_motto
    ) VALUES ($phototag_name, $phototag_motto)
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
                    console.log('phototag saved to DB with id of: ', this.lastID)
                    db.close()
                }
            }
        )
    })
}

module.exports = { createphototagRecord }
