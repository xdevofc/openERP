
module.exports = (sequelize, DataTypes) => {

    const members = sequelize.define(
        'MIEMBROS',{
            nombre_miembro:{
                type:DataTypes.STRING,
                allowNull: true
            },
            apellido_miembro:{
                type:DataTypes.STRING,
                allowNull: true
            },
            ci_miembro:{
                type:DataTypes.STRING,
                allowNull: true,
            },
            fecha_nacimiento_miembro:{
                type: DataTypes.DATE,
                allowNull: true,
            },
            fecha_asuncion_miembro:{
                type:DataTypes.DATE,
                allowNull: true
            },
            rol_miembro:{
                type: DataTypes.STRING,
                allowNull: true
            }
        }
    ); 

    return members;
}


