import CircularProgress from '@mui/material/CircularProgress';
import './style.scss';


export const Progress = () => {
    return (
        <div className="progress_container">
          <CircularProgress color="primary" />
        </div>
    );
}