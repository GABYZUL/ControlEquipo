const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "db",
  password: "12345",
  port: "5432",
});


const getEquipo = (request, response) =>{
  pool.query(
    "SELECT * FROM acumulado",
    (error, results) => {
      if(error){
        throw error;
      }
      response.status(200).json(results.rows );
    }
  );
};

const getEquipoById = (request, response) =>{
  const id = parseInt(request.params.id);
  pool.query("SELECT * FROM acumulado WHERE id = $1", [id],
  (error, results)=>{
    if (error){
      throw error;
    }
    response.status(200).json(results.rows);
  }
  );
};

  const crearEquipo = (request, response) => {
  const { tipoequipo, noeco, unidad, modelo, anio, numeroserie, motor, seriemotor, estatus, atencion, costopesos, costodolares } = request.body;

  pool.query(
    "INSERT INTO acumulado (tipoequipo, noeco, unidad, modelo, anio, numeroserie, motor, seriemotor, estatus, atencion, costopesos, costodolares) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *",
    [ tipoequipo, noeco, unidad, modelo, anio, numeroserie, motor, seriemotor, estatus, atencion, costopesos, costodolares],
    (error, result) =>{
      if (error){
        throw error;
      }
      response.status(200).send("Agregado con exito");
    }
  );
};

const actualizarEquipo = (request, response) => {
  const id = parseInt(request.params.id);
  const { tipoequipo, noeco, unidad, modelo, anio, numeroserie, motor, seriemotor, estatus, atencion, costopesos, costodolares } = request.body;
  console.log(tipoequipo, noeco, unidad, modelo, anio, numeroserie, motor, seriemotor, estatus, atencion, costopesos, costodolares, id)
  pool.query(
    "UPDATE acumulado SET tipoequipo = $1, noeco = $2, unidad = $3, modelo = $4, anio = $5, numeroserie = $6, motor = $7, seriemotor = $8, estatus = $9, atencion = $10, costopesos = $11, costodolares = $12 WHERE id = $13 RETURNING * ",
    [tipoequipo, noeco, unidad, modelo, anio, numeroserie, motor, seriemotor, estatus, atencion, costopesos, costodolares, id],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).json({success: "listo"});
    }
  );
};

const eliminarEquipo = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(
    "DELETE FROM acumulado WHERE id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send("Eliminado con exito");
    }
  );
};





// //   api de tipousuario
// const getTipousuario = (request, response) => {
//   pool.query(
//     "SELECT * FROM tipousuario ORDER BY ecodtipousuario ASC",
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       response.status(200).json(results.rows);
//     }
//   );
// };

// const getTipousuarioPorId = (request, response) => {
//   const ecodtipousuario = parseInt(request.params.id);
//   pool.query(
//     "SELECT * FROM tipousuario WHERE ecodtipousuario = $1",
//     [ecodtipousuario],
//     (error, result) => {
//       if (error) {
//         throw error;
//       }
//       response.status(200).json(result.rows);
//     }
//   );
// };

// const crearTipousuario = (request, response) => {
//   const { ecodtipousuario, tdescripcionusuario, bestado } = request.body;

//   pool.query(
//     "INSERT INTO tipousuario (ecodtipousuario, tdescripcionusuario,bestado)VALUES ($1,$2,$3) RETURNING * ",
//     [ecodtipousuario, tdescripcionusuario, bestado],
//     (error, result) => {
//       if (error) {
//         throw error;
//       }
//       response.status(200).send("Agregado con exito");
//     }
//   );
// };

// const actualizarTipousuario = (request, response) => {
//   const { ecodtipousuario, tdescripcionusuario, bestado } = request.body;
//   pool.query(
//     "UPDATE tipousuario SET tdescripcionusuario = $1, bestado = $2 WHERE ecodtiporeporte = $3 RETURNING * ",
//     [ecodtipousuario, tdescripcionusuario, bestado],
//     (error, result) => {
//       if (error) {
//         throw error;
//       }
//       response.status(200).send("Actualizado con exito");
//     }
//   );
// };

// const eliminarTipousuario = (request, response) => {
//   const ecodtipousuario = parseInt(request.params.id);
//   pool.query(
//     "DELETE FROM tipousuario WHERE ecodtipousuario = $1",
//     [ecodtipousuario],
//     (error, result) => {
//       if (error) {
//         throw error;
//       }
//       response.status(200).send("Eliminado con exito");
//     }
//   );
// };


//   api de usuario
const getUsuario = (request, response) => {
  pool.query(
    "SELECT * FROM usuarios",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getUsuarioPorId = (request, response) => {
  const numtrabajador = parseInt(request.params.numtrabajador);
  pool.query("SELECT * FROM usuarios WHERE numtrabajador = $1", [numtrabajador],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).json(result.rows);
    }
  );
};

// const crearUsuario = (request, response) => {
//     const { ecodusuario, bstatus, tnombre, tapellidopaterno, tapellidomaterno, fk_ecodtipousuario } = request.body;

//     pool.query(
//       "INSERT INTO usuario (ecodunidadnegocios, bstatus, tnombre, tapellidopaterno, tapellidomaterno, fk_ecodtipousuario)VALUES ($1,$2,$3,$4,$5,$6) RETURNING * ",
//       [ecodusuario, bstatus, tnombre, tapellidopaterno, tapellidomaterno, fk_ecodtipousuario ],
//       (error, result) => {
//         if (error) {
//           throw error;
//         }
//         response.status(200).send("Agregado con exito");
//       }
//     );
// };

// const actualizarUsuario = (request, response) => {
//     const { ecodusuario, bstatus, tnombre, tapellidopaterno, tapellidomaterno, fk_ecodtipousuario } = request.body;
//     pool.query(
//       "UPDATE usuario SET bstatus = $1, tnombre = $2, tapellidopaterno = $3, tapellidomatero = $4,fk_ecodtipousuario = $5 WHERE ecodunidadnegocios = $6 RETURNING * ",
//       [ecodusuario, bstatus, tnombre, tapellidopaterno, tapellidomaterno, fk_ecodtipousuario],
//       (error, result) => {
//         if (error) {
//           throw error;
//         }
//         response.status(200).send("Actualizado con exito");
//       }
//     );
//   };

// const eliminarUsuario = (request, response) => {
//     const ecodusuario = parseInt(request.params.id);
//     pool.query(
//       "DELETE FROM usuario WHERE ecodusuario = $1",
//       [ecodusuario],
//       (error, result) => {
//         if (error) {
//           throw error;
//         }
//         response.status(200).send("Eliminado con exito");
//       }
//     );
// };


// CONSULTAS DE EQUIPO







module.exports = {
  // getTipousuario,
  // getTipousuarioPorId,
  getEquipoById,
  crearEquipo,
  actualizarEquipo,
  eliminarEquipo,
  getEquipo,
  getUsuario,
  getUsuarioPorId
  // crearUsuario,
  // actualizarUsuario,
  // eliminarUsuario
};
