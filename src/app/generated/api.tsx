import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  stringOrBoolean: any;
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: any;
};

export type Articulos = {
  __typename?: 'articulos';
  codigo: Scalars['String'];
  orden?: Maybe<Scalars['String']>;
  cant_add?: Maybe<Scalars['Float']>;
  cantidad?: Maybe<Scalars['Float']>;
  depto: Scalars['String'];
  descripcion?: Maybe<Scalars['String']>;
  estatus?: Maybe<Scalars['Int']>;
  estatus_cambio?: Maybe<Scalars['Int']>;
  estatus_cant?: Maybe<Scalars['String']>;
  fecha_asign: Scalars['DateTime'];
  fecha_final?: Maybe<Scalars['DateTime']>;
  fecha_inicio?: Maybe<Scalars['DateTime']>;
  grupo?: Maybe<Scalars['String']>;
  picking?: Maybe<Scalars['Int']>;
  precio?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  delivery?: Maybe<Scalars['String']>;
  tienda?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  usuario?: Maybe<Scalars['Int']>;
  /** El precio total de articulos por su cantidad. */
  total: Scalars['Float'];
  remplazo?: Maybe<Articulos_Remplazo>;
};

export type Articulos_Remplazo = {
  __typename?: 'articulos_remplazo';
  cantidad?: Maybe<Scalars['Float']>;
  codigo: Scalars['String'];
  descripcion?: Maybe<Scalars['String']>;
  grupo?: Maybe<Scalars['String']>;
  n_sku?: Maybe<Scalars['String']>;
  orden?: Maybe<Scalars['String']>;
  o_sku?: Maybe<Scalars['String']>;
  precio?: Maybe<Scalars['Float']>;
  tienda?: Maybe<Scalars['String']>;
  ordenes?: Maybe<Ordenes>;
  /** El precio total de articulos por su cantidad. */
  total: Scalars['Float'];
};

export type Articulos_RemplazoCreateManyWithoutOrdenesInput = {
  create?: Maybe<Array<Articulos_RemplazoCreateWithoutOrdenesInput>>;
  connect?: Maybe<Array<Articulos_RemplazoWhereUniqueInput>>;
};

export type Articulos_RemplazoCreateWithoutOrdenesInput = {
  codigo: Scalars['String'];
  o_sku?: Maybe<Scalars['String']>;
  n_sku?: Maybe<Scalars['String']>;
  descripcion?: Maybe<Scalars['String']>;
  cantidad?: Maybe<Scalars['Float']>;
  precio?: Maybe<Scalars['Float']>;
  tienda?: Maybe<Scalars['String']>;
  grupo?: Maybe<Scalars['String']>;
};

export type Articulos_RemplazoListRelationFilter = {
  every?: Maybe<Articulos_RemplazoWhereInput>;
  some?: Maybe<Articulos_RemplazoWhereInput>;
  none?: Maybe<Articulos_RemplazoWhereInput>;
};

export type Articulos_RemplazoOrderByInput = {
  codigo?: Maybe<SortOrder>;
  orden?: Maybe<SortOrder>;
  o_sku?: Maybe<SortOrder>;
  n_sku?: Maybe<SortOrder>;
  descripcion?: Maybe<SortOrder>;
  cantidad?: Maybe<SortOrder>;
  precio?: Maybe<SortOrder>;
  tienda?: Maybe<SortOrder>;
  grupo?: Maybe<SortOrder>;
};

export type Articulos_RemplazoScalarWhereInput = {
  AND?: Maybe<Array<Articulos_RemplazoScalarWhereInput>>;
  OR?: Maybe<Array<Articulos_RemplazoScalarWhereInput>>;
  NOT?: Maybe<Array<Articulos_RemplazoScalarWhereInput>>;
  codigo?: Maybe<StringFilter>;
  orden?: Maybe<StringNullableFilter>;
  o_sku?: Maybe<StringNullableFilter>;
  n_sku?: Maybe<StringNullableFilter>;
  descripcion?: Maybe<StringNullableFilter>;
  cantidad?: Maybe<FloatNullableFilter>;
  precio?: Maybe<FloatNullableFilter>;
  tienda?: Maybe<StringNullableFilter>;
  grupo?: Maybe<StringNullableFilter>;
};

