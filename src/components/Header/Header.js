import styles from './Header.module.scss';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <>
            <ButtonGroup variant="contained" className={styles.Header}  aria-label="outlined primary button group">
                <Button> <Link to='/profile'> профиль </Link> </Button>
                <Button> <Link to='/createPost'> Создать пост </Link> </Button>
                <Button> <Link to='/postsMy'> Мои посты </Link> </Button>
                <Button>Статистика</Button>
            </ButtonGroup>
        </>
    );
}