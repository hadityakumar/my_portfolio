
import How from '@/components/how'
import WebDev from '@/components/WebDev'
import WebDes from '@/components/WebDes'
import Seo from '@/components/Seo'


export default function Service() {
  return (
    <>    
      <div className='flex service-section flex-col justify-center how-can p-5 bg-[#080807] text-[#F2F2F2] m-5 rounded-xl items-center gap-10'>
         <How />
         <WebDev />
         <WebDes />
         <Seo />
      </div>
    </>
  );
}
