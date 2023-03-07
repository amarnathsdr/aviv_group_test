import { ReactComponent as MailIcon } from '../../../assets/icon-mail.svg';

function RealtorMessageDetailsEmpty() {
  return (
    <div className="flex flex-col w-3/4 items-center justify-center -mt-10">
      <MailIcon className="w-16 h-16 text-gray-400" />
      <span className="text-lg font-semibold">No message selected</span>
      <span className="text-sm text-gray-500">Click on a message</span>
    </div>
  );
}
export default RealtorMessageDetailsEmpty;
