import {}

const postUsuario = async(req, res)=>{

    try{

        const{nombre_usuario,
            correo_electronico,
            contrasena,
            nombre,
            apellido} = req.body;
    
            const params = [nombre_usuario,
                correo_electronico,
                contrasena,
                nombre,
                apellido];
    
                const sql = `insert into tbl_usuarios
                (nombre_usuario,
                    correo_electronico,
                    contrasena,
                    nombre,
                    apellido)
                    values
                    ($1, $2, $3, $4) returning *`;
    
                const result = await db.query(sql,params);
                res.status(200).json(result)    

    } catch (err){


        res.status(500).json(err);
    }
   
            
        

}

const getUsuario = (req, res)=>{

    
}

const putUsuario = (req, res)=>{

    
}

const deleteUsuario = (req, res)=>{

    
}

export {
postUsuario,getUsuario,putUsuario,deleteUsuario

}