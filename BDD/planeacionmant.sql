PGDMP     2    "                {            planeacionmant    15.2    15.2 1    I           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            J           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            K           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            L           1262    24576    planeacionmant    DATABASE     �   CREATE DATABASE planeacionmant WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Mexico.1252';
    DROP DATABASE planeacionmant;
                postgres    false            �            1259    24577    bitacora    TABLE     A  CREATE TABLE public.bitacora (
    ecodbitacora numeric NOT NULL,
    fk_eunidad numeric,
    fk_eunidadnegocio numeric,
    fk_ecaptura numeric,
    tdescripcion character varying(600),
    fk_etiporeporte numeric,
    fhfechainicial date,
    fhfechafinal date,
    fk_epiezasutilizadas numeric,
    hhorainicial time without time zone,
    hhorafinal time without time zone,
    tdisponibilidad boolean,
    fk_etecnico numeric,
    fk_esupervisor numeric,
    tturno numeric,
    tefectosfalla character varying(300),
    fk_esistema numeric,
    fk_esubsistema numeric
);
    DROP TABLE public.bitacora;
       public         heap    postgres    false            �            1259    24582    mantenimiento    TABLE     i   CREATE TABLE public.mantenimiento (
    ecodtipomantenimiento numeric NOT NULL,
    ecantidad numeric
);
 !   DROP TABLE public.mantenimiento;
       public         heap    postgres    false            �            1259    24587    mantpreventivo    TABLE     	  CREATE TABLE public.mantpreventivo (
    ecodmantprev numeric NOT NULL,
    bestado boolean,
    fk_eunidadnegocios numeric,
    fk_eunidad numeric,
    fhultimomantenimiento date,
    ehorometro numeric,
    eodometro numeric,
    fk_etipomantenimiento numeric
);
 "   DROP TABLE public.mantpreventivo;
       public         heap    postgres    false            �            1259    24592    piezas    TABLE     [   CREATE TABLE public.piezas (
    ecodpiezas numeric NOT NULL,
    ecodigo numeric(30,0)
);
    DROP TABLE public.piezas;
       public         heap    postgres    false            �            1259    24597    sistema    TABLE     f   CREATE TABLE public.sistema (
    ecodsistema numeric NOT NULL,
    tnombre character varying(100)
);
    DROP TABLE public.sistema;
       public         heap    postgres    false            �            1259    24602 
   subsistema    TABLE     l   CREATE TABLE public.subsistema (
    ecodsubsistema numeric NOT NULL,
    tnombre character varying(100)
);
    DROP TABLE public.subsistema;
       public         heap    postgres    false            �            1259    24607    tiporeporte    TABLE     n   CREATE TABLE public.tiporeporte (
    ecodtiporeporte numeric NOT NULL,
    tnombre character varying(100)
);
    DROP TABLE public.tiporeporte;
       public         heap    postgres    false            �            1259    24612    tipousuario    TABLE     �   CREATE TABLE public.tipousuario (
    ecodtipousuario numeric NOT NULL,
    tdescripcionusuario character varying(100),
    bestado boolean
);
    DROP TABLE public.tipousuario;
       public         heap    postgres    false            �            1259    24617    unidad    TABLE     d   CREATE TABLE public.unidad (
    ecodunidad numeric NOT NULL,
    tnombre character varying(100)
);
    DROP TABLE public.unidad;
       public         heap    postgres    false            �            1259    24622    unidadnegocios    TABLE     t   CREATE TABLE public.unidadnegocios (
    ecodunidadnegocios numeric NOT NULL,
    tnombre character varying(100)
);
 "   DROP TABLE public.unidadnegocios;
       public         heap    postgres    false            �            1259    24627    usuario    TABLE     �   CREATE TABLE public.usuario (
    ecodusuario numeric NOT NULL,
    bstatus text,
    tnombre text,
    tapellidopaterno text,
    tapellidomaterno text,
    ttipousuario text,
    enumtrabajador numeric(10,0),
    tcontra text
);
    DROP TABLE public.usuario;
       public         heap    postgres    false            <          0    24577    bitacora 
   TABLE DATA           +  COPY public.bitacora (ecodbitacora, fk_eunidad, fk_eunidadnegocio, fk_ecaptura, tdescripcion, fk_etiporeporte, fhfechainicial, fhfechafinal, fk_epiezasutilizadas, hhorainicial, hhorafinal, tdisponibilidad, fk_etecnico, fk_esupervisor, tturno, tefectosfalla, fk_esistema, fk_esubsistema) FROM stdin;
    public          postgres    false    214   O=       =          0    24582    mantenimiento 
   TABLE DATA           I   COPY public.mantenimiento (ecodtipomantenimiento, ecantidad) FROM stdin;
    public          postgres    false    215   �=       >          0    24587    mantpreventivo 
   TABLE DATA           �   COPY public.mantpreventivo (ecodmantprev, bestado, fk_eunidadnegocios, fk_eunidad, fhultimomantenimiento, ehorometro, eodometro, fk_etipomantenimiento) FROM stdin;
    public          postgres    false    216   >       ?          0    24592    piezas 
   TABLE DATA           5   COPY public.piezas (ecodpiezas, ecodigo) FROM stdin;
    public          postgres    false    217   T>       @          0    24597    sistema 
   TABLE DATA           7   COPY public.sistema (ecodsistema, tnombre) FROM stdin;
    public          postgres    false    218   �>       A          0    24602 
   subsistema 
   TABLE DATA           =   COPY public.subsistema (ecodsubsistema, tnombre) FROM stdin;
    public          postgres    false    219   �>       B          0    24607    tiporeporte 
   TABLE DATA           ?   COPY public.tiporeporte (ecodtiporeporte, tnombre) FROM stdin;
    public          postgres    false    220   �>       C          0    24612    tipousuario 
   TABLE DATA           T   COPY public.tipousuario (ecodtipousuario, tdescripcionusuario, bestado) FROM stdin;
    public          postgres    false    221   -?       D          0    24617    unidad 
   TABLE DATA           5   COPY public.unidad (ecodunidad, tnombre) FROM stdin;
    public          postgres    false    222   j?       E          0    24622    unidadnegocios 
   TABLE DATA           E   COPY public.unidadnegocios (ecodunidadnegocios, tnombre) FROM stdin;
    public          postgres    false    223   �?       F          0    24627    usuario 
   TABLE DATA           �   COPY public.usuario (ecodusuario, bstatus, tnombre, tapellidopaterno, tapellidomaterno, ttipousuario, enumtrabajador, tcontra) FROM stdin;
    public          postgres    false    224   �?       �           2606    24633    bitacora bitacora_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.bitacora
    ADD CONSTRAINT bitacora_pkey PRIMARY KEY (ecodbitacora);
 @   ALTER TABLE ONLY public.bitacora DROP CONSTRAINT bitacora_pkey;
       public            postgres    false    214            �           2606    24635    unidad fk_eunidad_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.unidad
    ADD CONSTRAINT fk_eunidad_pkey PRIMARY KEY (ecodunidad);
 @   ALTER TABLE ONLY public.unidad DROP CONSTRAINT fk_eunidad_pkey;
       public            postgres    false    222            �           2606    24637     mantenimiento mantenimiento_pkey 
   CONSTRAINT     q   ALTER TABLE ONLY public.mantenimiento
    ADD CONSTRAINT mantenimiento_pkey PRIMARY KEY (ecodtipomantenimiento);
 J   ALTER TABLE ONLY public.mantenimiento DROP CONSTRAINT mantenimiento_pkey;
       public            postgres    false    215            �           2606    24639 "   mantpreventivo mantpreventivo_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.mantpreventivo
    ADD CONSTRAINT mantpreventivo_pkey PRIMARY KEY (ecodmantprev);
 L   ALTER TABLE ONLY public.mantpreventivo DROP CONSTRAINT mantpreventivo_pkey;
       public            postgres    false    216            �           2606    24641    piezas piezas_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.piezas
    ADD CONSTRAINT piezas_pkey PRIMARY KEY (ecodpiezas);
 <   ALTER TABLE ONLY public.piezas DROP CONSTRAINT piezas_pkey;
       public            postgres    false    217            �           2606    24643    sistema sistema_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.sistema
    ADD CONSTRAINT sistema_pkey PRIMARY KEY (ecodsistema);
 >   ALTER TABLE ONLY public.sistema DROP CONSTRAINT sistema_pkey;
       public            postgres    false    218            �           2606    24645    subsistema subsistema_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.subsistema
    ADD CONSTRAINT subsistema_pkey PRIMARY KEY (ecodsubsistema);
 D   ALTER TABLE ONLY public.subsistema DROP CONSTRAINT subsistema_pkey;
       public            postgres    false    219            �           2606    24647    tiporeporte tiporeporte_pkey 
   CONSTRAINT     g   ALTER TABLE ONLY public.tiporeporte
    ADD CONSTRAINT tiporeporte_pkey PRIMARY KEY (ecodtiporeporte);
 F   ALTER TABLE ONLY public.tiporeporte DROP CONSTRAINT tiporeporte_pkey;
       public            postgres    false    220            �           2606    24649    tipousuario tipousuario_pkey 
   CONSTRAINT     g   ALTER TABLE ONLY public.tipousuario
    ADD CONSTRAINT tipousuario_pkey PRIMARY KEY (ecodtipousuario);
 F   ALTER TABLE ONLY public.tipousuario DROP CONSTRAINT tipousuario_pkey;
       public            postgres    false    221            �           2606    24651 $   unidadnegocios unidaddenegocios_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public.unidadnegocios
    ADD CONSTRAINT unidaddenegocios_pkey PRIMARY KEY (ecodunidadnegocios);
 N   ALTER TABLE ONLY public.unidadnegocios DROP CONSTRAINT unidaddenegocios_pkey;
       public            postgres    false    223            �           2606    24653    usuario usuario_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (ecodusuario);
 >   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_pkey;
       public            postgres    false    224            �           2606    24654    bitacora fk_ecaptura    FK CONSTRAINT     �   ALTER TABLE ONLY public.bitacora
    ADD CONSTRAINT fk_ecaptura FOREIGN KEY (fk_ecaptura) REFERENCES public.usuario(ecodusuario) NOT VALID;
 >   ALTER TABLE ONLY public.bitacora DROP CONSTRAINT fk_ecaptura;
       public          postgres    false    224    3233    214            �           2606    24664    bitacora fk_epiezasutilizadas    FK CONSTRAINT     �   ALTER TABLE ONLY public.bitacora
    ADD CONSTRAINT fk_epiezasutilizadas FOREIGN KEY (fk_epiezasutilizadas) REFERENCES public.piezas(ecodpiezas) NOT VALID;
 G   ALTER TABLE ONLY public.bitacora DROP CONSTRAINT fk_epiezasutilizadas;
       public          postgres    false    3219    214    217            �           2606    24669    bitacora fk_esistema    FK CONSTRAINT     �   ALTER TABLE ONLY public.bitacora
    ADD CONSTRAINT fk_esistema FOREIGN KEY (fk_esistema) REFERENCES public.sistema(ecodsistema) NOT VALID;
 >   ALTER TABLE ONLY public.bitacora DROP CONSTRAINT fk_esistema;
       public          postgres    false    3221    214    218            �           2606    24674    bitacora fk_esubsistema    FK CONSTRAINT     �   ALTER TABLE ONLY public.bitacora
    ADD CONSTRAINT fk_esubsistema FOREIGN KEY (fk_esubsistema) REFERENCES public.subsistema(ecodsubsistema) NOT VALID;
 A   ALTER TABLE ONLY public.bitacora DROP CONSTRAINT fk_esubsistema;
       public          postgres    false    214    219    3223            �           2606    24679    bitacora fk_esupervisor    FK CONSTRAINT     �   ALTER TABLE ONLY public.bitacora
    ADD CONSTRAINT fk_esupervisor FOREIGN KEY (fk_esupervisor) REFERENCES public.usuario(ecodusuario) NOT VALID;
 A   ALTER TABLE ONLY public.bitacora DROP CONSTRAINT fk_esupervisor;
       public          postgres    false    214    3233    224            �           2606    24684    bitacora fk_etecnico    FK CONSTRAINT     �   ALTER TABLE ONLY public.bitacora
    ADD CONSTRAINT fk_etecnico FOREIGN KEY (fk_etecnico) REFERENCES public.usuario(ecodusuario) NOT VALID;
 >   ALTER TABLE ONLY public.bitacora DROP CONSTRAINT fk_etecnico;
       public          postgres    false    3233    214    224            �           2606    24689 $   mantpreventivo fk_etipomantenimiento    FK CONSTRAINT     �   ALTER TABLE ONLY public.mantpreventivo
    ADD CONSTRAINT fk_etipomantenimiento FOREIGN KEY (fk_etipomantenimiento) REFERENCES public.mantpreventivo(ecodmantprev) NOT VALID;
 N   ALTER TABLE ONLY public.mantpreventivo DROP CONSTRAINT fk_etipomantenimiento;
       public          postgres    false    216    3217    216            �           2606    24694    bitacora fk_etiporeporte    FK CONSTRAINT     �   ALTER TABLE ONLY public.bitacora
    ADD CONSTRAINT fk_etiporeporte FOREIGN KEY (fk_etiporeporte) REFERENCES public.tiporeporte(ecodtiporeporte) NOT VALID;
 B   ALTER TABLE ONLY public.bitacora DROP CONSTRAINT fk_etiporeporte;
       public          postgres    false    3225    214    220            �           2606    24699    bitacora fk_eunidad    FK CONSTRAINT     �   ALTER TABLE ONLY public.bitacora
    ADD CONSTRAINT fk_eunidad FOREIGN KEY (fk_eunidad) REFERENCES public.unidad(ecodunidad) NOT VALID;
 =   ALTER TABLE ONLY public.bitacora DROP CONSTRAINT fk_eunidad;
       public          postgres    false    3229    214    222            �           2606    24704    mantpreventivo fk_eunidad    FK CONSTRAINT     �   ALTER TABLE ONLY public.mantpreventivo
    ADD CONSTRAINT fk_eunidad FOREIGN KEY (fk_eunidad) REFERENCES public.unidad(ecodunidad) NOT VALID;
 C   ALTER TABLE ONLY public.mantpreventivo DROP CONSTRAINT fk_eunidad;
       public          postgres    false    3229    222    216            �           2606    24709    bitacora fk_eunidadnegocios    FK CONSTRAINT     �   ALTER TABLE ONLY public.bitacora
    ADD CONSTRAINT fk_eunidadnegocios FOREIGN KEY (fk_eunidadnegocio) REFERENCES public.unidadnegocios(ecodunidadnegocios) NOT VALID;
 E   ALTER TABLE ONLY public.bitacora DROP CONSTRAINT fk_eunidadnegocios;
       public          postgres    false    3231    223    214            �           2606    24714 !   mantpreventivo fk_eunidadnegocios    FK CONSTRAINT     �   ALTER TABLE ONLY public.mantpreventivo
    ADD CONSTRAINT fk_eunidadnegocios FOREIGN KEY (fk_eunidadnegocios) REFERENCES public.unidadnegocios(ecodunidadnegocios) NOT VALID;
 K   ALTER TABLE ONLY public.mantpreventivo DROP CONSTRAINT fk_eunidadnegocios;
       public          postgres    false    216    3231    223            <   q   x�3�4��T���܂�|����̼�Ң�<�����������	2����� �8͡�N#Nc�I�Uss��&��i�e��$����Ȉ,kz����3&�4�)\1z\\\ ��;      =   "   x�3�450�2�44 RƜ� �	�1����� N;�      >   B   x�m��	�0���.)g_�F'�ݟ�*D}$�Pt�Gy�q�誂�����Î؇�aG��?��.�+q�      ?   %   x�3�4�0�0�2�4.cNc0�2�4�=... ��c      @   *   x�3�,NM/-�LIL�2�,I-.1�2��\&`ڄ+F��� �P      A   $   x�3�L��+)-���2�,I-.1�2��\1z\\\ �"�      B   &   x�3�L�/*JM.�,��2�,I-.1�2��\1z\\\ �-	�      C   -   x�3�LL����,.)JL�/�,�2�,I-.�\�`������ -�E      D   !   x�3�41w�4r�2�4.cNc0������ [6      E   #   x�3��vrw�2�,I-.1�2��\1z\\\ |�k      F   �   x�eͽ
A�:�0�?����p 
V6�M�K ����8��3|���US875�0��XNuf�>��S���R.!o�N,ت�EgZ}��>��@�e���	(�f��[���ν!�/'67C     