export type Articulos_RemplazoUpdateManyDataInput = {
  codigo?: Maybe<StringFieldUpdateOperationsInput>;
  o_sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  n_sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  descripcion?: Maybe<NullableStringFieldUpdateOperationsInput>;
  cantidad?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  precio?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  tienda?: Maybe<NullableStringFieldUpdateOperationsInput>;
  grupo?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type Articulos_RemplazoUpdateManyWithoutOrdenesInput = {
  create?: Maybe<Array<Articulos_RemplazoCreateWithoutOrdenesInput>>;
  connect?: Maybe<Array<Articulos_RemplazoWhereUniqueInput>>;
  set?: Maybe<Array<Articulos_RemplazoWhereUniqueInput>>;
  disconnect?: Maybe<Array<Articulos_RemplazoWhereUniqueInput>>;
  delete?: Maybe<Array<Articulos_RemplazoWhereUniqueInput>>;
  update?: Maybe<Array<Articulos_RemplazoUpdateWithWhereUniqueWithoutOrdenesInput>>;
  updateMany?: Maybe<Array<Articulos_RemplazoUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<Articulos_RemplazoScalarWhereInput>>;
  upsert?: Maybe<Array<Articulos_RemplazoUpsertWithWhereUniqueWithoutOrdenesInput>>;
};

export type Articulos_RemplazoUpdateManyWithWhereNestedInput = {
  where: Articulos_RemplazoScalarWhereInput;
  data: Articulos_RemplazoUpdateManyDataInput;
};

export type Articulos_RemplazoUpdateWithoutOrdenesDataInput = {
  codigo?: Maybe<StringFieldUpdateOperationsInput>;
  o_sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  n_sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  descripcion?: Maybe<NullableStringFieldUpdateOperationsInput>;
  cantidad?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  precio?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  tienda?: Maybe<NullableStringFieldUpdateOperationsInput>;
  grupo?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type Articulos_RemplazoUpdateWithWhereUniqueWithoutOrdenesInput = {
  where: Articulos_RemplazoWhereUniqueInput;
  data: Articulos_RemplazoUpdateWithoutOrdenesDataInput;
};

export type Articulos_RemplazoUpsertWithWhereUniqueWithoutOrdenesInput = {
  where: Articulos_RemplazoWhereUniqueInput;
  update: Articulos_RemplazoUpdateWithoutOrdenesDataInput;
  create: Articulos_RemplazoCreateWithoutOrdenesInput;
};

export type Articulos_RemplazoWhereInput = {
  AND?: Maybe<Array<Articulos_RemplazoWhereInput>>;
  OR?: Maybe<Array<Articulos_RemplazoWhereInput>>;
  NOT?: Maybe<Array<Articulos_RemplazoWhereInput>>;
  codigo?: Maybe<StringFilter>;
  orden?: Maybe<StringNullableFilter>;
  o_sku?: Maybe<StringNullableFilter>;
  n_sku?: Maybe<StringNullableFilter>;
  descripcion?: Maybe<StringNullableFilter>;
  cantidad?: Maybe<FloatNullableFilter>;
  precio?: Maybe<FloatNullableFilter>;
  tienda?: Maybe<StringNullableFilter>;
  grupo?: Maybe<StringNullableFilter>;
  ordenes?: Maybe<OrdenesWhereInput>;
};

export type Articulos_RemplazoWhereUniqueInput = {
  codigo?: Maybe<Scalars['String']>;
};

export type Articulos_Ticket_Cambio_Input = {
  EAN: Scalars['String'];
  CANT: Scalars['Int'];
  PRECIO: Scalars['Float'];
  STATUS: Scalars['String'];
  CEDULA?: Maybe<Scalars['String']>;
  CLIENTE: Scalars['String'];
  DESCRIPCION: Scalars['String'];
};

export type Articulos_Ticket_Cambio_Response = {
  __typename?: 'articulos_ticket_cambio_response';
  ean: Scalars['String'];
  descripcion: Scalars['String'];
  itbis: Scalars['String'];
  precio: Scalars['String'];
  total: Scalars['String'];
  usuario: Scalars['String'];
  factura: Scalars['String'];
  factura_afectada: Scalars['String'];
  ncf_afectado?: Maybe<Scalars['String']>;
  cantidad: Scalars['String'];
};

export type ArticulosCreateManyWithoutOrdenesInput = {
  create?: Maybe<Array<ArticulosCreateWithoutOrdenesInput>>;
  connect?: Maybe<Array<ArticulosWhereUniqueInput>>;
};

export type ArticulosCreateManyWithoutUsuariosInput = {
  create?: Maybe<Array<ArticulosCreateWithoutUsuariosInput>>;
  connect?: Maybe<Array<ArticulosWhereUniqueInput>>;
};

export type ArticulosCreateWithoutOrdenesInput = {
  codigo: Scalars['String'];
  sku?: Maybe<Scalars['String']>;
  descripcion?: Maybe<Scalars['String']>;
  cant_add?: Maybe<Scalars['Float']>;
  cantidad?: Maybe<Scalars['Float']>;
  precio?: Maybe<Scalars['Float']>;
  estatus?: Maybe<Scalars['Int']>;
  fecha_inicio?: Maybe<Scalars['DateTime']>;
  fecha_final?: Maybe<Scalars['DateTime']>;
  estatus_cant?: Maybe<Scalars['String']>;
  estatus_cambio?: Maybe<Scalars['Int']>;
  tienda?: Maybe<Scalars['String']>;
  depto: Scalars['String'];
  fecha_asign: Scalars['DateTime'];
  grupo?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  picking?: Maybe<Scalars['Int']>;
  delivery?: Maybe<Scalars['String']>;
  usuarios?: Maybe<UsuariosCreateOneWithoutArticulosInput>;
};

export type ArticulosCreateWithoutUsuariosInput = {
  codigo: Scalars['String'];
  sku?: Maybe<Scalars['String']>;
  descripcion?: Maybe<Scalars['String']>;
  cant_add?: Maybe<Scalars['Float']>;
  cantidad?: Maybe<Scalars['Float']>;
  precio?: Maybe<Scalars['Float']>;
  estatus?: Maybe<Scalars['Int']>;
  fecha_inicio?: Maybe<Scalars['DateTime']>;
  fecha_final?: Maybe<Scalars['DateTime']>;
  estatus_cant?: Maybe<Scalars['String']>;
  estatus_cambio?: Maybe<Scalars['Int']>;
  tienda?: Maybe<Scalars['String']>;
  depto: Scalars['String'];
  fecha_asign: Scalars['DateTime'];
  grupo?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  picking?: Maybe<Scalars['Int']>;
  delivery?: Maybe<Scalars['String']>;
  ordenes?: Maybe<OrdenesCreateOneWithoutArticulosInput>;
};

export type ArticulosListRelationFilter = {
  every?: Maybe<ArticulosWhereInput>;
  some?: Maybe<ArticulosWhereInput>;
  none?: Maybe<ArticulosWhereInput>;
};

export type ArticulosScalarWhereInput = {
  AND?: Maybe<Array<ArticulosScalarWhereInput>>;
  OR?: Maybe<Array<ArticulosScalarWhereInput>>;
  NOT?: Maybe<Array<ArticulosScalarWhereInput>>;
  codigo?: Maybe<StringFilter>;
  orden?: Maybe<StringNullableFilter>;
  sku?: Maybe<StringNullableFilter>;
  descripcion?: Maybe<StringNullableFilter>;
  cant_add?: Maybe<FloatNullableFilter>;
  cantidad?: Maybe<FloatNullableFilter>;
  precio?: Maybe<FloatNullableFilter>;
  estatus?: Maybe<IntNullableFilter>;
  usuario?: Maybe<IntNullableFilter>;
  fecha_inicio?: Maybe<DateTimeNullableFilter>;
  fecha_final?: Maybe<DateTimeNullableFilter>;
  estatus_cant?: Maybe<StringNullableFilter>;
  estatus_cambio?: Maybe<IntNullableFilter>;
  tienda?: Maybe<StringNullableFilter>;
  depto?: Maybe<StringFilter>;
  fecha_asign?: Maybe<DateTimeFilter>;
  grupo?: Maybe<StringNullableFilter>;
  url?: Maybe<StringNullableFilter>;
  picking?: Maybe<IntNullableFilter>;
  delivery?: Maybe<StringNullableFilter>;
};

export type ArticulosUpdateManyDataInput = {
  codigo?: Maybe<StringFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  descripcion?: Maybe<NullableStringFieldUpdateOperationsInput>;
  cant_add?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  cantidad?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  precio?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  estatus?: Maybe<NullableIntFieldUpdateOperationsInput>;
  fecha_inicio?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  fecha_final?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  estatus_cant?: Maybe<NullableStringFieldUpdateOperationsInput>;
  estatus_cambio?: Maybe<NullableIntFieldUpdateOperationsInput>;
  tienda?: Maybe<NullableStringFieldUpdateOperationsInput>;
  depto?: Maybe<StringFieldUpdateOperationsInput>;
  fecha_asign?: Maybe<DateTimeFieldUpdateOperationsInput>;
  grupo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  picking?: Maybe<NullableIntFieldUpdateOperationsInput>;
  delivery?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type ArticulosUpdateManyWithoutOrdenesInput = {
  create?: Maybe<Array<ArticulosCreateWithoutOrdenesInput>>;
  connect?: Maybe<Array<ArticulosWhereUniqueInput>>;
  set?: Maybe<Array<ArticulosWhereUniqueInput>>;
  disconnect?: Maybe<Array<ArticulosWhereUniqueInput>>;
  delete?: Maybe<Array<ArticulosWhereUniqueInput>>;
  update?: Maybe<Array<ArticulosUpdateWithWhereUniqueWithoutOrdenesInput>>;
  updateMany?: Maybe<Array<ArticulosUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ArticulosScalarWhereInput>>;
  upsert?: Maybe<Array<ArticulosUpsertWithWhereUniqueWithoutOrdenesInput>>;
};

export type ArticulosUpdateManyWithoutUsuariosInput = {
  create?: Maybe<Array<ArticulosCreateWithoutUsuariosInput>>;
  connect?: Maybe<Array<ArticulosWhereUniqueInput>>;
  set?: Maybe<Array<ArticulosWhereUniqueInput>>;
  disconnect?: Maybe<Array<ArticulosWhereUniqueInput>>;
  delete?: Maybe<Array<ArticulosWhereUniqueInput>>;
  update?: Maybe<Array<ArticulosUpdateWithWhereUniqueWithoutUsuariosInput>>;
  updateMany?: Maybe<Array<ArticulosUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ArticulosScalarWhereInput>>;
  upsert?: Maybe<Array<ArticulosUpsertWithWhereUniqueWithoutUsuariosInput>>;
};

export type ArticulosUpdateManyWithWhereNestedInput = {
  where: ArticulosScalarWhereInput;
  data: ArticulosUpdateManyDataInput;
};

export type ArticulosUpdateWithoutOrdenesDataInput = {
  codigo?: Maybe<StringFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  descripcion?: Maybe<NullableStringFieldUpdateOperationsInput>;
  cant_add?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  cantidad?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  precio?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  estatus?: Maybe<NullableIntFieldUpdateOperationsInput>;
  fecha_inicio?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  fecha_final?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  estatus_cant?: Maybe<NullableStringFieldUpdateOperationsInput>;
  estatus_cambio?: Maybe<NullableIntFieldUpdateOperationsInput>;
  tienda?: Maybe<NullableStringFieldUpdateOperationsInput>;
  depto?: Maybe<StringFieldUpdateOperationsInput>;
  fecha_asign?: Maybe<DateTimeFieldUpdateOperationsInput>;
  grupo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  picking?: Maybe<NullableIntFieldUpdateOperationsInput>;
  delivery?: Maybe<NullableStringFieldUpdateOperationsInput>;
  usuarios?: Maybe<UsuariosUpdateOneWithoutArticulosInput>;
};

export type ArticulosUpdateWithoutUsuariosDataInput = {
  codigo?: Maybe<StringFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  descripcion?: Maybe<NullableStringFieldUpdateOperationsInput>;
  cant_add?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  cantidad?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  precio?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  estatus?: Maybe<NullableIntFieldUpdateOperationsInput>;
  fecha_inicio?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  fecha_final?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  estatus_cant?: Maybe<NullableStringFieldUpdateOperationsInput>;
  estatus_cambio?: Maybe<NullableIntFieldUpdateOperationsInput>;
  tienda?: Maybe<NullableStringFieldUpdateOperationsInput>;
  depto?: Maybe<StringFieldUpdateOperationsInput>;
  fecha_asign?: Maybe<DateTimeFieldUpdateOperationsInput>;
  grupo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  picking?: Maybe<NullableIntFieldUpdateOperationsInput>;
  delivery?: Maybe<NullableStringFieldUpdateOperationsInput>;
  ordenes?: Maybe<OrdenesUpdateOneWithoutArticulosInput>;
};

export type ArticulosUpdateWithWhereUniqueWithoutOrdenesInput = {
  where: ArticulosWhereUniqueInput;
  data: ArticulosUpdateWithoutOrdenesDataInput;
};

export type ArticulosUpdateWithWhereUniqueWithoutUsuariosInput = {
  where: ArticulosWhereUniqueInput;
  data: ArticulosUpdateWithoutUsuariosDataInput;
};

export type ArticulosUpsertWithWhereUniqueWithoutOrdenesInput = {
  where: ArticulosWhereUniqueInput;
  update: ArticulosUpdateWithoutOrdenesDataInput;
  create: ArticulosCreateWithoutOrdenesInput;
};

export type ArticulosUpsertWithWhereUniqueWithoutUsuariosInput = {
  where: ArticulosWhereUniqueInput;
  update: ArticulosUpdateWithoutUsuariosDataInput;
  create: ArticulosCreateWithoutUsuariosInput;
};

export type ArticulosWhereInput = {
  AND?: Maybe<Array<ArticulosWhereInput>>;
  OR?: Maybe<Array<ArticulosWhereInput>>;
  NOT?: Maybe<Array<ArticulosWhereInput>>;
  codigo?: Maybe<StringFilter>;
  orden?: Maybe<StringNullableFilter>;
  sku?: Maybe<StringNullableFilter>;
  descripcion?: Maybe<StringNullableFilter>;
  cant_add?: Maybe<FloatNullableFilter>;
  cantidad?: Maybe<FloatNullableFilter>;
  precio?: Maybe<FloatNullableFilter>;
  estatus?: Maybe<IntNullableFilter>;
  usuario?: Maybe<IntNullableFilter>;
  fecha_inicio?: Maybe<DateTimeNullableFilter>;
  fecha_final?: Maybe<DateTimeNullableFilter>;
  estatus_cant?: Maybe<StringNullableFilter>;
  estatus_cambio?: Maybe<IntNullableFilter>;
  tienda?: Maybe<StringNullableFilter>;
  depto?: Maybe<StringFilter>;
  fecha_asign?: Maybe<DateTimeFilter>;
  grupo?: Maybe<StringNullableFilter>;
  url?: Maybe<StringNullableFilter>;
  picking?: Maybe<IntNullableFilter>;
  delivery?: Maybe<StringNullableFilter>;
  ordenes?: Maybe<OrdenesWhereInput>;
  usuarios?: Maybe<UsuariosWhereInput>;
};

export type ArticulosWhereUniqueInput = {
  codigo?: Maybe<Scalars['String']>;
};

export type BoolNullableFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableFilter>;
};

export type Crear_Ticket_Cambio_Input = {
  factura: Scalars['String'];
  articulos: Array<Maybe<Articulos_Ticket_Cambio_Input>>;
};

export type Crear_Ticket_Cambio_Resultado = {
  __typename?: 'crear_ticket_cambio_resultado';
  mensaje?: Maybe<Scalars['String']>;
  error: Scalars['Boolean'];
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
};

export type Factura_Header_Ticket_Cambio = {
  __typename?: 'factura_header_ticket_cambio';
  usuario: Scalars['String'];
  nusuario: Scalars['String'];
  cliente?: Maybe<Scalars['String']>;
  cedula?: Maybe<Scalars['String']>;
  factura_afectada: Scalars['String'];
  ncf_afectado?: Maybe<Scalars['String']>;
  factura: Scalars['String'];
  fecha: Scalars['String'];
  hora?: Maybe<Scalars['String']>;
  ntienda: Scalars['String'];
  tienda: Scalars['String'];
};

export type FloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
};

export type IntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  decrement?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type LoginInput = {
  usuario: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResult = {
  __typename?: 'loginResult';
  mensaje?: Maybe<Scalars['String']>;
  error: Scalars['Boolean'];
  token?: Maybe<TokenResult>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Crea un ticket de cambio. */
  crear_ticket_cambio: Ticket_Cambio_Resultado;
  createOneusuarios: Usuarios;
  updateOneusuarios?: Maybe<Usuarios>;
  syncUsuario?: Maybe<Usuarios>;
  /** Elimina a un usuario por su codigo. */
  deleteOneusuarios?: Maybe<Usuarios>;
  login: LoginResult;
  getNewToken?: Maybe<TokenResult>;
};


export type MutationCrear_Ticket_CambioArgs = {
  input: Crear_Ticket_Cambio_Input;
};


export type MutationCreateOneusuariosArgs = {
  data: UsuariosCreateInput;
};


export type MutationUpdateOneusuariosArgs = {
  data: UsuariosUpdateInput;
  where: UsuariosWhereUniqueInput;
};


export type MutationSyncUsuarioArgs = {
  codigo: Scalars['Int'];
};


export type MutationDeleteOneusuariosArgs = {
  codigo: Scalars['Int'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationGetNewTokenArgs = {
  refreshToken: Scalars['String'];
};

export type NestedBoolNullableFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
};

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type NullableBoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Float']>;
  increment?: Maybe<Scalars['Float']>;
  decrement?: Maybe<Scalars['Float']>;
  multiply?: Maybe<Scalars['Float']>;
  divide?: Maybe<Scalars['Float']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  decrement?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Ordenes = {
  __typename?: 'ordenes';
  orden: Scalars['String'];
  tienda?: Maybe<Scalars['String']>;
  nombre?: Maybe<Scalars['String']>;
  apellidos?: Maybe<Scalars['String']>;
  direccion?: Maybe<Scalars['String']>;
  telefono?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  pais?: Maybe<Scalars['String']>;
  nota?: Maybe<Scalars['String']>;
  estatus: OrdenEstatus;
  fecha_registro?: Maybe<Scalars['DateTime']>;
  fecha_completada?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
  asignada?: Maybe<Scalars['Int']>;
  articulos_remplazo: Array<Articulos_Remplazo>;
  articulos: Array<Articulos>;
  /** Esto es una estimación aproximada. Por favor solo tomar como una referencia. */
  tiempo_estimado?: Maybe<Scalars['String']>;
};


export type OrdenesArticulos_RemplazoArgs = {
  where?: Maybe<Articulos_RemplazoWhereInput>;
  orderBy?: Maybe<Array<Articulos_RemplazoOrderByInput>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Articulos_RemplazoWhereUniqueInput>;
  after?: Maybe<Articulos_RemplazoWhereUniqueInput>;
};

export type Ordenes_En_ProcesosCreateManyWithoutOrdenesInput = {
  create?: Maybe<Array<Ordenes_En_ProcesosCreateWithoutOrdenesInput>>;
  connect?: Maybe<Array<Ordenes_En_ProcesosWhereUniqueInput>>;
};

export type Ordenes_En_ProcesosCreateManyWithoutUsuariosInput = {
  create?: Maybe<Array<Ordenes_En_ProcesosCreateWithoutUsuariosInput>>;
  connect?: Maybe<Array<Ordenes_En_ProcesosWhereUniqueInput>>;
};

export type Ordenes_En_ProcesosCreateWithoutOrdenesInput = {
  estatus?: Maybe<Scalars['Int']>;
  fecha_inicio?: Maybe<Scalars['DateTime']>;
  fecha_final?: Maybe<Scalars['DateTime']>;
  depto: Scalars['String'];
  tienda?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
  codigo: Scalars['String'];
  usuarios?: Maybe<UsuariosCreateOneWithoutOrdenes_En_ProcesosInput>;
};

export type Ordenes_En_ProcesosCreateWithoutUsuariosInput = {
  estatus?: Maybe<Scalars['Int']>;
  fecha_inicio?: Maybe<Scalars['DateTime']>;
  fecha_final?: Maybe<Scalars['DateTime']>;
  depto: Scalars['String'];
  tienda?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
  codigo: Scalars['String'];
  ordenes: OrdenesCreateOneWithoutOrdenes_En_ProcesosInput;
};

export type Ordenes_En_ProcesosListRelationFilter = {
  every?: Maybe<Ordenes_En_ProcesosWhereInput>;
  some?: Maybe<Ordenes_En_ProcesosWhereInput>;
  none?: Maybe<Ordenes_En_ProcesosWhereInput>;
};

export type Ordenes_En_ProcesosScalarWhereInput = {
  AND?: Maybe<Array<Ordenes_En_ProcesosScalarWhereInput>>;
  OR?: Maybe<Array<Ordenes_En_ProcesosScalarWhereInput>>;
  NOT?: Maybe<Array<Ordenes_En_ProcesosScalarWhereInput>>;
  orden?: Maybe<StringFilter>;
  usuario?: Maybe<IntNullableFilter>;
  estatus?: Maybe<IntNullableFilter>;
  fecha_inicio?: Maybe<DateTimeNullableFilter>;
  fecha_final?: Maybe<DateTimeNullableFilter>;
  depto?: Maybe<StringFilter>;
  tienda?: Maybe<StringNullableFilter>;
  total?: Maybe<FloatNullableFilter>;
  codigo?: Maybe<StringFilter>;
};

export type Ordenes_En_ProcesosUpdateManyDataInput = {
  estatus?: Maybe<NullableIntFieldUpdateOperationsInput>;
  fecha_inicio?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  fecha_final?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  depto?: Maybe<StringFieldUpdateOperationsInput>;
  tienda?: Maybe<NullableStringFieldUpdateOperationsInput>;
  total?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  codigo?: Maybe<StringFieldUpdateOperationsInput>;
};

export type Ordenes_En_ProcesosUpdateManyWithoutOrdenesInput = {
  create?: Maybe<Array<Ordenes_En_ProcesosCreateWithoutOrdenesInput>>;
  connect?: Maybe<Array<Ordenes_En_ProcesosWhereUniqueInput>>;
  set?: Maybe<Array<Ordenes_En_ProcesosWhereUniqueInput>>;
  disconnect?: Maybe<Array<Ordenes_En_ProcesosWhereUniqueInput>>;
  delete?: Maybe<Array<Ordenes_En_ProcesosWhereUniqueInput>>;
  update?: Maybe<Array<Ordenes_En_ProcesosUpdateWithWhereUniqueWithoutOrdenesInput>>;
  updateMany?: Maybe<Array<Ordenes_En_ProcesosUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<Ordenes_En_ProcesosScalarWhereInput>>;
  upsert?: Maybe<Array<Ordenes_En_ProcesosUpsertWithWhereUniqueWithoutOrdenesInput>>;
};

export type Ordenes_En_ProcesosUpdateManyWithoutUsuariosInput = {
  create?: Maybe<Array<Ordenes_En_ProcesosCreateWithoutUsuariosInput>>;
  connect?: Maybe<Array<Ordenes_En_ProcesosWhereUniqueInput>>;
  set?: Maybe<Array<Ordenes_En_ProcesosWhereUniqueInput>>;
  disconnect?: Maybe<Array<Ordenes_En_ProcesosWhereUniqueInput>>;
  delete?: Maybe<Array<Ordenes_En_ProcesosWhereUniqueInput>>;
  update?: Maybe<Array<Ordenes_En_ProcesosUpdateWithWhereUniqueWithoutUsuariosInput>>;
  updateMany?: Maybe<Array<Ordenes_En_ProcesosUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<Ordenes_En_ProcesosScalarWhereInput>>;
  upsert?: Maybe<Array<Ordenes_En_ProcesosUpsertWithWhereUniqueWithoutUsuariosInput>>;
};

export type Ordenes_En_ProcesosUpdateManyWithWhereNestedInput = {
  where: Ordenes_En_ProcesosScalarWhereInput;
  data: Ordenes_En_ProcesosUpdateManyDataInput;
};

export type Ordenes_En_ProcesosUpdateWithoutOrdenesDataInput = {
  estatus?: Maybe<NullableIntFieldUpdateOperationsInput>;
  fecha_inicio?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  fecha_final?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  depto?: Maybe<StringFieldUpdateOperationsInput>;
  tienda?: Maybe<NullableStringFieldUpdateOperationsInput>;
  total?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  codigo?: Maybe<StringFieldUpdateOperationsInput>;
  usuarios?: Maybe<UsuariosUpdateOneWithoutOrdenes_En_ProcesosInput>;
};

export type Ordenes_En_ProcesosUpdateWithoutUsuariosDataInput = {
  estatus?: Maybe<NullableIntFieldUpdateOperationsInput>;
  fecha_inicio?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  fecha_final?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  depto?: Maybe<StringFieldUpdateOperationsInput>;
  tienda?: Maybe<NullableStringFieldUpdateOperationsInput>;
  total?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  codigo?: Maybe<StringFieldUpdateOperationsInput>;
  ordenes?: Maybe<OrdenesUpdateOneRequiredWithoutOrdenes_En_ProcesosInput>;
};

export type Ordenes_En_ProcesosUpdateWithWhereUniqueWithoutOrdenesInput = {
  where: Ordenes_En_ProcesosWhereUniqueInput;
  data: Ordenes_En_ProcesosUpdateWithoutOrdenesDataInput;
};

export type Ordenes_En_ProcesosUpdateWithWhereUniqueWithoutUsuariosInput = {
  where: Ordenes_En_ProcesosWhereUniqueInput;
  data: Ordenes_En_ProcesosUpdateWithoutUsuariosDataInput;
};

export type Ordenes_En_ProcesosUpsertWithWhereUniqueWithoutOrdenesInput = {
  where: Ordenes_En_ProcesosWhereUniqueInput;
  update: Ordenes_En_ProcesosUpdateWithoutOrdenesDataInput;
  create: Ordenes_En_ProcesosCreateWithoutOrdenesInput;
};

export type Ordenes_En_ProcesosUpsertWithWhereUniqueWithoutUsuariosInput = {
  where: Ordenes_En_ProcesosWhereUniqueInput;
  update: Ordenes_En_ProcesosUpdateWithoutUsuariosDataInput;
  create: Ordenes_En_ProcesosCreateWithoutUsuariosInput;
};

export type Ordenes_En_ProcesosWhereInput = {
  AND?: Maybe<Array<Ordenes_En_ProcesosWhereInput>>;
  OR?: Maybe<Array<Ordenes_En_ProcesosWhereInput>>;
  NOT?: Maybe<Array<Ordenes_En_ProcesosWhereInput>>;
  orden?: Maybe<StringFilter>;
  usuario?: Maybe<IntNullableFilter>;
  estatus?: Maybe<IntNullableFilter>;
  fecha_inicio?: Maybe<DateTimeNullableFilter>;
  fecha_final?: Maybe<DateTimeNullableFilter>;
  depto?: Maybe<StringFilter>;
  tienda?: Maybe<StringNullableFilter>;
  total?: Maybe<FloatNullableFilter>;
  codigo?: Maybe<StringFilter>;
  ordenes?: Maybe<OrdenesWhereInput>;
  usuarios?: Maybe<UsuariosWhereInput>;
};

export type Ordenes_En_ProcesosWhereUniqueInput = {
  codigo?: Maybe<Scalars['String']>;
};

export type OrdenesCreateOneWithoutArticulosInput = {
  create?: Maybe<OrdenesCreateWithoutArticulosInput>;
  connect?: Maybe<OrdenesWhereUniqueInput>;
};

export type OrdenesCreateOneWithoutOrdenes_En_ProcesosInput = {
  create?: Maybe<OrdenesCreateWithoutOrdenes_En_ProcesosInput>;
  connect?: Maybe<OrdenesWhereUniqueInput>;
};

export type OrdenesCreateWithoutArticulosInput = {
  orden: Scalars['String'];
  nombre?: Maybe<Scalars['String']>;
  apellidos?: Maybe<Scalars['String']>;
  direccion?: Maybe<Scalars['String']>;
  telefono?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  ciudad?: Maybe<Scalars['String']>;
  pais?: Maybe<Scalars['String']>;
  nota?: Maybe<Scalars['String']>;
  estatus?: Maybe<Scalars['Int']>;
  fecha_registro?: Maybe<Scalars['DateTime']>;
  fecha_completada?: Maybe<Scalars['DateTime']>;
  tienda?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  asignada?: Maybe<Scalars['Int']>;
  completada?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Float']>;
  porciento?: Maybe<Scalars['Float']>;
  cancelada?: Maybe<Scalars['Int']>;
  articulos_remplazo?: Maybe<Articulos_RemplazoCreateManyWithoutOrdenesInput>;
  ordenes_en_procesos?: Maybe<Ordenes_En_ProcesosCreateManyWithoutOrdenesInput>;
};

export type OrdenesCreateWithoutOrdenes_En_ProcesosInput = {
  orden: Scalars['String'];
  nombre?: Maybe<Scalars['String']>;
  apellidos?: Maybe<Scalars['String']>;
  direccion?: Maybe<Scalars['String']>;
  telefono?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  ciudad?: Maybe<Scalars['String']>;
  pais?: Maybe<Scalars['String']>;
  nota?: Maybe<Scalars['String']>;
  estatus?: Maybe<Scalars['Int']>;
  fecha_registro?: Maybe<Scalars['DateTime']>;
  fecha_completada?: Maybe<Scalars['DateTime']>;
  tienda?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  asignada?: Maybe<Scalars['Int']>;
  completada?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Float']>;
  porciento?: Maybe<Scalars['Float']>;
  cancelada?: Maybe<Scalars['Int']>;
  articulos?: Maybe<ArticulosCreateManyWithoutOrdenesInput>;
  articulos_remplazo?: Maybe<Articulos_RemplazoCreateManyWithoutOrdenesInput>;
};

export type OrdenesOrderByInput = {
  orden?: Maybe<SortOrder>;
  nombre?: Maybe<SortOrder>;
  apellidos?: Maybe<SortOrder>;
  direccion?: Maybe<SortOrder>;
  telefono?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  ciudad?: Maybe<SortOrder>;
  pais?: Maybe<SortOrder>;
  nota?: Maybe<SortOrder>;
  estatus?: Maybe<SortOrder>;
  fecha_registro?: Maybe<SortOrder>;
  fecha_completada?: Maybe<SortOrder>;
  tienda?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  asignada?: Maybe<SortOrder>;
  completada?: Maybe<SortOrder>;
  total?: Maybe<SortOrder>;
  porciento?: Maybe<SortOrder>;
  cancelada?: Maybe<SortOrder>;
};

/** El estatus de la orden. */
export enum OrdenEstatus {
  Pendiente = 'PENDIENTE',
  Cancelada = 'CANCELADA',
  Completada = 'COMPLETADA',
  CompletadaParcial = 'COMPLETADA_PARCIAL'
}

export type OrdenesUpdateOneRequiredWithoutOrdenes_En_ProcesosInput = {
  create?: Maybe<OrdenesCreateWithoutOrdenes_En_ProcesosInput>;
  connect?: Maybe<OrdenesWhereUniqueInput>;
  update?: Maybe<OrdenesUpdateWithoutOrdenes_En_ProcesosDataInput>;
  upsert?: Maybe<OrdenesUpsertWithoutOrdenes_En_ProcesosInput>;
};

export type OrdenesUpdateOneWithoutArticulosInput = {
  create?: Maybe<OrdenesCreateWithoutArticulosInput>;
  connect?: Maybe<OrdenesWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<OrdenesUpdateWithoutArticulosDataInput>;
  upsert?: Maybe<OrdenesUpsertWithoutArticulosInput>;
};

export type OrdenesUpdateWithoutArticulosDataInput = {
  orden?: Maybe<StringFieldUpdateOperationsInput>;
  nombre?: Maybe<NullableStringFieldUpdateOperationsInput>;
  apellidos?: Maybe<NullableStringFieldUpdateOperationsInput>;
  direccion?: Maybe<NullableStringFieldUpdateOperationsInput>;
  telefono?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  ciudad?: Maybe<NullableStringFieldUpdateOperationsInput>;
  pais?: Maybe<NullableStringFieldUpdateOperationsInput>;
  nota?: Maybe<NullableStringFieldUpdateOperationsInput>;
  estatus?: Maybe<NullableIntFieldUpdateOperationsInput>;
  fecha_registro?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  fecha_completada?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  tienda?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  asignada?: Maybe<NullableIntFieldUpdateOperationsInput>;
  completada?: Maybe<NullableIntFieldUpdateOperationsInput>;
  total?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  porciento?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  cancelada?: Maybe<NullableIntFieldUpdateOperationsInput>;
  articulos_remplazo?: Maybe<Articulos_RemplazoUpdateManyWithoutOrdenesInput>;
  ordenes_en_procesos?: Maybe<Ordenes_En_ProcesosUpdateManyWithoutOrdenesInput>;
};

export type OrdenesUpdateWithoutOrdenes_En_ProcesosDataInput = {
  orden?: Maybe<StringFieldUpdateOperationsInput>;
  nombre?: Maybe<NullableStringFieldUpdateOperationsInput>;
  apellidos?: Maybe<NullableStringFieldUpdateOperationsInput>;
  direccion?: Maybe<NullableStringFieldUpdateOperationsInput>;
  telefono?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  ciudad?: Maybe<NullableStringFieldUpdateOperationsInput>;
  pais?: Maybe<NullableStringFieldUpdateOperationsInput>;
  nota?: Maybe<NullableStringFieldUpdateOperationsInput>;
  estatus?: Maybe<NullableIntFieldUpdateOperationsInput>;
  fecha_registro?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  fecha_completada?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  tienda?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  asignada?: Maybe<NullableIntFieldUpdateOperationsInput>;
  completada?: Maybe<NullableIntFieldUpdateOperationsInput>;
  total?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  porciento?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  cancelada?: Maybe<NullableIntFieldUpdateOperationsInput>;
  articulos?: Maybe<ArticulosUpdateManyWithoutOrdenesInput>;
  articulos_remplazo?: Maybe<Articulos_RemplazoUpdateManyWithoutOrdenesInput>;
};

export type OrdenesUpsertWithoutArticulosInput = {
  update: OrdenesUpdateWithoutArticulosDataInput;
  create: OrdenesCreateWithoutArticulosInput;
};

export type OrdenesUpsertWithoutOrdenes_En_ProcesosInput = {
  update: OrdenesUpdateWithoutOrdenes_En_ProcesosDataInput;
  create: OrdenesCreateWithoutOrdenes_En_ProcesosInput;
};

export type OrdenesWhereInput = {
  AND?: Maybe<Array<OrdenesWhereInput>>;
  OR?: Maybe<Array<OrdenesWhereInput>>;
  NOT?: Maybe<Array<OrdenesWhereInput>>;
  orden?: Maybe<StringFilter>;
  nombre?: Maybe<StringNullableFilter>;
  apellidos?: Maybe<StringNullableFilter>;
  direccion?: Maybe<StringNullableFilter>;
  telefono?: Maybe<StringNullableFilter>;
  email?: Maybe<StringNullableFilter>;
  ciudad?: Maybe<StringNullableFilter>;
  pais?: Maybe<StringNullableFilter>;
  nota?: Maybe<StringNullableFilter>;
  estatus?: Maybe<IntNullableFilter>;
  fecha_registro?: Maybe<DateTimeNullableFilter>;
  fecha_completada?: Maybe<DateTimeNullableFilter>;
  tienda?: Maybe<StringNullableFilter>;
  id?: Maybe<StringNullableFilter>;
  asignada?: Maybe<IntNullableFilter>;
  completada?: Maybe<IntNullableFilter>;
  total?: Maybe<FloatNullableFilter>;
  porciento?: Maybe<FloatNullableFilter>;
  cancelada?: Maybe<IntNullableFilter>;
  articulos?: Maybe<ArticulosListRelationFilter>;
  articulos_remplazo?: Maybe<Articulos_RemplazoListRelationFilter>;
  ordenes_en_procesos?: Maybe<Ordenes_En_ProcesosListRelationFilter>;
};

export type OrdenesWhereUniqueInput = {
  orden?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** Las categorias de los permisos. */
export enum PermisoCategorias {
  Tienda = 'TIENDA',
  Admin = 'ADMIN',
  Na = 'NA'
}

/** Permisos del sistema */
export type Permisos = {
  __typename?: 'permisos';
  codigo: Scalars['Int'];
  codigo_padre?: Maybe<Scalars['Int']>;
  nombre: Scalars['String'];
  categoria: PermisoCategorias;
  descripcion: Scalars['String'];
};

export type PermisosCreateOneWithoutUsuarios_PermisosInput = {
  create?: Maybe<PermisosCreateWithoutUsuarios_PermisosInput>;
  connect?: Maybe<PermisosWhereUniqueInput>;
};

export type PermisosCreateWithoutUsuarios_PermisosInput = {
  codigo: Scalars['Int'];
  nombre: Scalars['String'];
  codigo_padre?: Maybe<Scalars['Int']>;
  descripcion?: Maybe<Scalars['String']>;
  categoria?: Maybe<Scalars['String']>;
};

export type PermisosOrderByInput = {
  codigo?: Maybe<SortOrder>;
  nombre?: Maybe<SortOrder>;
  codigo_padre?: Maybe<SortOrder>;
  descripcion?: Maybe<SortOrder>;
  categoria?: Maybe<SortOrder>;
};

export type PermisosUpdateOneRequiredWithoutUsuarios_PermisosInput = {
  create?: Maybe<PermisosCreateWithoutUsuarios_PermisosInput>;
  connect?: Maybe<PermisosWhereUniqueInput>;
  update?: Maybe<PermisosUpdateWithoutUsuarios_PermisosDataInput>;
  upsert?: Maybe<PermisosUpsertWithoutUsuarios_PermisosInput>;
};

export type PermisosUpdateWithoutUsuarios_PermisosDataInput = {
  codigo?: Maybe<IntFieldUpdateOperationsInput>;
  nombre?: Maybe<StringFieldUpdateOperationsInput>;
  codigo_padre?: Maybe<NullableIntFieldUpdateOperationsInput>;
  descripcion?: Maybe<NullableStringFieldUpdateOperationsInput>;
  categoria?: Maybe<StringFieldUpdateOperationsInput>;
};

export type PermisosUpsertWithoutUsuarios_PermisosInput = {
  update: PermisosUpdateWithoutUsuarios_PermisosDataInput;
  create: PermisosCreateWithoutUsuarios_PermisosInput;
};

export type PermisosWhereInput = {
  AND?: Maybe<Array<PermisosWhereInput>>;
  OR?: Maybe<Array<PermisosWhereInput>>;
  NOT?: Maybe<Array<PermisosWhereInput>>;
  codigo?: Maybe<IntFilter>;
  nombre?: Maybe<StringFilter>;
  codigo_padre?: Maybe<IntNullableFilter>;
  descripcion?: Maybe<StringNullableFilter>;
  categoria?: Maybe<StringFilter>;
  usuarios_permisos?: Maybe<Usuarios_PermisosListRelationFilter>;
};

export type PermisosWhereUniqueInput = {
  codigo?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  articulos: Array<Articulos>;
  articulos_remplazo: Array<Articulos_Remplazo>;
  isDarkTheme: Scalars['Boolean'];
  isLoggedIn: Scalars['Boolean'];
  loadingBarStatus: Scalars['Int'];
  ordenes: Array<Ordenes>;
  permisos: Array<Permisos>;
  permisosSession: Viewier_Permisos;
  sidebarShow: Scalars['stringOrBoolean'];
  /** Consulta el ticket de cambio. */
  tickets_cambio: Ticket_Cambio_Resultado;
  tiendas: Array<Tiendas>;
  usuarios: Array<Usuarios>;
  /** Consulta un usuario en PL Intranet. */
  usuarios_intranet?: Maybe<Usuarios_Intranet>;
  viewier?: Maybe<Viewier>;
};


export type QueryArticulos_RemplazoArgs = {
  where?: Maybe<Articulos_RemplazoWhereInput>;
  orderBy?: Maybe<Array<Articulos_RemplazoOrderByInput>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Articulos_RemplazoWhereUniqueInput>;
  after?: Maybe<Articulos_RemplazoWhereUniqueInput>;
};


export type QueryOrdenesArgs = {
  where?: Maybe<OrdenesWhereInput>;
  orderBy?: Maybe<Array<OrdenesOrderByInput>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<OrdenesWhereUniqueInput>;
  after?: Maybe<OrdenesWhereUniqueInput>;
};


export type QueryPermisosArgs = {
  where?: Maybe<PermisosWhereInput>;
  orderBy?: Maybe<Array<PermisosOrderByInput>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<PermisosWhereUniqueInput>;
  after?: Maybe<PermisosWhereUniqueInput>;
};


export type QueryTickets_CambioArgs = {
  factura: Scalars['String'];
};


export type QueryUsuariosArgs = {
  where?: Maybe<UsuariosWhereInput>;
  orderBy?: Maybe<Array<UsuariosOrderByInput>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<UsuariosWhereUniqueInput>;
  after?: Maybe<UsuariosWhereUniqueInput>;
};


export type QueryUsuarios_IntranetArgs = {
  usuario: Scalars['String'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};


export type Ticket_Cambio_Resultado = {
  __typename?: 'ticket_cambio_resultado';
  mensaje?: Maybe<Scalars['String']>;
  error: Scalars['Boolean'];
  tickets_cambio?: Maybe<Array<Maybe<Tickets_Cambio>>>;
};

/** Informacion para ticket de cambio. */
export type Tickets_Cambio = {
  __typename?: 'tickets_cambio';
  ID: Scalars['String'];
  NCF?: Maybe<Scalars['String']>;
  TIPO?: Maybe<Scalars['String']>;
  FECHA?: Maybe<Scalars['String']>;
  CAJERA?: Maybe<Scalars['String']>;
  SUCURSAL?: Maybe<Scalars['String']>;
  EAN: Scalars['String'];
  CANT: Scalars['Int'];
  PRECIO: Scalars['Float'];
  TOTAL: Scalars['Float'];
  TOTAL_FACT?: Maybe<Scalars['Float']>;
  DESCRIPCION: Scalars['String'];
  TIPO_NCF?: Maybe<Scalars['String']>;
  FACTURA: Scalars['String'];
  CLIENTE: Scalars['String'];
  CEDULA?: Maybe<Scalars['String']>;
};

export type Tiendas = {
  __typename?: 'tiendas';
  pl: Scalars['String'];
  stock?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  estatus?: Maybe<Scalars['Int']>;
};


export type TokenResult = {
  __typename?: 'tokenResult';
  token: Scalars['String'];
  refreshToken: Scalars['String'];
  refreshTokenLifetime: Scalars['Time'];
  tokenType: Scalars['String'];
  viewier: Viewier;
  tokenLifetime: Scalars['Time'];
};

export type UsuarioPermisoCompoundUniqueInput = {
  usuario: Scalars['Int'];
  permiso: Scalars['Int'];
};

export type Usuarios = {
  __typename?: 'usuarios';
  codigo: Scalars['Int'];
  nombre?: Maybe<Scalars['String']>;
  depto?: Maybe<Scalars['String']>;
  tienda?: Maybe<Scalars['String']>;
  turno?: Maybe<Scalars['String']>;
  fecha_creacion?: Maybe<Scalars['DateTime']>;
  fecha_edicion?: Maybe<Scalars['DateTime']>;
  estado?: Maybe<Scalars['Boolean']>;
  /** Permisos del usuario */
  permisos: Array<Permisos>;
};

/** Usuario desde PL Intranet. */
export type Usuarios_Intranet = {
  __typename?: 'usuarios_intranet';
  codigo: Scalars['String'];
  usuario: Scalars['String'];
  estatus: Scalars['String'];
  nombre: Scalars['String'];
  apellido: Scalars['String'];
  tienda: Scalars['String'];
  cargo: Scalars['String'];
  isOnSystem: Scalars['Boolean'];
};

export type Usuarios_Permisos = {
  __typename?: 'usuarios_permisos';
  permisos: Permisos;
};

export type Usuarios_PermisosCreateManyWithoutUsuariosInput = {
  create?: Maybe<Array<Usuarios_PermisosCreateWithoutUsuariosInput>>;
  connect?: Maybe<Array<Usuarios_PermisosWhereUniqueInput>>;
};

export type Usuarios_PermisosCreateWithoutUsuariosInput = {
  permisos: PermisosCreateOneWithoutUsuarios_PermisosInput;
};

export type Usuarios_PermisosListRelationFilter = {
  every?: Maybe<Usuarios_PermisosWhereInput>;
  some?: Maybe<Usuarios_PermisosWhereInput>;
  none?: Maybe<Usuarios_PermisosWhereInput>;
};

export type Usuarios_PermisosScalarWhereInput = {
  AND?: Maybe<Array<Usuarios_PermisosScalarWhereInput>>;
  OR?: Maybe<Array<Usuarios_PermisosScalarWhereInput>>;
  NOT?: Maybe<Array<Usuarios_PermisosScalarWhereInput>>;
  usuario?: Maybe<IntFilter>;
  permiso?: Maybe<IntFilter>;
};

export type Usuarios_PermisosUpdateManyDataInput = {
  _?: Maybe<Scalars['Int']>;
};

export type Usuarios_PermisosUpdateManyWithoutUsuariosInput = {
  create?: Maybe<Array<Usuarios_PermisosCreateWithoutUsuariosInput>>;
  connect?: Maybe<Array<Usuarios_PermisosWhereUniqueInput>>;
  set?: Maybe<Array<Usuarios_PermisosWhereUniqueInput>>;
  disconnect?: Maybe<Array<Usuarios_PermisosWhereUniqueInput>>;
  delete?: Maybe<Array<Usuarios_PermisosWhereUniqueInput>>;
  update?: Maybe<Array<Usuarios_PermisosUpdateWithWhereUniqueWithoutUsuariosInput>>;
  updateMany?: Maybe<Array<Usuarios_PermisosUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<Usuarios_PermisosScalarWhereInput>>;
  upsert?: Maybe<Array<Usuarios_PermisosUpsertWithWhereUniqueWithoutUsuariosInput>>;
};

export type Usuarios_PermisosUpdateManyWithWhereNestedInput = {
  where: Usuarios_PermisosScalarWhereInput;
  data: Usuarios_PermisosUpdateManyDataInput;
};

export type Usuarios_PermisosUpdateWithoutUsuariosDataInput = {
  permisos?: Maybe<PermisosUpdateOneRequiredWithoutUsuarios_PermisosInput>;
};

export type Usuarios_PermisosUpdateWithWhereUniqueWithoutUsuariosInput = {
  where: Usuarios_PermisosWhereUniqueInput;
  data: Usuarios_PermisosUpdateWithoutUsuariosDataInput;
};

export type Usuarios_PermisosUpsertWithWhereUniqueWithoutUsuariosInput = {
  where: Usuarios_PermisosWhereUniqueInput;
  update: Usuarios_PermisosUpdateWithoutUsuariosDataInput;
  create: Usuarios_PermisosCreateWithoutUsuariosInput;
};

export type Usuarios_PermisosWhereInput = {
  AND?: Maybe<Array<Usuarios_PermisosWhereInput>>;
  OR?: Maybe<Array<Usuarios_PermisosWhereInput>>;
  NOT?: Maybe<Array<Usuarios_PermisosWhereInput>>;
  usuario?: Maybe<IntFilter>;
  permiso?: Maybe<IntFilter>;
  permisos?: Maybe<PermisosWhereInput>;
  usuarios?: Maybe<UsuariosWhereInput>;
};

export type Usuarios_PermisosWhereUniqueInput = {
  usuario_permiso?: Maybe<UsuarioPermisoCompoundUniqueInput>;
};

export type UsuariosCreateInput = {
  codigo: Scalars['Int'];
  depto?: Maybe<Scalars['String']>;
  tienda?: Maybe<Scalars['String']>;
  turno?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['Boolean']>;
  fecha_creacion?: Maybe<Scalars['DateTime']>;
  fecha_edicion?: Maybe<Scalars['DateTime']>;
  nombre?: Maybe<Scalars['String']>;
  articulos?: Maybe<ArticulosCreateManyWithoutUsuariosInput>;
  ordenes_en_procesos?: Maybe<Ordenes_En_ProcesosCreateManyWithoutUsuariosInput>;
  usuarios_permisos?: Maybe<Usuarios_PermisosCreateManyWithoutUsuariosInput>;
};

export type UsuariosCreateOneWithoutArticulosInput = {
  create?: Maybe<UsuariosCreateWithoutArticulosInput>;
  connect?: Maybe<UsuariosWhereUniqueInput>;
};

export type UsuariosCreateOneWithoutOrdenes_En_ProcesosInput = {
  create?: Maybe<UsuariosCreateWithoutOrdenes_En_ProcesosInput>;
  connect?: Maybe<UsuariosWhereUniqueInput>;
};

export type UsuariosCreateWithoutArticulosInput = {
  codigo: Scalars['Int'];
  depto?: Maybe<Scalars['String']>;
  tienda?: Maybe<Scalars['String']>;
  turno?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['Boolean']>;
  fecha_creacion?: Maybe<Scalars['DateTime']>;
  fecha_edicion?: Maybe<Scalars['DateTime']>;
  nombre?: Maybe<Scalars['String']>;
  ordenes_en_procesos?: Maybe<Ordenes_En_ProcesosCreateManyWithoutUsuariosInput>;
  usuarios_permisos?: Maybe<Usuarios_PermisosCreateManyWithoutUsuariosInput>;
};

export type UsuariosCreateWithoutOrdenes_En_ProcesosInput = {
  codigo: Scalars['Int'];
  depto?: Maybe<Scalars['String']>;
  tienda?: Maybe<Scalars['String']>;
  turno?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['Boolean']>;
  fecha_creacion?: Maybe<Scalars['DateTime']>;
  fecha_edicion?: Maybe<Scalars['DateTime']>;
  nombre?: Maybe<Scalars['String']>;
  articulos?: Maybe<ArticulosCreateManyWithoutUsuariosInput>;
  usuarios_permisos?: Maybe<Usuarios_PermisosCreateManyWithoutUsuariosInput>;
};

export type UsuariosOrderByInput = {
  codigo?: Maybe<SortOrder>;
  depto?: Maybe<SortOrder>;
  tienda?: Maybe<SortOrder>;
  turno?: Maybe<SortOrder>;
  estado?: Maybe<SortOrder>;
  fecha_creacion?: Maybe<SortOrder>;
  fecha_edicion?: Maybe<SortOrder>;
  nombre?: Maybe<SortOrder>;
};

export type UsuariosUpdateInput = {
  codigo?: Maybe<IntFieldUpdateOperationsInput>;
  depto?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tienda?: Maybe<NullableStringFieldUpdateOperationsInput>;
  turno?: Maybe<NullableStringFieldUpdateOperationsInput>;
  estado?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  fecha_creacion?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  fecha_edicion?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  nombre?: Maybe<NullableStringFieldUpdateOperationsInput>;
  articulos?: Maybe<ArticulosUpdateManyWithoutUsuariosInput>;
  ordenes_en_procesos?: Maybe<Ordenes_En_ProcesosUpdateManyWithoutUsuariosInput>;
  usuarios_permisos?: Maybe<Usuarios_PermisosUpdateManyWithoutUsuariosInput>;
};

export type UsuariosUpdateOneWithoutArticulosInput = {
  create?: Maybe<UsuariosCreateWithoutArticulosInput>;
  connect?: Maybe<UsuariosWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UsuariosUpdateWithoutArticulosDataInput>;
  upsert?: Maybe<UsuariosUpsertWithoutArticulosInput>;
};

export type UsuariosUpdateOneWithoutOrdenes_En_ProcesosInput = {
  create?: Maybe<UsuariosCreateWithoutOrdenes_En_ProcesosInput>;
  connect?: Maybe<UsuariosWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UsuariosUpdateWithoutOrdenes_En_ProcesosDataInput>;
  upsert?: Maybe<UsuariosUpsertWithoutOrdenes_En_ProcesosInput>;
};

export type UsuariosUpdateWithoutArticulosDataInput = {
  codigo?: Maybe<IntFieldUpdateOperationsInput>;
  depto?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tienda?: Maybe<NullableStringFieldUpdateOperationsInput>;
  turno?: Maybe<NullableStringFieldUpdateOperationsInput>;
  estado?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  fecha_creacion?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  fecha_edicion?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  nombre?: Maybe<NullableStringFieldUpdateOperationsInput>;
  ordenes_en_procesos?: Maybe<Ordenes_En_ProcesosUpdateManyWithoutUsuariosInput>;
  usuarios_permisos?: Maybe<Usuarios_PermisosUpdateManyWithoutUsuariosInput>;
};

export type UsuariosUpdateWithoutOrdenes_En_ProcesosDataInput = {
  codigo?: Maybe<IntFieldUpdateOperationsInput>;
  depto?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tienda?: Maybe<NullableStringFieldUpdateOperationsInput>;
  turno?: Maybe<NullableStringFieldUpdateOperationsInput>;
  estado?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  fecha_creacion?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  fecha_edicion?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  nombre?: Maybe<NullableStringFieldUpdateOperationsInput>;
  articulos?: Maybe<ArticulosUpdateManyWithoutUsuariosInput>;
  usuarios_permisos?: Maybe<Usuarios_PermisosUpdateManyWithoutUsuariosInput>;
};

export type UsuariosUpsertWithoutArticulosInput = {
  update: UsuariosUpdateWithoutArticulosDataInput;
  create: UsuariosCreateWithoutArticulosInput;
};

export type UsuariosUpsertWithoutOrdenes_En_ProcesosInput = {
  update: UsuariosUpdateWithoutOrdenes_En_ProcesosDataInput;
  create: UsuariosCreateWithoutOrdenes_En_ProcesosInput;
};

export type UsuariosWhereInput = {
  AND?: Maybe<Array<UsuariosWhereInput>>;
  OR?: Maybe<Array<UsuariosWhereInput>>;
  NOT?: Maybe<Array<UsuariosWhereInput>>;
  codigo?: Maybe<IntFilter>;
  depto?: Maybe<StringNullableFilter>;
  tienda?: Maybe<StringNullableFilter>;
  turno?: Maybe<StringNullableFilter>;
  estado?: Maybe<BoolNullableFilter>;
  fecha_creacion?: Maybe<DateTimeNullableFilter>;
  fecha_edicion?: Maybe<DateTimeNullableFilter>;
  nombre?: Maybe<StringNullableFilter>;
  articulos?: Maybe<ArticulosListRelationFilter>;
  ordenes_en_procesos?: Maybe<Ordenes_En_ProcesosListRelationFilter>;
  usuarios_permisos?: Maybe<Usuarios_PermisosListRelationFilter>;
};

export type UsuariosWhereUniqueInput = {
  codigo?: Maybe<Scalars['Int']>;
};

/** Consulta el usuario que esta usando la aplicación. */
export type Viewier = {
  __typename?: 'viewier';
  usuario: Scalars['String'];
  codigo: Scalars['String'];
  tienda: Scalars['String'];
  turno: Scalars['String'];
  nombre_completo: Scalars['String'];
  permisos: Viewier_Permisos;
};

/** Permisos organizados por categoria. */
export type Viewier_Permisos = {
  __typename?: 'viewier_permisos';
  tienda: Array<Scalars['String']>;
  admin: Array<Scalars['String']>;
};

export type GetSideBarShowQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSideBarShowQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'sidebarShow'>
);

export type GetLoadingBarStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLoadingBarStatusQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'loadingBarStatus'>
);

export type GetLoginStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLoginStatusQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'isLoggedIn'>
);

export type GetPermisosSessionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPermisosSessionQuery = (
  { __typename?: 'Query' }
  & { permisosSession: (
    { __typename?: 'viewier_permisos' }
    & Pick<Viewier_Permisos, 'tienda' | 'admin'>
  ) }
);

export type GetSessionInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSessionInfoQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'isLoggedIn'>
  & { permisosSession: (
    { __typename?: 'viewier_permisos' }
    & Pick<Viewier_Permisos, 'tienda' | 'admin'>
  ) }
);

export type LoginUserMutationVariables = Exact<{
  usuario: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginUserMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'loginResult' }
    & Pick<LoginResult, 'mensaje' | 'error'>
    & { token?: Maybe<(
      { __typename?: 'tokenResult' }
      & Pick<TokenResult, 'token' | 'tokenType' | 'refreshToken'>
      & { viewier: (
        { __typename?: 'viewier' }
        & Pick<Viewier, 'usuario' | 'codigo' | 'tienda' | 'turno'>
        & { permisos: (
          { __typename?: 'viewier_permisos' }
          & Pick<Viewier_Permisos, 'tienda' | 'admin'>
        ) }
      ) }
    )> }
  ) }
);

