import * as actionTypes from './actionTypes';
import * as d3 from 'd3';
import dataFile from '../../assets/files/apple-sales-quarter.csv';

const fetchSales = (salesData) => {
    return {
        type: actionTypes.FETCH_SALES,
        salesData: salesData,
    }
}

export const fetchSalesData = () => {
    return dispatch => {
        d3.csv(dataFile).then( data => {
            dispatch(fetchSales(data));
        })
        .catch(error => console.log(error))
    }
}


