import { Box } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';
import p1 from '../../../assets/images/n1o.png';
import p2 from '../../../assets/images/n2.png';
import p3 from '../../../assets/images/n3.png';
import p4 from '../../../assets/images/n4.png';
import p5 from '../../../assets/images/n5.png';
import p6 from '../../../assets/images/no.png';
import { useSelector } from 'react-redux';
import { useSocket } from '../../../shared/socket/SocketContext';

const ShowImages = () => {
  const socket = useSocket();
  const [rotation, setRotation] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const game_history_data = useSelector(
    (state) => state.aviator.gameHistory_trx_one_min
  );
  const imgageArray = [p1, p2, p3, p4, p5, p6];
  const resultString = game_history_data?.[0]?.result_string;
  const resultArray = resultString ? resultString?.split(',').map(Number) : [];

  const rotationInterval = useRef(null);

  const Timer1 = () => {
    setIsRotating(true);
    let rotationIndex = 0;
    rotationInterval.current = setInterval(() => {
      setRotation(rotationIndex);
      rotationIndex = (rotationIndex + 1) % imgageArray.length;
    }, 400); // Change image every 200ms

    setTimeout(() => {
      clearInterval(rotationInterval.current);
      setIsRotating(false);
    }, 9000);
  };

  useEffect(() => {
    const handleThreeMin = (onemin) => {
      const t = Number(String(onemin)?.split('_')?.[1]);
      const time_to_be_intro = t > 0 ? 60 - t : t;
      if (time_to_be_intro <= 10) {
        Timer1();
      }
    };
    socket.on('onemin', handleThreeMin);

    return () => {
      socket.off('onemin', handleThreeMin);
      if (rotationInterval.current) clearInterval(rotationInterval.current);
    };
  }, [socket]);

  return (
    <>
      <div className="border-8 border-[#00b977] !h-32 my-4 p-1 rounded-lg !overflow-hidden bg-[#00b977]">
        <div className="grid grid-cols-3 gap-2">
          {resultArray.map((num, index) => (
            <div key={index} className="flex flex-col gap-1 justify-start">
              <Box className="w-100 bg-[#727272] p-2 border-4 border-green-800 rounded-lg">
                <Box
                  component="img"
                  className="w-20 !mr-2 !mb-2"
                  src={
                    isRotating ? imgageArray[rotation] : imgageArray[num - 1]
                  } // Show rotating image or static image
                  alt={`image-${num}`}
                />
              </Box>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShowImages;