export type GetOrdenesQueryVariables = Exact<{
  first: Scalars['Int'];
  after?: Maybe<OrdenesWhereUniqueInput>;
  orderBy?: Maybe<Array<OrdenesOrderByInput>>;
  where?: Maybe<OrdenesWhereInput>;
}>;


export type GetOrdenesQuery = (
  { __typename?: 'Query' }
  & { ordenes: Array<(
    { __typename?: 'ordenes' }
    & Pick<Ordenes, 'fecha_registro' | 'orden' | 'estatus' | 'tienda' | 'total'>
  )> }
);

export type GetOrdenQueryVariables = Exact<{
  orden: Scalars['String'];
}>;


export type GetOrdenQuery = (
  { __typename?: 'Query' }
  & { ordenes: Array<(
    { __typename?: 'ordenes' }
    & Pick<Ordenes, 'orden' | 'nota' | 'nombre' | 'apellidos' | 'estatus' | 'fecha_completada' | 'tiempo_estimado' | 'total'>
    & { articulos: Array<(
      { __typename?: 'articulos' }
      & Pick<Articulos, 'codigo' | 'sku' | 'cantidad' | 'cant_add' | 'descripcion' | 'depto' | 'estatus' | 'total' | 'picking' | 'precio'>
      & { remplazo?: Maybe<(
        { __typename?: 'articulos_remplazo' }
        & Pick<Articulos_Remplazo, 'codigo' | 'cantidad' | 'precio' | 'o_sku' | 'descripcion' | 'total'>
      )> }
    )> }
  )> }
);

