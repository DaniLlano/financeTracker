import React from 'react';
import { Card, CardHeader, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useStyles from './styles';
import useTranstactions from '../../useTransactions';

const DetailsCard = () => {
    const { total, chartData } = useTranstactions(title);
    const classes = useStyles();

    return (
        <Card className={ title === 'Income' ? classes.income : classes.expense}>
            <CardHeader title={title} subheader={subheader} />
            <CardContent>
                <Typography variant="h5">${total}</Typography>
                <Doughnut data={chartData} />
            </CardContent>
        </Card>
    )
}

export default Details