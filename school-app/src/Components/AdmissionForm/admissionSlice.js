import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [],
  studentsInput: {
    name: "",
    fatherName: "",
    age: "",
    emailAddress: "",
    contactNumber: "",
    class: "",
    address: "",
  },
  editingStudentId: null,
};

const admissionSlice = createSlice({
  name: "admission",
  initialState,
  reducers: {
    inputField: (state, action) => {
      const { name, value } = action.payload;
      state.studentsInput[name] = value;
    },
    setStudents: (state, action) => {
      state.students = action.payload;
    },
    editStudent: (state, action) => {
      const student = state.students.find((s) => s._id === action.payload);
      if (student) {
        state.studentsInput = { ...student };
        state.editingStudentId = student._id;
      }
    },
  },
});

export const { inputField, setStudents, editStudent } = admissionSlice.actions;
export default admissionSlice.reducer;