export type GetTicketQueryVariables = Exact<{
  factura: Scalars['String'];
}>;


export type GetTicketQuery = (
  { __typename?: 'Query' }
  & { tickets_cambio: (
    { __typename?: 'ticket_cambio_resultado' }
    & Pick<Ticket_Cambio_Resultado, 'mensaje' | 'error'>
    & { tickets_cambio?: Maybe<Array<Maybe<(
      { __typename?: 'tickets_cambio' }
      & Pick<Tickets_Cambio, 'ID' | 'NCF' | 'EAN' | 'FECHA' | 'FACTURA' | 'TOTAL_FACT' | 'CANT' | 'PRECIO' | 'TOTAL' | 'CAJERA' | 'TIPO' | 'CLIENTE' | 'CEDULA' | 'TIPO_NCF' | 'SUCURSAL' | 'DESCRIPCION'>
    )>>> }
  ) }
);

export type CreateTicketMutationVariables = Exact<{
  factura: Scalars['String'];
  articulos: Array<Maybe<Articulos_Ticket_Cambio_Input>>;
}>;


export type CreateTicketMutation = (
  { __typename?: 'Mutation' }
  & { crear_ticket_cambio: (
    { __typename?: 'ticket_cambio_resultado' }
    & Pick<Ticket_Cambio_Resultado, 'error' | 'mensaje'>
  ) }
);

