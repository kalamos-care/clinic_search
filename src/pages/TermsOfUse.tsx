import { FC } from 'react';

import { Grid, Typography } from '@material-ui/core/';

import PageTitle from '../components/PageTitle';

const copy = [
    {
        header: "Sexual health is awkward. It doesn't have to be.",
        body_text: [
            { paragraph: "It can be awkward to talk to someone you don't know about sex. Hell, it can be hard to talk to someone you do know about sex. And it's even harder when you're concerned something might be wrong." },
            { paragraph: "As a result, sexual healthcare is too often reactionary and fear-based. Kalamos is all about turning that on its head." },
            { paragraph: "We know there's a better way. We know that patients are capable of being active participants in their care. We know by creating convenient services, we enable more people to get the care they need." },
        ],
    },
];

export const TermsOfUse: FC = () => {

    return (
        <Grid container>
            <PageTitle title="Terms Of Use" />
            <Grid item xs={12}>
                {copy.map((section) => (
                    <Grid>
                        <Typography
                            variant="h6"
                            color="textPrimary"
                            gutterBottom
                        >
                            {section.header}
                        </Typography>
                        <Grid>
                            {section.body_text.map((i) => (
                                <Typography variant="body1" paragraph>
                                    {i.paragraph}
                                </Typography>
                            ))}
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default TermsOfUse;