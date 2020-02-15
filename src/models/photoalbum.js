const sqlite3 = require('sqlite3').verbose()


function createphotoalbumRecord(classMock) {
    const db = new sqlite3.Database('./src/db/mocks.db', (err) => {
        if (err) {
            console.error(`Error connecting to database: ${err}`)
        }
    })

    const parameters = {
        $photoalbum_name: photoalbumMock.className,
        $photoalbum_motto: photoalbumMock.classMotto
    }

    const sql = `
    INSERT INTO photoalbum(
        photoalbum_name,
        photoalbum_motto
    ) VALUES ($photoalbum_name, $photoalbum_motto)
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
                    console.log('photoalbum saved to DB with id of: ', this.lastID)
                    db.close()
                }
            }
        )
    })
}

module.exports = { createphotoalbumRecord }
