// importamos conexion a base de datos
import db from "../database/db.js";

// importamos sequelize
import { DataTypes } from "sequelize";

//defino la tabla de db

const BlogModel = db.define ('blogs', {
    title: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING}
})

export default BlogModel;