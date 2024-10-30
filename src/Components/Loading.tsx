// src/components/Loading.tsx
import React from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';

interface LoadingProps {
    message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = "Loading..." }) => {
    return (
        <Box style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <LinearProgress style={{ width: '100%', position: 'absolute', top: 0 }} />
            <Box style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}>
                <Typography variant="h6">{message}</Typography>
            </Box>
        </Box>
    );
};

export default Loading;
