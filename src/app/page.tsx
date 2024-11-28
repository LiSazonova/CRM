import { headers } from 'next/headers';
import AddCompanyButton from './components/add-company-button';

export default function Home() {
  console.log(headers());
  return (
    <main>
      <h1 className="text-xl">Welcome to CRM</h1>
      <AddCompanyButton />
    </main>
  );
}
