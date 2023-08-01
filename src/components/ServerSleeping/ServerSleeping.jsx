import { useRef, useState } from 'react';
import { useEffect } from 'react';
import {
  Box,
  Title,
  CountWrap,
  CountSeconds,
  CountMilliseconds,
} from './ServerSleeping.styled';

export const ServerSleeping = () => {
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [componentVisible, setComponentVisible] = useState(null);

  const intervalIdSec = useRef(null);
  const intervalIdsetMsec = useRef(null);

  useEffect(() => {
    intervalIdSec.current = setInterval(() => {
      setSeconds(pS => pS + 1);
    }, 1000);
    intervalIdsetMsec.current = setInterval(() => {
      setMilliseconds(pS => {
        return pS > 70 ? 10 : pS + 1;
      });
    }, 1);

    setTimeout(() => {
      setComponentVisible(true);
    }, 500);
    return () => {
      clearInterval(intervalIdSec.current);
      clearInterval(intervalIdsetMsec.current);
    };
  }, []);

  return !componentVisible ? null : (
    <Box>
      <Title>
        We use the free version of the server on render.com, because of this we
        have to wait until the server wakes up (about 200s). Thank you!
      </Title>
      <CountWrap>
        <CountSeconds>{seconds},</CountSeconds>
        <CountMilliseconds>{milliseconds}</CountMilliseconds>
      </CountWrap>
    </Box>
  );
};
