export const SELECTED_EVENT = 'SELECTED_EVENT';
export const FILTER_EVENT = 'FILTER_EVENT';

export interface SetSelectedEvent {
  type: typeof SELECTED_EVENT;
  payload: number;
}

export interface FilterEvents {
  type: typeof FILTER_EVENT;
  payload: number;
}

export type EventsActions = SetSelectedEvent | FilterEvents;
