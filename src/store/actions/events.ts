import { FILTER_EVENT, SELECTED_EVENT } from '@store/types/events'

interface EventsAction {
  type: typeof FILTER_EVENT | typeof SELECTED_EVENT
  payload: number
}

export const selectEvent = (id: number): EventsAction => ({
  type: SELECTED_EVENT,
  payload: id
})

export const filterEvents = (id: number): EventsAction => ({
  type: FILTER_EVENT,
  payload: id
})
