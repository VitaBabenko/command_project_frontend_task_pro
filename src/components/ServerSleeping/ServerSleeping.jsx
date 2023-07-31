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
  const intervalIdComponentVisible = useRef(null);

  useEffect(() => {
    intervalIdSec.current = setInterval(() => {
      setSeconds(pS => pS + 1);
    }, 1000);
    intervalIdsetMsec.current = setInterval(() => {
      setMilliseconds(pS => {
        return pS > 70 ? 10 : pS + 1;
      });
    }, 1);
    intervalIdComponentVisible.current = setInterval(() => {
      setComponentVisible(true);
    }, 500);
    return () => {
      clearInterval(intervalIdSec.current);
      clearInterval(intervalIdsetMsec.current);
      clearInterval(intervalIdComponentVisible.current);
    };
  }, []);

  return !componentVisible ? null : (
    <Box>
      <Title>
        We use the free version of the server on render.com, because of this we
        have to wait until the server wakes up (about 500s). Thank you!
      </Title>
      <CountWrap>
        <CountSeconds style={{ fontSize: '40px', fontWeight: 900 }}>
          {seconds},
        </CountSeconds>
        <CountMilliseconds>{milliseconds}</CountMilliseconds>
      </CountWrap>
    </Box>
  );
};
