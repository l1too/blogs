    import {Sequelize} from 'sequelize';

    const db = new Sequelize('database_blogs','root','',{
        host: 'LocalHost',
        dialect: 'mysql'
    });

    export default db;