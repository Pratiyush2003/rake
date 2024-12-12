import { Card } from '@/components/ui/card';
import { InputComponent } from '@/components/ui/input';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { ComponentProps, FC } from 'react';

export const BetTrade: FC<ComponentProps<'section'>> = ({ ...props }) => {
  return (
    <section {...props} className='w-full'>
      <Card>
        <ToggleGroup type='single'>
          <ToggleGroupItem value='manual'>Manual</ToggleGroupItem>
          <ToggleGroupItem value='auto'>Auto</ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup type='single'>
          <ToggleGroupItem value='up'>Up</ToggleGroupItem>
          <ToggleGroupItem value='down'>Down</ToggleGroupItem>
        </ToggleGroup>
        <InputComponent />
        <InputComponent />
      </Card>
    </section>
  );
};
