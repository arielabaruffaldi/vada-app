import {Event} from '@screens/EventDetail';
import {SELECTED_EVENT, FILTER_EVENT, EventsActions} from '@store/types/events';
import {EVENTS} from '@utils/data/events';

interface InitialState {
  events: Event[];
  filteredEvents: Event[];
  selected: Event | null;
}

const initialState: InitialState = {
  events: EVENTS,
  filteredEvents: [],
  selected: EVENTS[0],
};

const EventsReducer = (state = initialState, action: EventsActions) => {
  switch (action.type) {
    case SELECTED_EVENT:
      return {
        ...state,
        selected: state.events.find(event => event.id === action.payload),
      };
    case FILTER_EVENT:
      return {
        ...state,
        filteredEvents: state.events.filter(event => {
          return event.categoryId === action.payload;
        }),
      };
    default:
      return state;
  }
};

export default EventsReducer;
