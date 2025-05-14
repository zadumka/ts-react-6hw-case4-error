import axios from "axios";
import { Note } from "@/types/note";

axios.defaults.baseURL = "https://notehub-public.goit.study/api";

axios.defaults.headers.common.Authorization = "Bearer token123456789";

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (searchText: string, page: number) => {

  const response = await axios.get<FetchNotesResponse>("/api/notes", {
    params: {
      ...(searchText !== "" && { search: searchText }),
      page,
      perPage: 12,
    },
  });
  return response.data;
};

interface NewNoteContent {
  title: string;
  content?: string;
  tag: string;
}

export const createNote = async (newNote: NewNoteContent) => {
  const response = await axios.post<Note>(""/notes"", newNote);
  return response.data;
};

export const deleteNote = async (noteId: number) => {
  const response = await axios.delete<Note>(`/notes/${noteId}`);
  return response.data;
};

export const getNoteDetails = async (noteId: number) => {
  const response = await axios.get<Note>(`/notes/${noteId}`);
  return response.data;
};
