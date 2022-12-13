import {FILTER_EVENT, SELECTED_EVENT} from '@store/types/events';

export const selectEvent = (id: number) => ({
  type: SELECTED_EVENT,
  payload: id,
});

export const filterEvents = (id: number) => ({
  type: FILTER_EVENT,
  payload: id,
});
