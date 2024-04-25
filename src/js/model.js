export const state = {
  user: {
    id: "",
  },
  users: [],
  blogs: [],
  // TODO: remove this temporary activity,
  activities: [],
};

export const userSignIn = ({ username, password }) => {};

export const userRegister = user => {};

export const userLogout = () => {};

export const loadActivities = () => {
  const activities = localStorage.getItem("activities");
  if (activities) {
    state.activities = JSON.parse(activities);
  }
};

export const saveActivities = () => {
  localStorage.setItem("activities", JSON.stringify(state.activities));
};

export const addActivity = activity => {
  state.activities.push({
    activityId: Math.random(),
    activityName: activity.activityName,
    activityDuration: activity.activityDuration,
    activityLocation: JSON.parse(localStorage.getItem("userLocation")),
    activityDate: new Date(),
  });

  saveActivities();
};

export const editActivity = activity => {};

export const deleteActivity = activity => {};

export const loadBlogs = () => {};

export const addBlog = blog => {};

export const editBlog = blog => {};

export const deleteBlog = blog => {};

export const loadGoals = () => {};

export const editGoal = goal => {};

export const addGoal = goal => {};

export const deleteGoal = goal => {};