export type UpdateUsuarioMutationVariables = Exact<{
  codigo: Scalars['Int'];
  data: UsuariosUpdateInput;
}>;


export type UpdateUsuarioMutation = (
  { __typename?: 'Mutation' }
  & { deletePermisosUsuario?: Maybe<(
    { __typename?: 'usuarios' }
    & Pick<Usuarios, 'codigo'>
  )>, updateUsuario?: Maybe<(
    { __typename?: 'usuarios' }
    & UsuarioDataFragment
  )> }
);

export type CreateUsuarioMutationVariables = Exact<{
  data: UsuariosCreateInput;
}>;


export type CreateUsuarioMutation = (
  { __typename?: 'Mutation' }
  & { createOneusuarios: (
    { __typename?: 'usuarios' }
    & UsuarioDataFragment
  ) }
);

export type SyncUsuarioMutationVariables = Exact<{
  codigo: Scalars['Int'];
}>;


export type SyncUsuarioMutation = (
  { __typename?: 'Mutation' }
  & { syncUsuario?: Maybe<(
    { __typename?: 'usuarios' }
    & Pick<Usuarios, 'codigo' | 'nombre' | 'tienda'>
  )> }
);

export type GetUserInfoQueryVariables = Exact<{
  usuario: Scalars['String'];
}>;


