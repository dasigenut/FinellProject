import { observer } from "mobx-react-lite";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import NewAppointment from './addAppointment';

const SingleService = observer((props) => {
    const { typeService, descraption } = props;
    const [showNewAppointment, setShowNewAppointment] = useState(false);

    const handleAddAppointmentClick = () => {
        setShowNewAppointment(true);
    };

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={<img src="../images/9999999-300x300.webp" alt="תמונת דוגמה" />}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {typeService}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {descraption}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={handleAddAppointmentClick} size="small">AddApointment</Button>
                </CardActions>
            </Card>
            {showNewAppointment && <NewAppointment />}
        </div>
    );
});

export default SingleService;
