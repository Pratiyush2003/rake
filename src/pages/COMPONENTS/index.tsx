import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import DataTable from '@/components/Table';

export default function COMPONENTS() {
  const columns = [
    { label: 'Player', dataIndex: 'player' },
    { label: 'Entry Price', dataIndex: 'entry_price' },
    { label: 'Wager', dataIndex: 'wager' },
    { label: 'Bust Price', dataIndex: 'bust_price' },
    { label: 'MULTIPLIER', dataIndex: 'multiplier' },
  ];

  const generateRandomPlayer = (playerNumber: number) => ({
    id: `${Math.random() * 1000}`,
    player: `Player ${playerNumber}`,
    entry_price: `${Math.floor(Math.random() * 50001)}`,
    wager: `${Math.floor(Math.random() * 501).toFixed(2)}`,
    bust_price: `${Math.floor(Math.random() * 50001).toFixed(2)}`,
    multiplier: `x${Math.floor(Math.random() * 1001).toFixed(2)}`,
  });

  const randomPlayersData = [];
  for (let index = 0; index <= 20; index++) {
    const newPlayer = generateRandomPlayer(index);
    randomPlayersData.push(newPlayer);
  }

  const [data, setData] = useState(randomPlayersData);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPlayer = generateRandomPlayer(data.length + 1);
      setData((prevData) => [newPlayer, ...prevData]);
    }, 4000);

    return () => clearInterval(interval);
  });

  return (
    <section>
      <h1>Buttons</h1>
      <div className='inline-flex flex-wrap'>
        <Button variant='default'>Wallet</Button>
        <Button variant='default' size='lg'>
          Wallet
        </Button>
        <Button variant='default' size='md'>
          Wallet
        </Button>
        <Button variant='default' size='sm'>
          Wallet
        </Button>
        <Button variant='red'>Wallet</Button>
        <Button variant='green'>Wallet</Button>
        <Button variant='ghost'>Wallet</Button>
        <Button variant='link'>Wallet</Button>
        <Button variant='text'>Wallet</Button>
      </div>
      <div className='my-5 px-5'>
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
}
