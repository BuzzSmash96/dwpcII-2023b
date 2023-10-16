import createError from 'http-errors';
// Impornting winston logger

// Importando enrutador home
import homeRouter from './domains/home/home.router';

// Función que agrega rutas
const addRoutes = (app) => {
  // Agregando enrutado de Home
  app.use('/', homeRouter);

  // ERRORES
  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    next(createError(404));
  });

  // error handler
  app.use((err, req, res) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

  return app;
};

export default { addRoutes };
