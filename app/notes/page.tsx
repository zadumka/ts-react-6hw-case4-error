import NotesClient from './Notes.client';
import { fetchNotes } from '@/lib/api';

export default function NotesPage() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function getData() {
      const result = await fetchNotes('', 1);
      setData(result);
    }
    getData();
  }, []);

  return <NotesClient initialData={data} />;
}
