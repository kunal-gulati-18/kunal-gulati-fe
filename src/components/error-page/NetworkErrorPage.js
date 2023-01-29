import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';
import Lottie from "lottie-react";

const NetworkErrorWrapper = styled.div `

`;
const NetworkError = () => {
    const lottieRef= useRef();
    useEffect(() => {   
        create({
            mode: 'scroll',
            player: '#firstLottie',
            actions: [
              {
                visibility: [0, 1],
                type: 'seek',
                frames: [0, 100],
              },
            ],
          });
        return () => {
            
        }
    }, [])
    return (
        <NetworkErrorWrapper>
                network error
                <lottie-player
                ref={lottieRef} // 2. set the reference for the player
                id="firstLottie"
                controls
                mode="normal"
                src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
                style={{ width: '320px' }}
                ></lottie-player>
        </NetworkErrorWrapper>
    );
};

export default NetworkError;