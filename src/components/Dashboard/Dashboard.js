import React, { useEffect } from 'react';
import Header from './Header/Header';
import SalesPerformance from './SalesPerformance/SalesPerformance';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSalesData } from '../../store/action/sales';
import { makeStyles } from '@material-ui/core/styles';
import SalesReport from './SalesReport/SalesReport';
import CompanyAgentStatus from './CompanyAgentStatus/CompanyAgentStatus';
import TimeManagement from './TimeManagement/TimeManagement';

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: '240px'
    },
    toolbar: theme.mixins.toolbar,
}));

const Dashboard = () => {
    const classes = useStyles();

    const { salesData } = useSelector( state => ({
        salesData: state.salesData
    }));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSalesData());
    }, [ dispatch ]);

    let salesTime = [], iPhoneSales = [], iPadSales = [], MacSales = [];
    let iPhoneSalesFourthQ = 0, iPadSalesFourthQ = 0, MacSalesFourthQ = 0;
    
    // The comparison of sales performance for each product between the last two quarters
    let iPhoneSalesPerfComp = 0, iPadSalesPerfComp = 0, MacSalesPerfComp = 0;

    if (salesData.length !== 0) {
        salesData.forEach(element => {
            salesTime.push(element.Time);
            iPhoneSales.push(element.iPhone);
            iPadSales.push(element.iPad);
            MacSales.push(element.Mac);
        });
        [iPhoneSalesPerfComp, iPadSalesPerfComp, MacSalesPerfComp] = [iPhoneSales, iPadSales, MacSales].map(
            element => {
                let eleLength = element.length;
                return (element[eleLength-1] - element[eleLength - 2]) / element[eleLength - 2];
            }
        );
        [iPhoneSalesFourthQ, iPadSalesFourthQ, MacSalesFourthQ] = [iPhoneSales, iPadSales, MacSales].map(
            element => element[element.length - 1]
        );
    }

    return(
        <section className={classes.root}>
            <div className={classes.toolbar} />  
            <Header />
            <SalesPerformance 
                iPhoneSalesFourthQ = { iPhoneSalesFourthQ }
                iPadSalesFourthQ = { iPadSalesFourthQ }
                MacSalesFourthQ = { MacSalesFourthQ }
                iPhoneSalesPerfComp = { iPhoneSalesPerfComp } 
                iPadSalesPerfComp = {iPadSalesPerfComp}
                MacSalesPerfComp = {MacSalesPerfComp} />
            <SalesReport salesData = { salesData }/>
            <CompanyAgentStatus />
            <TimeManagement />
        </section>
    );
}

export default Dashboard;