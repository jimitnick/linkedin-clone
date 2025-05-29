import { auth, provider } from "../firebase";
import { signInWithPopup,signOut } from "firebase/auth";
import { SET_USER } from "./actionType";

export const setUser = (payload) =>({
  type: SET_USER,
  user: payload,
});
export function signInAPI() {
  return async (dispatch) => {
    try {
      const payload = await signInWithPopup(auth, provider);
      const user = payload.user;
      const cleanUser = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      };
      dispatch(setUser(cleanUser));
      return cleanUser; // ✅ This will now return to where dispatch was called
    } catch (error) {
      alert(error.message);
      return null;
    }
  };
}


export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        // Extract only the necessary, serializable properties
        const cleanUser = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        };
        dispatch(setUser(cleanUser));
      } else {
        dispatch(setUser(null));
      }
    });
  };
}
export const signOutAPI = () => {
  return (dispatch) => {
    signOut(auth)
      .then(() => {
        dispatch(setUser(null)); // Clear user in Redux
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };
};
