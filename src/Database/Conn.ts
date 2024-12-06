import {Sequelize} from 'sequelize-typescript'

const sequelize = new Sequelize(process.env.CONNECTION_STRING as string)

try {
    sequelize.authenticate()
    .then(()=>{
        console.log("connected to pg databaseno")
    })
    .catch(err =>{
        console.log("connection err", err)
    })
} catch (error) {
    console.log("error in connection", error)
    
}

export default sequelize