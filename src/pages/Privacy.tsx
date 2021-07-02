import React, { FC } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Grid, Typography } from '@material-ui/core/';

import PageTitle from '../components/PageTitle';

const useStyles = makeStyles((theme) => ({

}));

const copy = [
    {
        header: "",
        body: [
            { paragraph: "Kalamos Care, Inc. (“Kalamos,” “we,” or “us,”) is committed to protecting your privacy. This Privacy Policy (“Privacy Policy”) along with our Terms of Use constitute a valid and binding contract between you (“you” or the “Client”) and Kalamos. This Privacy Policy describes how Kalamos collects, uses, secures, and shares information we receive from you when you access this website, https://kalamos.care/ (“the Website” or “this Website”), our STI testing management services or other services, and software provided on or in connection with such services (collectively, “the “Services”). You acknowledge that this Privacy Policy is part of our Terms of Use, and by agreeing to use the Services, you are agreeing to be bound by all of its terms and conditions and all applicable laws and regulations. If you do not agree to these terms, you are prohibited from using or accessing the Services." },
            { paragraph: "By using our Website or Services, you are consenting to have your personal information transferred to and processed in the United States.We make no assurances that the Website is suitable for use outside the United States." },
        ],
    },
    {
        header: "INFORMATION WE COLLECT",
        body: [
            { paragraph: "In order to provide you with our Services, we may collect, store, and use personally identifiable information that can be used to identify you by itself or when it is combined with other information (“Personal Information”). Personal Information may include identifiers such as name, address, cell phone number, financial, insurance, and credit card information or email address. We may collect Personal Information from you in a variety of ways, including through a registration form, by you filling in forms or by submitting information on the Services or by corresponding with us by phone, email, or otherwise. Personal Information includes Medical Information and Insurance Information, as defined below." },
            { paragraph: "In order to use our Services, we may require you to complete intake forms which request Personal Information such as medical and demographic information (“Medical Information”) and/or insurance information (“Insurance Information”) for use by Kalamos and your physician or healthcare provider (the “Provider”)." },
            {paragraph: "You will be asked to provide Medical Information relating to you, which may include, but is not limited to, age, disease history, medical test results, and medical treatments. The Provider may provide us with additional Medical Information regarding your medical status and/or the care you may receive. We will also ask that you provide certain information regarding your Provider, including his/her name, address and contact information,National Provider Identification (NPI) and Medicaid provider numbers, and information regarding his/her current electronic medical records (EMR) system in order to allow us to provide you our Services." },
            {paragraph: "You may also be asked to provide Insurance Information, including the name of your insurance provider, your policy holder’s name, a Member ID number or personal insurance account number, and your relationship to the policy holder. We will also request a customer service or contact phone number associated with your insurance provider. This information will be requested for both your primary and secondary insurance, as applicable." },
            {paragraph: "You will also be asked to provide an email address so that we and/or the Provider may contact you with relevant reminders and updates about the Services." },
            {paragraph: "Personal Information collected through the Service and submitted to the Provider may become part of your medical record (both paper and electronic) with the Provider and will be subject to applicable laws, rules, regulations, and guidelines relating to the handling of Personal Information and medical records." },
            {paragraph: "Entry of Personal Information through the Services is completely voluntary and it is your choice to provide us with the Personal Information requested. Please be aware that failure to provide the requested Personal Information may prevent us from providing you Services." },
            {paragraph: "From time to time, Kalamos may share aggregate, non-personal information about website usage with third parties, including government agencies and advertisers. Aggregate information does not contain any Personal Information about our users." },
        ],
    },
];


export const Privacy: FC = () => {
    const classes = useStyles();

    return (
        <Grid container>
            <PageTitle title="Privacy Policy" />
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
                            {section.body.map((i) => (
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

export default Privacy;