export type GetUserInfoQuery = (
  { __typename?: 'Query' }
  & { usuarioIntranet?: Maybe<(
    { __typename?: 'usuarios_intranet' }
    & Pick<Usuarios_Intranet, 'codigo' | 'estatus' | 'nombre' | 'apellido' | 'tienda' | 'isOnSystem'>
  )> }
);

export type GetUsuarioQueryVariables = Exact<{
  codigo: Scalars['Int'];
}>;


export type GetUsuarioQuery = (
  { __typename?: 'Query' }
  & { usuarios: Array<(
    { __typename?: 'usuarios' }
    & UsuarioDataFragment
  )>, total_permisos: Array<(
    { __typename?: 'permisos' }
    & PermisosInfoFragment
  )> }
);

export type GetPermisosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPermisosQuery = (
  { __typename?: 'Query' }
  & { permisos: Array<(
    { __typename?: 'permisos' }
    & PermisosInfoFragment
  )> }
);

export type GetUsuariosQueryVariables = Exact<{
  first: Scalars['Int'];
  after?: Maybe<UsuariosWhereUniqueInput>;
  orderBy?: Maybe<Array<UsuariosOrderByInput>>;
  where?: Maybe<UsuariosWhereInput>;
}>;


export type GetUsuariosQuery = (
  { __typename?: 'Query' }
  & { usuarios: Array<(
    { __typename?: 'usuarios' }
    & Pick<Usuarios, 'nombre' | 'codigo' | 'turno' | 'depto' | 'tienda'>
  )> }
);

