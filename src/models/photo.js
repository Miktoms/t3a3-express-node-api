const sqlite3 = require('sqlite3').verbose()


function createphotoRecord(classMock) {
    const db = new sqlite3.Database('./src/db/mocks.db', (err) => {
        if (err) {
            console.error(`Error connecting to database: ${err}`)
        }
    })

    const parameters = {
        $photo_name: photoMock.className,
        $photo_motto: photoMock.classMotto
    }

    const sql = `
    INSERT INTO photo(
        photo_name,
        photo_motto
    ) VALUES ($photo_name, $photo_motto)
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
                    console.log('photo saved to DB with id of: ', this.lastID)
                    db.close()
                }
            }
        )
    })
}

module.exports = { createphotoRecord }
