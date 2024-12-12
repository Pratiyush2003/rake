import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/core/image';
import { FC, Fragment, memo, useMemo, useState } from 'react';
import { dropdown } from './constants';
import { useTranslation } from 'react-i18next';
import './refferralSystem.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { Overview } from './sections/Overview';
import { Comission } from './sections/Comission';
import { ReferredUsers } from './sections/ReferredUsers';
import { activeTabType } from './types';
import Dropdown from '@/components/CustomComponents/Dropdown/Dropdown';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Tabs: FC = () => {
  const query = useQuery();
  const casinoTab = query.get('affiliation-code');

  const componentToRender = useMemo(() => {
    switch (casinoTab) {
      case 'overview':
        return <Overview />;
      case 'comission':
        return <Comission />;
      case 'referred-users':
        return <ReferredUsers />;
      default:
        return <Overview />;
    }
  }, [casinoTab]);

  return <Fragment>{componentToRender}</Fragment>;
};

export const ReferralSystem: FC = memo(() => {
  const { t } = useTranslation('referral');
  const [activeTab, setActiveTab] = useState<
    'overview' | 'comission' | 'referred-users'
  >('overview');
  const navigate = useNavigate();
  return (
    <div className='mx-auto max-w-[1440px] px-[20px] py-[30px] ts:p-10'>
      <h3
        className='mb-[34px] hidden font-sans text-[36px] font-bold uppercase leading-[32px]
          tracking-[-.02em] text-[#f5f5f5] ls:block'
      >
        {t('Referral_system_')}
      </h3>
      <div className='flex flex-col gap-[30px] xl:flex-row'>
        <div>
          <div
            className='mx-auto hidden w-full ts:w-[259px] max-w-[259px] flex-col gap-[10px] rounded-[10px]
              bg-[#082537] p-4 ss:flex ls:mx-0'
          >
            {dropdown.map((res) => (
              <Button
                className={`!hover:bg-[#0099f4] referral-btn box-border h-[52px] w-full cursor-pointer
                !justify-start py-[14px] pl-[22px] pr-[20px] focus-visible:outline-none
                ${activeTab === res?.navigate ? '!hover:bg-[#0099f4] referral-btn-active' : 'bg-transparent hover:bg-[#0099f4]'}`}
                onClick={() => {
                  setActiveTab(res?.navigate as activeTabType);
                  navigate(`/referral?affiliation-code=${res?.navigate}`);
                }}
                key={res?.key}
              >
                <div className='flex items-center justify-start gap-[10px]'>
                  <Image url={res?.iconUrl} height='16' width='16' />
                  <div
                    className='text-[16px] w-[55px] overflow-hidden text-ellipsis whitespace-nowrap ts:w-full font-medium capitalize leading-[150%] tracking-[-.02em]
                      text-[#f5f5f5]'
                  >
                    {t(`${res?.buttonTitle}`)}
                  </div>
                </div>
              </Button>
            ))}
          </div>
          <Dropdown
            options={dropdown?.map((res) => (
              <div
                key={res?.key}
                className={`flex w-full justify-start py-1 text-[20px] font-bold uppercase
                ${activeTab === res.navigate ? 'text-[#2392f3]' : ''}`}
              >
                {t(`${res?.buttonTitle}`)}
              </div>
            ))}
            currentValue={
              <div className='w-full pl-[27px] text-[20px] font-bold uppercase'>
                {t(
                  `${
                    dropdown.find((res) => res?.navigate === activeTab)
                      ?.buttonTitle
                  }`,
                )}
              </div>
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(e: any) => {
              setActiveTab(e?.navigate as activeTabType);
              navigate(`/referral?affiliation-code=${e?.navigate}`);
            }}
            data={dropdown}
            mainClasses='cursor-pointer ss:!hidden !rounded-none  border-b-[2px] !py-2 border-[#00a0ff]'
            bodyClasses='bg-[#04141e] py-4 shadow-dark-sm top-[32px]'
            bodyChildClasses='hover:bg-transparent  hover:text-[#2392f3]'
          />
        </div>
        <Tabs />
      </div>
    </div>
  );
});