export type UsuarioDataFragment = (
  { __typename?: 'usuarios' }
  & Pick<Usuarios, 'codigo' | 'nombre' | 'depto' | 'tienda' | 'fecha_creacion' | 'turno' | 'estado'>
  & { permisos: Array<(
    { __typename?: 'permisos' }
    & Pick<Permisos, 'codigo'>
  )> }
);

export type PermisosInfoFragment = (
  { __typename?: 'permisos' }
  & Pick<Permisos, 'codigo' | 'codigo_padre' | 'nombre' | 'descripcion'>
);

export const UsuarioDataFragmentDoc = gql`
    fragment usuarioData on usuarios {
  codigo
  nombre
  depto
  tienda
  fecha_creacion
  turno
  estado
  permisos {
    codigo
  }
}
    `;
export const PermisosInfoFragmentDoc = gql`
    fragment permisosInfo on permisos {
  codigo
  codigo_padre
  nombre
  descripcion
}
    `;
export const GetSideBarShowDocument = gql`
    query GetSideBarShow {
  sidebarShow @client
}
    `;

/**
 * __useGetSideBarShowQuery__
 *
 * To run a query within a React component, call `useGetSideBarShowQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSideBarShowQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSideBarShowQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSideBarShowQuery(baseOptions?: Apollo.QueryHookOptions<GetSideBarShowQuery, GetSideBarShowQueryVariables>) {
        return Apollo.useQuery<GetSideBarShowQuery, GetSideBarShowQueryVariables>(GetSideBarShowDocument, baseOptions);
      }
export function useGetSideBarShowLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSideBarShowQuery, GetSideBarShowQueryVariables>) {
          return Apollo.useLazyQuery<GetSideBarShowQuery, GetSideBarShowQueryVariables>(GetSideBarShowDocument, baseOptions);
        }
export type GetSideBarShowQueryHookResult = ReturnType<typeof useGetSideBarShowQuery>;
export type GetSideBarShowLazyQueryHookResult = ReturnType<typeof useGetSideBarShowLazyQuery>;
export type GetSideBarShowQueryResult = Apollo.QueryResult<GetSideBarShowQuery, GetSideBarShowQueryVariables>;
export const GetLoadingBarStatusDocument = gql`
    query GetLoadingBarStatus {
  loadingBarStatus @client
}
    `;

/**
 * __useGetLoadingBarStatusQuery__
 *
 * To run a query within a React component, call `useGetLoadingBarStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLoadingBarStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLoadingBarStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLoadingBarStatusQuery(baseOptions?: Apollo.QueryHookOptions<GetLoadingBarStatusQuery, GetLoadingBarStatusQueryVariables>) {
        return Apollo.useQuery<GetLoadingBarStatusQuery, GetLoadingBarStatusQueryVariables>(GetLoadingBarStatusDocument, baseOptions);
      }
export function useGetLoadingBarStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLoadingBarStatusQuery, GetLoadingBarStatusQueryVariables>) {
          return Apollo.useLazyQuery<GetLoadingBarStatusQuery, GetLoadingBarStatusQueryVariables>(GetLoadingBarStatusDocument, baseOptions);
        }
export type GetLoadingBarStatusQueryHookResult = ReturnType<typeof useGetLoadingBarStatusQuery>;
export type GetLoadingBarStatusLazyQueryHookResult = ReturnType<typeof useGetLoadingBarStatusLazyQuery>;
export type GetLoadingBarStatusQueryResult = Apollo.QueryResult<GetLoadingBarStatusQuery, GetLoadingBarStatusQueryVariables>;
export const GetLoginStatusDocument = gql`
    query GetLoginStatus {
  isLoggedIn @client
}
    `;

/**
 * __useGetLoginStatusQuery__
 *
 * To run a query within a React component, call `useGetLoginStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLoginStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLoginStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLoginStatusQuery(baseOptions?: Apollo.QueryHookOptions<GetLoginStatusQuery, GetLoginStatusQueryVariables>) {
        return Apollo.useQuery<GetLoginStatusQuery, GetLoginStatusQueryVariables>(GetLoginStatusDocument, baseOptions);
      }
export function useGetLoginStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLoginStatusQuery, GetLoginStatusQueryVariables>) {
          return Apollo.useLazyQuery<GetLoginStatusQuery, GetLoginStatusQueryVariables>(GetLoginStatusDocument, baseOptions);
        }
export type GetLoginStatusQueryHookResult = ReturnType<typeof useGetLoginStatusQuery>;
export type GetLoginStatusLazyQueryHookResult = ReturnType<typeof useGetLoginStatusLazyQuery>;
export type GetLoginStatusQueryResult = Apollo.QueryResult<GetLoginStatusQuery, GetLoginStatusQueryVariables>;
export const GetPermisosSessionDocument = gql`
    query GetPermisosSession {
  permisosSession @client {
    tienda
    admin
  }
}
    `;

/**
 * __useGetPermisosSessionQuery__
 *
 * To run a query within a React component, call `useGetPermisosSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPermisosSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPermisosSessionQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPermisosSessionQuery(baseOptions?: Apollo.QueryHookOptions<GetPermisosSessionQuery, GetPermisosSessionQueryVariables>) {
        return Apollo.useQuery<GetPermisosSessionQuery, GetPermisosSessionQueryVariables>(GetPermisosSessionDocument, baseOptions);
      }
export function useGetPermisosSessionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPermisosSessionQuery, GetPermisosSessionQueryVariables>) {
          return Apollo.useLazyQuery<GetPermisosSessionQuery, GetPermisosSessionQueryVariables>(GetPermisosSessionDocument, baseOptions);
        }
export type GetPermisosSessionQueryHookResult = ReturnType<typeof useGetPermisosSessionQuery>;
export type GetPermisosSessionLazyQueryHookResult = ReturnType<typeof useGetPermisosSessionLazyQuery>;
export type GetPermisosSessionQueryResult = Apollo.QueryResult<GetPermisosSessionQuery, GetPermisosSessionQueryVariables>;
export const GetSessionInfoDocument = gql`
    query GetSessionInfo {
  permisosSession @client {
    tienda
    admin
  }
  isLoggedIn @client
}
    `;

/**
 * __useGetSessionInfoQuery__
 *
 * To run a query within a React component, call `useGetSessionInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSessionInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSessionInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSessionInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetSessionInfoQuery, GetSessionInfoQueryVariables>) {
        return Apollo.useQuery<GetSessionInfoQuery, GetSessionInfoQueryVariables>(GetSessionInfoDocument, baseOptions);
      }
export function useGetSessionInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSessionInfoQuery, GetSessionInfoQueryVariables>) {
          return Apollo.useLazyQuery<GetSessionInfoQuery, GetSessionInfoQueryVariables>(GetSessionInfoDocument, baseOptions);
        }
export type GetSessionInfoQueryHookResult = ReturnType<typeof useGetSessionInfoQuery>;
export type GetSessionInfoLazyQueryHookResult = ReturnType<typeof useGetSessionInfoLazyQuery>;
export type GetSessionInfoQueryResult = Apollo.QueryResult<GetSessionInfoQuery, GetSessionInfoQueryVariables>;
export const LoginUserDocument = gql`
    mutation LoginUser($usuario: String!, $password: String!) {
  login(input: {usuario: $usuario, password: $password}) {
    mensaje
    error
    token {
      token
      tokenType
      refreshToken
      viewier {
        usuario
        codigo
        tienda
        turno
        permisos {
          tienda
          admin
        }
      }
    }
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      usuario: // value for 'usuario'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, baseOptions);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const GetOrdenesDocument = gql`
    query GetOrdenes($first: Int!, $after: ordenesWhereUniqueInput, $orderBy: [ordenesOrderByInput!], $where: ordenesWhereInput) {
  ordenes(first: $first, after: $after, orderBy: $orderBy, where: $where) {
    fecha_registro
    orden
    estatus
    tienda
    total
  }
}
    `;

/**
 * __useGetOrdenesQuery__
 *
 * To run a query within a React component, call `useGetOrdenesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrdenesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrdenesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetOrdenesQuery(baseOptions?: Apollo.QueryHookOptions<GetOrdenesQuery, GetOrdenesQueryVariables>) {
        return Apollo.useQuery<GetOrdenesQuery, GetOrdenesQueryVariables>(GetOrdenesDocument, baseOptions);
      }
export function useGetOrdenesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrdenesQuery, GetOrdenesQueryVariables>) {
          return Apollo.useLazyQuery<GetOrdenesQuery, GetOrdenesQueryVariables>(GetOrdenesDocument, baseOptions);
        }
export type GetOrdenesQueryHookResult = ReturnType<typeof useGetOrdenesQuery>;
export type GetOrdenesLazyQueryHookResult = ReturnType<typeof useGetOrdenesLazyQuery>;
export type GetOrdenesQueryResult = Apollo.QueryResult<GetOrdenesQuery, GetOrdenesQueryVariables>;
export const GetOrdenDocument = gql`
    query GetOrden($orden: String!) {
  ordenes(first: 1, where: {orden: {equals: $orden}}) {
    orden
    nota
    nombre
    apellidos
    estatus
    fecha_completada
    tiempo_estimado
    total
    articulos {
      codigo
      sku
      cantidad
      cant_add
      descripcion
      depto
      estatus
      total
      picking
      remplazo {
        codigo
        cantidad
        precio
        o_sku
        descripcion
        total
      }
      precio
    }
  }
}
    `;

/**
 * __useGetOrdenQuery__
 *
 * To run a query within a React component, call `useGetOrdenQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrdenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrdenQuery({
 *   variables: {
 *      orden: // value for 'orden'
 *   },
 * });
 */
export function useGetOrdenQuery(baseOptions?: Apollo.QueryHookOptions<GetOrdenQuery, GetOrdenQueryVariables>) {
        return Apollo.useQuery<GetOrdenQuery, GetOrdenQueryVariables>(GetOrdenDocument, baseOptions);
      }
export function useGetOrdenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrdenQuery, GetOrdenQueryVariables>) {
          return Apollo.useLazyQuery<GetOrdenQuery, GetOrdenQueryVariables>(GetOrdenDocument, baseOptions);
        }
export type GetOrdenQueryHookResult = ReturnType<typeof useGetOrdenQuery>;
export type GetOrdenLazyQueryHookResult = ReturnType<typeof useGetOrdenLazyQuery>;
export type GetOrdenQueryResult = Apollo.QueryResult<GetOrdenQuery, GetOrdenQueryVariables>;
export const GetTicketDocument = gql`
    query GetTicket($factura: String!) {
  tickets_cambio(factura: $factura) {
    mensaje
    error
    tickets_cambio {
      ID
      NCF
      EAN
      FECHA
      FACTURA
      TOTAL_FACT
      CANT
      PRECIO
      TOTAL
      CAJERA
      TIPO
      CLIENTE
      CEDULA
      TIPO_NCF
      SUCURSAL
      DESCRIPCION
    }
  }
}
    `;

/**
 * __useGetTicketQuery__
 *
 * To run a query within a React component, call `useGetTicketQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTicketQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTicketQuery({
 *   variables: {
 *      factura: // value for 'factura'
 *   },
 * });
 */
