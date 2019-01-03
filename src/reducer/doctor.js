import {
  ADD_RECORD,
  SEE_PACIENT_RECORDS,
  SEE_FAMILY_DIAGNOSE,
  SEE_DRUGS,
  ORDER_PACIENT,
  SEE_ALL_PACIENT,
  PACIENT_DETAILS
} from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case ADD_RECORD:
      return { state };
    case SEE_PACIENT_RECORDS:
      return { state };
    case SEE_FAMILY_DIAGNOSE:
      return { state };
    case SEE_DRUGS:
      return { state };
    case ORDER_PACIENT:
      return { state };
    case SEE_ALL_PACIENT:
      return { state };
    case PACIENT_DETAILS:
      return { state };
    default:
      return state;
  }
}
