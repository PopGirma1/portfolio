
import * as React from 'react';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function About() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="about-page">
            <div className="about-content">
                <CardContent>
                    <CardHeader
                        title="Girmay Tadese"
                    />

                    <CardMedia>
                        <div>
                            <img className="welcome-pic" src={process.env.PUBLIC_URL + '/image/girmay.JPG'} alt="Abel Zemo Profile Picture" />
                        </div>
                    </CardMedia>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Full Stack Developer and Cypress End to End System Tester.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                </CardContent>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            I am highly interested to apply for the job opportunity at your organization and I
                            hope to anticipate a positive response from you soon.
                            Would you kindly keep me at the forefront of your mind, as I am very much
                            genuine in my desire to join and share your organization.
                            Hopefully, I would highly appreciate it at any given date and time convenient
                            for you.
                            I am looking forward for your prompt consideration and approval in this matter,
                            as I will be glad to offer and provide my abilities and qualifications to your
                            organization.
                            Please find attached a copy of my curriculum vitae, which outlines my
                            personal details and educational background.
                        </Typography>
                        <Typography paragraph>
                            I am looking forward to work in a comparative and productive company, in order to
                            improve my skills, increase my knowledge in my field of study and experience, and to
                            be able to demonstrate highest levels of excellence and efficient work through a
                            complete teamwork; I am eager to learn whatever I need to finish work successfully.
                        </Typography>
                    </CardContent>
                </Collapse>
            </div>
        </div>
    );
}