export function useGetTicketQuery(baseOptions?: Apollo.QueryHookOptions<GetTicketQuery, GetTicketQueryVariables>) {
        return Apollo.useQuery<GetTicketQuery, GetTicketQueryVariables>(GetTicketDocument, baseOptions);
      }
export function useGetTicketLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTicketQuery, GetTicketQueryVariables>) {
          return Apollo.useLazyQuery<GetTicketQuery, GetTicketQueryVariables>(GetTicketDocument, baseOptions);
        }
export type GetTicketQueryHookResult = ReturnType<typeof useGetTicketQuery>;
export type GetTicketLazyQueryHookResult = ReturnType<typeof useGetTicketLazyQuery>;
export type GetTicketQueryResult = Apollo.QueryResult<GetTicketQuery, GetTicketQueryVariables>;
export const CreateTicketDocument = gql`
    mutation CreateTicket($factura: String!, $articulos: [articulos_ticket_cambio_input]!) {
  crear_ticket_cambio(input: {factura: $factura, articulos: $articulos}) {
    error
    mensaje
  }
}
    `;
export type CreateTicketMutationFn = Apollo.MutationFunction<CreateTicketMutation, CreateTicketMutationVariables>;

/**
 * __useCreateTicketMutation__
 *
 * To run a mutation, you first call `useCreateTicketMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTicketMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTicketMutation, { data, loading, error }] = useCreateTicketMutation({
 *   variables: {
 *      factura: // value for 'factura'
 *      articulos: // value for 'articulos'
 *   },
 * });
 */
export function useCreateTicketMutation(baseOptions?: Apollo.MutationHookOptions<CreateTicketMutation, CreateTicketMutationVariables>) {
        return Apollo.useMutation<CreateTicketMutation, CreateTicketMutationVariables>(CreateTicketDocument, baseOptions);
      }
export type CreateTicketMutationHookResult = ReturnType<typeof useCreateTicketMutation>;
export type CreateTicketMutationResult = Apollo.MutationResult<CreateTicketMutation>;
export type CreateTicketMutationOptions = Apollo.BaseMutationOptions<CreateTicketMutation, CreateTicketMutationVariables>;
export const UpdateUsuarioDocument = gql`
    mutation UpdateUsuario($codigo: Int!, $data: usuariosUpdateInput!) {
  deletePermisosUsuario: updateOneusuarios(data: {usuarios_permisos: {deleteMany: {usuario: {equals: $codigo}}}}, where: {codigo: $codigo}) {
    codigo
  }
  updateUsuario: updateOneusuarios(data: $data, where: {codigo: $codigo}) {
    ...usuarioData
  }
}
    ${UsuarioDataFragmentDoc}`;
export type UpdateUsuarioMutationFn = Apollo.MutationFunction<UpdateUsuarioMutation, UpdateUsuarioMutationVariables>;

/**
 * __useUpdateUsuarioMutation__
 *
 * To run a mutation, you first call `useUpdateUsuarioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUsuarioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUsuarioMutation, { data, loading, error }] = useUpdateUsuarioMutation({
 *   variables: {
 *      codigo: // value for 'codigo'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateUsuarioMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUsuarioMutation, UpdateUsuarioMutationVariables>) {
        return Apollo.useMutation<UpdateUsuarioMutation, UpdateUsuarioMutationVariables>(UpdateUsuarioDocument, baseOptions);
      }
export type UpdateUsuarioMutationHookResult = ReturnType<typeof useUpdateUsuarioMutation>;
export type UpdateUsuarioMutationResult = Apollo.MutationResult<UpdateUsuarioMutation>;
export type UpdateUsuarioMutationOptions = Apollo.BaseMutationOptions<UpdateUsuarioMutation, UpdateUsuarioMutationVariables>;
export const CreateUsuarioDocument = gql`
    mutation CreateUsuario($data: usuariosCreateInput!) {
  createOneusuarios(data: $data) {
    ...usuarioData
  }
}
    ${UsuarioDataFragmentDoc}`;
export type CreateUsuarioMutationFn = Apollo.MutationFunction<CreateUsuarioMutation, CreateUsuarioMutationVariables>;

/**
 * __useCreateUsuarioMutation__
 *
 * To run a mutation, you first call `useCreateUsuarioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUsuarioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUsuarioMutation, { data, loading, error }] = useCreateUsuarioMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUsuarioMutation(baseOptions?: Apollo.MutationHookOptions<CreateUsuarioMutation, CreateUsuarioMutationVariables>) {
        return Apollo.useMutation<CreateUsuarioMutation, CreateUsuarioMutationVariables>(CreateUsuarioDocument, baseOptions);
      }
export type CreateUsuarioMutationHookResult = ReturnType<typeof useCreateUsuarioMutation>;
export type CreateUsuarioMutationResult = Apollo.MutationResult<CreateUsuarioMutation>;
export type CreateUsuarioMutationOptions = Apollo.BaseMutationOptions<CreateUsuarioMutation, CreateUsuarioMutationVariables>;
export const SyncUsuarioDocument = gql`
    mutation SyncUsuario($codigo: Int!) {
  syncUsuario(codigo: $codigo) {
    codigo
    nombre
    tienda
  }
}
    `;
export type SyncUsuarioMutationFn = Apollo.MutationFunction<SyncUsuarioMutation, SyncUsuarioMutationVariables>;

/**
 * __useSyncUsuarioMutation__
 *
 * To run a mutation, you first call `useSyncUsuarioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSyncUsuarioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [syncUsuarioMutation, { data, loading, error }] = useSyncUsuarioMutation({
 *   variables: {
 *      codigo: // value for 'codigo'
 *   },
 * });
 */
export function useSyncUsuarioMutation(baseOptions?: Apollo.MutationHookOptions<SyncUsuarioMutation, SyncUsuarioMutationVariables>) {
        return Apollo.useMutation<SyncUsuarioMutation, SyncUsuarioMutationVariables>(SyncUsuarioDocument, baseOptions);
      }
export type SyncUsuarioMutationHookResult = ReturnType<typeof useSyncUsuarioMutation>;
export type SyncUsuarioMutationResult = Apollo.MutationResult<SyncUsuarioMutation>;
export type SyncUsuarioMutationOptions = Apollo.BaseMutationOptions<SyncUsuarioMutation, SyncUsuarioMutationVariables>;
export const GetUserInfoDocument = gql`
    query GetUserInfo($usuario: String!) {
  usuarioIntranet: usuarios_intranet(usuario: $usuario) {
    codigo
    estatus
    nombre
    apellido
    tienda
    isOnSystem
  }
}
    `;

/**
 * __useGetUserInfoQuery__
 *
 * To run a query within a React component, call `useGetUserInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserInfoQuery({
 *   variables: {
 *      usuario: // value for 'usuario'
 *   },
 * });
 */
export function useGetUserInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>) {
        return Apollo.useQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, baseOptions);
      }
export function useGetUserInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>) {
          return Apollo.useLazyQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, baseOptions);
        }
export type GetUserInfoQueryHookResult = ReturnType<typeof useGetUserInfoQuery>;
export type GetUserInfoLazyQueryHookResult = ReturnType<typeof useGetUserInfoLazyQuery>;
export type GetUserInfoQueryResult = Apollo.QueryResult<GetUserInfoQuery, GetUserInfoQueryVariables>;
export const GetUsuarioDocument = gql`
    query GetUsuario($codigo: Int!) {
  usuarios(first: 1, where: {codigo: {equals: $codigo}}) {
    ...usuarioData
  }
  total_permisos: permisos {
    ...permisosInfo
  }
}
    ${UsuarioDataFragmentDoc}
${PermisosInfoFragmentDoc}`;

/**
 * __useGetUsuarioQuery__
 *
 * To run a query within a React component, call `useGetUsuarioQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsuarioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsuarioQuery({
 *   variables: {
 *      codigo: // value for 'codigo'
 *   },
 * });
 */
export function useGetUsuarioQuery(baseOptions?: Apollo.QueryHookOptions<GetUsuarioQuery, GetUsuarioQueryVariables>) {
        return Apollo.useQuery<GetUsuarioQuery, GetUsuarioQueryVariables>(GetUsuarioDocument, baseOptions);
      }
export function useGetUsuarioLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsuarioQuery, GetUsuarioQueryVariables>) {
          return Apollo.useLazyQuery<GetUsuarioQuery, GetUsuarioQueryVariables>(GetUsuarioDocument, baseOptions);
        }
export type GetUsuarioQueryHookResult = ReturnType<typeof useGetUsuarioQuery>;
export type GetUsuarioLazyQueryHookResult = ReturnType<typeof useGetUsuarioLazyQuery>;
export type GetUsuarioQueryResult = Apollo.QueryResult<GetUsuarioQuery, GetUsuarioQueryVariables>;
export const GetPermisosDocument = gql`
    query GetPermisos {
  permisos {
    ...permisosInfo
  }
}
    ${PermisosInfoFragmentDoc}`;

/**
 * __useGetPermisosQuery__
 *
 * To run a query within a React component, call `useGetPermisosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPermisosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPermisosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPermisosQuery(baseOptions?: Apollo.QueryHookOptions<GetPermisosQuery, GetPermisosQueryVariables>) {
        return Apollo.useQuery<GetPermisosQuery, GetPermisosQueryVariables>(GetPermisosDocument, baseOptions);
      }
export function useGetPermisosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPermisosQuery, GetPermisosQueryVariables>) {
          return Apollo.useLazyQuery<GetPermisosQuery, GetPermisosQueryVariables>(GetPermisosDocument, baseOptions);
        }
export type GetPermisosQueryHookResult = ReturnType<typeof useGetPermisosQuery>;
export type GetPermisosLazyQueryHookResult = ReturnType<typeof useGetPermisosLazyQuery>;
export type GetPermisosQueryResult = Apollo.QueryResult<GetPermisosQuery, GetPermisosQueryVariables>;
export const GetUsuariosDocument = gql`
    query GetUsuarios($first: Int!, $after: usuariosWhereUniqueInput, $orderBy: [usuariosOrderByInput!], $where: usuariosWhereInput) {
  usuarios(first: $first, after: $after, orderBy: $orderBy, where: $where) {
    nombre
    codigo
    turno
    depto
    tienda
  }
}
    `;

/**
 * __useGetUsuariosQuery__
 *
 * To run a query within a React component, call `useGetUsuariosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsuariosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsuariosQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetUsuariosQuery(baseOptions?: Apollo.QueryHookOptions<GetUsuariosQuery, GetUsuariosQueryVariables>) {
        return Apollo.useQuery<GetUsuariosQuery, GetUsuariosQueryVariables>(GetUsuariosDocument, baseOptions);
      }
export function useGetUsuariosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsuariosQuery, GetUsuariosQueryVariables>) {
          return Apollo.useLazyQuery<GetUsuariosQuery, GetUsuariosQueryVariables>(GetUsuariosDocument, baseOptions);
        }
export type GetUsuariosQueryHookResult = ReturnType<typeof useGetUsuariosQuery>;
export type GetUsuariosLazyQueryHookResult = ReturnType<typeof useGetUsuariosLazyQuery>;
export type GetUsuariosQueryResult = Apollo.QueryResult<GetUsuariosQuery, GetUsuariosQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    