--  CREAR DATABASE LLAMADA db
-- Eliminar las columnas idEquipo que son las ultimas dos del escript
-- Crearlas manualmente indicando que es primary key y que es de tipo serial
-- Table: public.acumulado

-- DROP TABLE IF EXISTS public.acumulado;

CREATE TABLE IF NOT EXISTS public.acumulado
(
    tipoequipo text COLLATE pg_catalog."default" NOT NULL,
    noeco text COLLATE pg_catalog."default" NOT NULL,
    unidad text COLLATE pg_catalog."default" NOT NULL,
    modelo text COLLATE pg_catalog."default" NOT NULL,
    anio text COLLATE pg_catalog."default" NOT NULL,
    numeroserie text COLLATE pg_catalog."default" NOT NULL,
    motor text COLLATE pg_catalog."default" NOT NULL,
    seriemotor text COLLATE pg_catalog."default" NOT NULL,
    estatus text COLLATE pg_catalog."default" NOT NULL,
    atencion text COLLATE pg_catalog."default" NOT NULL,
    costopesos numeric(100,0) NOT NULL,
    costodolares numeric(100,0) NOT NULL,
    idequipo integer NOT NULL DEFAULT nextval('acumulado_idequipo_seq'::regclass),
    CONSTRAINT acumulado_pkey PRIMARY KEY (idequipo)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.acumulado
    OWNER to postgres;
    -- Table: public.usuarios

-- DROP TABLE IF EXISTS public.usuarios;

CREATE TABLE IF NOT EXISTS public.usuarios
(
    "IdOperador" integer NOT NULL,
    numtrabajador text COLLATE pg_catalog."default" NOT NULL,
    name text COLLATE pg_catalog."default" NOT NULL,
    contra text COLLATE pg_catalog."default" NOT NULL,
    "tipoUsuario" text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT usuarios_pkey PRIMARY KEY ("IdOperador")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.usuarios
    OWNER to postgres;
