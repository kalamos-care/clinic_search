import React, { FC } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Container, Grid, Typography, Card, CardContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    hero: {
        margin: theme.spacing(4, 0),
    },
    heroContent: {
        padding: theme.spacing(4, 0),
    },
    card: {
        padding: 4,
        margin: "auto",
        maxWidth: "360px",
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));

export const Hero: FC = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Grid container justify="center" className={classes.hero}>
            <Grid item xs={12} className={classes.heroContent}>
                <Typography variant="h3" align="center" gutterBottom>PrEP is lifesaving-<br />but what is PrEP?</Typography>
                <Typography variant="h6" gutterBottom>Often times, we think of PrEP as a pill, and it is!</Typography>
                <Typography variant="body1" gutterBottom>PrEP – or Pre-exposure Prophylaxis – commonly refers to drugs taken before exposure to prevent HIV infections. In France, they’ve begun trials for a <a href="http://www.aidsmap.com/news/feb-2017/experimental-sti-prophylaxis-prep-users-produces-big-drops-syphilis-and-chlamydia">proactive medication regimen to prevent syphilis</a> and they’re also referring to it as PrEP. This raises an important question, if PrEP can prevent syphilis and HIV, but are different protocols, what then is PrEP?</Typography>
                <Typography variant="h6" gutterBottom>It's more than that though. PreExposure Prophylaxis means taking actions to protect yourself and your community before sexual activities.</Typography>
                <Typography variant="body1" gutterBottom>Scientific advances have started to free a generation of queer people from the shackles of the historic trauma of the AIDS Crisis. For many people, PrEP medication has replaced other forms of protection adopted during the epidemic. Expanding our definitions of PrEP is critical to further empowering and protecting our most vulnerable.</Typography>
            </Grid>
            <Grid item xs={12} className={classes.heroContent}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} variant="h5" component="h2">
                            pro{bull}phy{bull}lax{bull}is
                        </Typography>
                        <Typography variant="subtitle2" className={classes.pos} color="textSecondary">
                            noun
                        </Typography>
                        <Typography variant="body2" component="p">
                            action taken to prevent disease, especially by specified means or against a specified disease.
                            <br />
                            {'"pre-exposure prophylaxis for HIV"'}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} className={classes.heroContent}>
                <Typography variant="subtitle1" gutterBottom>
                    Does Truvada prevent HIV? <a href="https://www.cdc.gov/hiv/basics/prep.html">Absolutely</a>.
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Does doxycycline prevent syphilis? <a href="http://www.aidsmap.com/news/feb-2017/experimental-sti-prophylaxis-prep-users-produces-big-drops-syphilis-and-chlamydia">Results are promising</a>.
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Do condoms prevent STIs? <a href="https://www.cdc.gov/condomeffectiveness/brief.html">Yup</a>.
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    You know what else reduces STIs – <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5763398/">talking about sexual health</a>.
                </Typography>
            </Grid><Grid item xs={12} className={classes.heroContent}>
                <Typography variant="body1" gutterBottom>
                    Taken at its most literal definition, pre-exposure prophylaxis is simply any preventative action taken before potentially being exposed to a pathogen. For the sake of this diatribe, I’ll keep PrEP discussions focused on sex, because hand sanitizer doesn’t really help alleviate sexual shame.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    By broadening our definition, we can create a spectrum of practices that fall under PrEP. Talking with your partner about sexual history, putting on a condom, using lube, and taking PrEP medication regularly can all reduce the chances of contracting an STI.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    In fact, our definition of PEP–Post-exposure Prophylaxis–should evolve too to include getting tested, taking medication, and notifying partners. When we’re anxious, it can be difficult to know what to do, which means professional healthcare providers have work to do in making patients feel comfortable and safe in the moment.
                </Typography>
            </Grid>
            <Grid item xs={12} className={classes.heroContent}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} variant="h5" component="h2">
                            What do I say when asked if I'm on PrEP?
                        </Typography>
                        <Typography variant="body2" component="p">
                            I say that I take PrEP medication on-demand, get screened quarterly, and share the number of partners I’ve had recently.<br />I’m confident and PrEPared to love.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} className={classes.heroContent}>
                <Typography variant="body1" gutterBottom>
                    Being PrEPared is a spectrum. Some PrEP medication patients choose not to use any other prevention techniques, while others incorporate a multitude. Some people aren’t on PrEP medication, and rely on condoms to protect themselves and their community. One thing is universally true, we don’t talk about sexual wellness enough.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Our true mission is to empower everyone love freely, regardless of gender or sexuality. That means not only making it easier to get safer-sex supplies, but also lowering social stigma around being sexually active. We’ve barely taken our first step, but we’re excited for the journey.
                </Typography>
                <Typography variant="h6" gutterBottom>If you're interested in PrEP medication or other sexual health resources, just enter your zip code below.</Typography>
            </Grid>
        </Grid>
    );
};

export default Hero;