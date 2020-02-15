const sqlite3 = require('sqlite3').verbose()


function createlocaleRecord(classMock) {
    const db = new sqlite3.Database('./src/db/mocks.db', (err) => {
        if (err) {
            console.error(`Error connecting to database: ${err}`)
        }
    })

    const parameters = {
        $locale_name: localeMock.className,
        $locale_motto: localeMock.classMotto
    }

    const sql = `
    INSERT INTO locale(
        locale_name,
        locale_motto
    ) VALUES ($locale_name, $locale_motto)
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
                    console.log('locale saved to DB with id of: ', this.lastID)
                    db.close()
                }
            }
        )
    })
}

module.exports = { createlocaleRecord }
