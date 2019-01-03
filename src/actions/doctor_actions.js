import axios from "axios";

import {
  ADD_RECORD,
  SEE_PACIENT_RECORDS,
  SEE_FAMILY_DIAGNOSE,
  SEE_DRUGS,
  ORDER_PACIENT,
  SEE_ALL_PACIENT,
  PACIENT_DETAILS
} from "./types";

import { DOCTOR_SERVER } from "../components/misc";

export function addRecord(dataToSubmit) {
  const request = axios
    .post(`${DOCTOR_SERVER}/addrecord`, dataToSubmit)
    .then(response => response.data);
  return {
    type: ADD_RECORD,
    payload: request
  };
}

export function seePacientRecords(idPacient) {
  const request = axios
    .get(`${DOCTOR_SERVER}/getpacient:${idPacient}`)
    .then(response => response.data);
  return {
    type: SEE_PACIENT_RECORDS,
    payload: request
  };
}

export function seeFamilyDiagnose(idPacient) {
  const request = axios
    .get(`${DOCTOR_SERVER}/seeFamilyDiagnose/:${idPacient}`)
    .then(response => response.data);

  return {
    type: SEE_FAMILY_DIAGNOSE,
    payload: request
  };
}

export function seeDrugs(idPacient) {
  const request = axios
    .get(`${DOCTOR_SERVER}/seedrugs/:${idPacient}`)
    .then(response => response.data);

  return {
    type: SEE_DRUGS,
    payload: request
  };
}

export function orderPacient(dataToSubmit) {
  const request = axios
    .post(`${DOCTOR_SERVER}/orderpacient`, dataToSubmit)
    .then(response => response.data);

  return {
    type: ORDER_PACIENT,
    payload: request
  };
}

export function seeAllPacient(date) {
  const request = axios
    .get(`${DOCTOR_SERVER}/seeallpacient`, date)
    .then(response => response.data);

  return {
    type: SEE_ALL_PACIENT,
    payload: request
  };
}

export function pacientDetails(idPacient) {
  const request = axios
    .get(`${DOCTOR_SERVER}/pacientdetails/:${idPacient}`)
    .then(repsonse => response.data);

  return {
    type: PACIENT_DETAILS,
    payload: request
  };
}
