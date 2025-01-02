import { BehaviorSubject } from "rxjs";
import { SessionDto } from "../types";

// Initial session state
const initialSessionState: SessionDto = {
  name: null,
  role: null, // 'creator' or 'user'
  id: null,
  email: null,
};

// Create a BehaviorSubject to hold the session state
export const sessionState$ = new BehaviorSubject(initialSessionState);

// Export the observable for components to subscribe
export const session$ = sessionState$.asObservable();

// Function to update the session state
export const updateSession = (session: Partial<SessionDto>) => {
  sessionState$.next({ ...sessionState$.getValue(), ...session });
};

// Function to clear the session state
export const clearSession = () => {
  sessionState$.next(initialSessionState);
};
