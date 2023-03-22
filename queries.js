const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "db",
  password: "12345",
  port: "5432",
});


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
  // crearTipousuario,
  // actualizarTipousuario,
  // eliminarTipousuario,
  getUsuario,
  getUsuarioPorId,
  // crearUsuario,
  // actualizarUsuario,
  // eliminarUsuario
};
