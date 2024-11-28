import { headers } from 'next/headers';
import StatusLabel from './components/status-label';
import { Status } from './components/status-label';

export default function Home() {
  console.log(headers());
  return (
    <main>
      <h1 className="text-xl">Welcome to CRM {new Date().toTimeString()}</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
    </main>
  );
}
