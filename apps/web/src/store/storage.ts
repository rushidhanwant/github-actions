export const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("state", serializedState);
    }
  } catch (e) {
    console.log(e);
  }
}

export const loadFromLocalStorage = () => {
  try {
    if (typeof window !== "undefined") {
      const serializedState = window.localStorage.getItem("state");
      if (serializedState === null) return undefined;
      return JSON.parse(serializedState);
    }
    return undefined;
  } catch (e) {
    console.log(e);
  }
}
