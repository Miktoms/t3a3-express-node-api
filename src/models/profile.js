const sqlite3 = require('sqlite3').verbose()


function createprofileRecord(profileMock) {
    const db = new sqlite3.Database('./src/db/mocks.db', (err) => {
        if (err) {
            console.error(`Error connecting to database: ${err}`)
        }
    })

    const parameters = {

        $profile_profile: profileMock.profileUserid,
        $profile_profile: profileMock.profileFirstname,
        $profile_profile: profileMock.profileLastname,
        $profile_profile: profileMock.profilePicture,
        $profile_profile: profileMock.profileReligion,
        $profile_profile: profileMock.profileBirthday,
        $profile_profile: profileMock.profileMessenger
        

    }

    const sql = `
    INSERT INTO profile(
        profile_Userid,
        profile_Firstname,
        profile_Lastname,
        profile_Picture,
        profile_Religion,
        profile_Birthday,
        profile_Messenger

    ) VALUES ($profile_Useid, $profile_Firstname, $profile_lastname, $profile_Picture, $profile_Religion, $profile_Birthday, $profile_Messenger)
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
                    console.log('profile saved to DB with id of: ', this.lastID)
                    db.close()
                }
            }
        )
    })
}

module.exports = { createprofileRecord }
