import { Converter } from '@/components/Converter';
import { getCurrencyPair } from '@/services/revolut';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const currency = await getCurrencyPair();

  return <Converter currency={currency} />;
}
