import { CREATE_ORDER_CLIENT , DELETE_ORDER_CLIENT } from '../types/types';
import {orders} from '../api';

const createOrder = (order) => ({
    type : CLIENT_ORDER_CREATE,
    order
})

const deleteOrder = (order) => ({
    type : DELETE_ORDER_CLIENT ,
})


export default createOrderClient = () => dispatch => {
    orders.createOrder().then((order) => {
        dispatch(createOrder())
    })
}

export default deleteOrderClient = () => dispatch => {
    orders.createOrder().then((order) => {
        dispatch(createOrder())
    })
}