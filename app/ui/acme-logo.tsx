import { GlobeAltIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import { poppins } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${poppins.className} flex flex-row items-center leading-none text-white`}
    >
      <RocketLaunchIcon className="h-12 w-12 rotate-[15deg] mr-4" />
      <p className="text-[44px]">Rocket</p>
    </div>
  );
}
