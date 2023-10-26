import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import ArtButton from '../ArtButton/ArtButton.js';

import bg from "./assets/introTwo.jpg";
import styles from './Profile.module.scss';


export default function ProfileComp(){
    return(
        <div className={styles.Card}> 
            <Card sx={{ maxWidth: 645 }}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={bg}
                    alt="green iguana"
                />
                <CardContent>
                    <Stack >
                        <Avatar sx={{ bgcolor: deepPurple[500] }}>Op</Avatar>
                        <h2>
                            Lorem
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum d
                        </p>
                        <ArtButton />
                    </Stack>
                </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}