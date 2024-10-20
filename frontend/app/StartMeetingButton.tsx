'use client';

import { generateRoomId } from '@/lib/client-utils';
import { Button } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';

const StartMeetingButton = () => {
  const router = useRouter();

  const startMeeting = () => {
    router.push(`/rooms/${generateRoomId()}`);
  };
  return (
    <Button className="btn btn-primary" onClick={startMeeting}>
      Start Meeting
    </Button>
  );
};

export default StartMeetingButton;
