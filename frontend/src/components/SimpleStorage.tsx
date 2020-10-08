import { Box, Heading } from 'grommet';
import React, { useContext, useEffect } from 'react';
import { ContractsContext, SimpleStorageContext } from '../BuidlerSymfoniReact';
import log from 'loglevel';

interface Props { }

export const SimpleStorage: React.FC<Props> = () => {
    const [SimpleStorage] = useContext(SimpleStorageContext)

    useEffect(() => {
        const doAsync = async () => {
            console.log("Check sim", SimpleStorage)
            if (SimpleStorage.instance) {
                console.log(await SimpleStorage.instance.getDocumentList())
            }
        };
        doAsync();
    }, [SimpleStorage])
    return (
        <Box>
            <Heading >Me</Heading>
        </Box>
    )
}