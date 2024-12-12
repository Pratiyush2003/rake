import { FC, memo } from 'react';
import { tableBody, tableHead } from '../constants';
import { Image } from '@/components/ui/core/image';
import { useOpenModal } from '@/hooks/useOpenModal';
import { Button } from '@/components/ui/button';
import { TableHeadItem, TableBodyItem } from '../types';

const typedTableBody: TableBodyItem[] = tableBody as TableBodyItem[];
const typedTableHead: TableHeadItem[] = tableHead;

const PerksOverview: FC = () => {
  const { closeModal } = useOpenModal();
  return (
    <div
      className='relative box-border max-h-[99vh] overflow-y-scroll scroll-none min-w-[300px] w-[99vw] xl:min-w-[300px] rounded-[10px]
        bg-rake_grey-500 px-[15px] py-[26px] xl:w-[1137px] ss:p-10'
    >
      <h2
        className='text-center font-sans text-[32px] font-bold uppercase !leading-[32px]
          tracking-[-1.28px] text-[#f5f5f5]'
      >
        Perks Overview
      </h2>
      <Button
        onClick={closeModal}
        className='absolute right-[14px] ss:right-[24px] top-[14px] ss:top-[24px] h-fit bg-transparent p-0 hover:bg-transparent
          focus-visible:outline-none cursor-pointer'
      >
        <Image
          url='https://dev.rake.com/static/media/closeIcon.4eae9a4ce1fadfd061abbf206872ace6.svg'
          alt='close icon'
        />
      </Button>
      <div className='scroll-none mt-[25px] h-[492px] w-full overflow-x-auto rounded-[10px]'>
        <table className='min-w-full bg-rake_background-500'>
          <thead>
            <tr className=''>
              <th className='w-[150px] border-b p-2'></th>
              {typedTableHead?.map((res) => (
                <th key={res?.key} className='w-[150px] border-b p-2 text-left'>
                  <Image className='h-[64px] w-[64px]' url={res?.icon} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {typedTableBody?.map((item) => (
              <tr key={item?.key} className=''>
                {item?.tableData?.map((td , index) => (
                  <td
                    key={index}
                    className='text-4 w-[150px] border-b border-gray-200 p-2 align-middle font-sans font-medium
                      text-[#f5f5f5] first:text-[#8ca3b8]'
                  >
                    {td?.type === 'string' ? (
                      td?.title
                    ) : (
                      <Image url={td?.title} alt={'Image'} />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default memo(PerksOverview);
